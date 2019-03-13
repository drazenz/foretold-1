open Utils;
open Rationale;
open Style.Grid;

module Styles = {
  open Css;
  let sidebar =
    style([Css.float(`left), left(px(0)), backgroundColor(hex("eee"))]);

  let body = style([marginLeft(px(200)), padding(px(30))]);

  let header =
    style([
      backgroundColor(hex("f5f7f9")),
      padding2(~v=`px(10), ~h=`px(13)),
      border(`px(1), `solid, `hex("e8f2f9")),
      borderRadius(`px(3)),
      marginBottom(`px(10)),
    ]);
};

type state = {selected: option(string)};

type action =
  | UpdateSelected(string);

let component = ReasonReact.reducerComponent("Measurables");

let seriesTop = (series: GetSeries.series) =>
  <Div flexDirection=`column styles=[Styles.header]>
    <Div flex=1>
      <Div flexDirection=`row>
        <Div flex=6>
          <h2>
            <Icon.Icon icon="LAYERS" />
            {series.name |> Option.default("") |> ste}
          </h2>
          <p> {series.description |> Option.default("") |> ste} </p>
        </Div>
        <Div flex=1 />
      </Div>
    </Div>
    <Div flex=1 />
  </Div>;

let make =
    (~channel: string, ~id: string, ~loggedInUser: GetUser.t, _children) => {
  ...component,
  initialState: () => {selected: None},
  reducer: (action, _state) =>
    switch (action) {
    | UpdateSelected(str) => ReasonReact.Update({selected: Some(str)})
    },
  render: ({state, send}) => {
    let top =
      GetSeries.component(~id, series =>
        series |> E.O.fmap(seriesTop) |> E.O.React.defaultNull
      );

    let medium =
      GetMeasurables.componentWithSeries(channel, id, measurables =>
        <SeriesShowTable
          measurables
          selected={state.selected}
          onClick={id => send(UpdateSelected(id))}
        />
      );

    let bottom =
      state.selected
      |> E.O.fmap(elId => <MeasurableShow__Component id=elId loggedInUser />)
      |> E.O.React.defaultNull;

    <div>
      top
      <div className=SeriesShowTableStyles.topPart> medium </div>
      bottom
    </div>;
  },
};