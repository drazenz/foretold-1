// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var Utils$Client = require("../../utils/Utils.bs.js");
var Victory$Client = require("../../utils/Victory.bs.js");

var component = ReasonReact.statelessComponent("MeasurableChart");

function toUnix(x) {
  return x.createdAt.unix();
}

function make(measurements, _) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function () {
              var sorted = Utils$Client.catOptionals(measurements).sort((function (a, b) {
                      var match = b.createdAt.unix() > a.createdAt.unix();
                      if (match) {
                        return -1;
                      } else {
                        return 1;
                      }
                    }));
              var toVal = function (f, e) {
                if (e !== undefined) {
                  return Curry._1(f, Js_primitive.valFromOption(e));
                } else {
                  return 0.0;
                }
              };
              var yMax = $$Array.fold_left((function (a, b) {
                      var match = a > b;
                      if (match) {
                        return a;
                      } else {
                        return b;
                      }
                    }), Number.MIN_VALUE, $$Array.map((function (e) {
                          return toVal((function (e) {
                                        return e[/* p75 */2];
                                      }), e.value[/* trio */0]);
                        }), sorted));
              var yMin = $$Array.fold_left((function (a, b) {
                      var match = a < b;
                      if (match) {
                        return a;
                      } else {
                        return b;
                      }
                    }), Number.MAX_VALUE, $$Array.map((function (e) {
                          return toVal((function (e) {
                                        return e[/* p25 */0];
                                      }), e.value[/* trio */0]);
                        }), sorted));
              var aggregatePercentiles = $$Array.map((function (e) {
                      return {
                              x: new Date(e.relevantAt.format("MMM DD, YYYY HH:MM:ss:SSS")),
                              y: toVal((function (n) {
                                      return n[/* p25 */0];
                                    }), e.value[/* trio */0]),
                              y0: toVal((function (n) {
                                      return n[/* p75 */2];
                                    }), e.value[/* trio */0])
                            };
                    }), sorted.filter((function (e) {
                          return e.competitorType === /* AGGREGATION */497422978;
                        })));
              var competitives = $$Array.map((function (e) {
                      return {
                              x: new Date(e.relevantAt.format("MMM DD, YYYY HH:MM:ss:SSS")),
                              y1: toVal((function (n) {
                                      return n[/* p25 */0];
                                    }), e.value[/* trio */0]),
                              y2: toVal((function (n) {
                                      return n[/* p50 */1];
                                    }), e.value[/* trio */0]),
                              y3: toVal((function (n) {
                                      return n[/* p75 */2];
                                    }), e.value[/* trio */0])
                            };
                    }), sorted.filter((function (e) {
                          return e.competitorType === /* COMPETITIVE */-288189265;
                        })));
              var aggregateMedians = $$Array.map((function (e) {
                      return {
                              x: new Date(e.relevantAt.format("MMM DD, YYYY HH:MM:ss:SSS")),
                              y: toVal((function (n) {
                                      return n[/* p50 */1];
                                    }), e.value[/* trio */0])
                            };
                    }), sorted.filter((function (e) {
                          return e.competitorType === /* AGGREGATION */497422978;
                        })));
              return ReasonReact.element(undefined, undefined, Victory$Client.VictoryChart[/* make */0](undefined, undefined, {
                              x: "time"
                            }, {
                              y: yMax
                            }, {
                              y: yMin
                            }, /* array */[
                              ReasonReact.element(undefined, undefined, Victory$Client.VictoryArea[/* make */0](undefined, aggregatePercentiles, undefined, {
                                        data: {
                                          fill: "f6f6f6"
                                        }
                                      }, /* array */[])),
                              ReasonReact.element(undefined, undefined, Victory$Client.VictoryLine[/* make */0](aggregateMedians, {
                                        data: {
                                          stroke: "#ddd",
                                          strokeWidth: "1",
                                          strokeDasharray: "4 4 4 4"
                                        }
                                      }, /* array */[])),
                              $$Array.mapi((function (i, e) {
                                      return ReasonReact.element(String(i), undefined, Victory$Client.VictoryMeasurement[/* make */0](Js_primitive.some(e), undefined, /* array */[]));
                                    }), competitives)
                            ]));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.component = component;
exports.toUnix = toUnix;
exports.make = make;
/* component Not a pure module */
