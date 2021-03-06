module Query = [%graphql
  {|
    query getMeasurablesStateStats ($channelId: String) {
        openState: measurables(states: [OPEN], channelId: $channelId) {
          total
        }
        closedState: measurables(states: [JUDGED], channelId: $channelId) {
          total
        }
        pendingState: measurables(states: [JUDGEMENT_PENDING], channelId: $channelId) {
          total
        }
    }
  |}
];

type stats = {
  openTotal: int,
  closedTotal: int,
  pendingTotal: int,
};

module QueryComponent = ReasonApollo.CreateQuery(Query);

let getTotal = r => r |> E.O.bind(_, r => r##total);

let toStats = (r: Query.t) =>
  switch (
    r##openState |> getTotal,
    r##closedState |> getTotal,
    r##pendingState |> getTotal,
  ) {
  | (Some(o), Some(c), Some(p)) =>
    Some({openTotal: o, closedTotal: c, pendingTotal: p})
  | _ => None
  };

let componentMaker = (query, innerComponentFn) =>
  QueryComponent.make(~variables=query##variables, o =>
    o.result
    |> E.HttpResponse.fromApollo
    |> E.HttpResponse.fmap(toStats)
    |> innerComponentFn
  )
  |> E.React.el;

let component2 = (~channelId, innerComponentFn) => {
  let query = Query.make(~channelId, ());
  componentMaker(query, innerComponentFn);
};