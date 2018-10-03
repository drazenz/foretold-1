// Generated by BUCKLESCRIPT VERSION 4.0.6, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Auth0$Client = require("./utils/Auth0.bs.js");
var Profile$Client = require("./pages/Profile.bs.js");
var AgentShow$Client = require("./pages/Agent/AgentShow/AgentShow.bs.js");
var AgentIndex$Client = require("./pages/Agent/AgentIndex.bs.js");
var PaddedLayout$Client = require("./layout/PaddedLayout.bs.js");
var MeasurableNew$Client = require("./pages/Measurable/MeasurableNew/MeasurableNew.bs.js");
var MeasurableShow$Client = require("./pages/Measurable/MeasurableShow/MeasurableShow.bs.js");
var MeasurableIndex$Client = require("./pages/Measurable/MeasurableIndex.bs.js");

require('../node_modules/handsontable/dist/handsontable.full.css');
;

function reducer(action, _) {
  return /* Update */Block.__(0, [/* record */[/* route */action[0]]]);
}

function mapUrlToRoute(url) {
  var match = url[/* path */0];
  if (match) {
    switch (match[0]) {
      case "agents" : 
          var match$1 = match[1];
          if (match$1) {
            if (match$1[1]) {
              return /* Home */0;
            } else {
              return /* AgentShow */Block.__(1, [match$1[0]]);
            }
          } else {
            return /* AgentIndex */1;
          }
      case "callback" : 
          if (match[1]) {
            return /* Home */0;
          } else {
            Auth0$Client.handleAuth(url);
            return /* Home */0;
          }
      case "measurables" : 
          var match$2 = match[1];
          if (match$2) {
            if (match$2[1]) {
              return /* Home */0;
            } else {
              return /* MeasurableShow */Block.__(2, [match$2[0]]);
            }
          } else {
            return /* MeasurableIndex */2;
          }
      case "profile" : 
          if (match[1] || Auth0$Client.userId === undefined) {
            return /* Home */0;
          } else {
            return /* Profile */Block.__(0, [Auth0$Client.userId]);
          }
      default:
        return /* Home */0;
    }
  } else {
    return /* Home */0;
  }
}

function mapUrlToAction(url) {
  return /* ChangeRoute */[mapUrlToRoute(url)];
}

var component = ReasonReact.reducerComponent("App");

function inside(r) {
  if (typeof r === "number") {
    if (r === 2) {
      return ReasonReact.element(undefined, undefined, MeasurableIndex$Client.make(/* array */[]));
    } else {
      return ReasonReact.element(undefined, undefined, AgentIndex$Client.make(/* array */[]));
    }
  } else {
    switch (r.tag | 0) {
      case 0 : 
          return ReasonReact.element(undefined, undefined, Profile$Client.make(r[0], /* array */[]));
      case 1 : 
          return ReasonReact.element(undefined, undefined, AgentShow$Client.make(r[0], /* array */[]));
      case 2 : 
          var id = r[0];
          if (id === "new") {
            return ReasonReact.element(undefined, undefined, MeasurableNew$Client.make(/* array */[]));
          } else {
            return ReasonReact.element(undefined, undefined, MeasurableShow$Client.make(id, /* array */[]));
          }
      
    }
  }
}

function make() {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */(function (self) {
              var url = ReasonReact.Router[/* dangerouslyGetInitialUrl */3](/* () */0);
              Curry._1(self[/* send */3], /* ChangeRoute */[mapUrlToRoute(url)]);
              var watcherID = ReasonReact.Router[/* watchUrl */1]((function (url) {
                      return Curry._1(self[/* send */3], /* ChangeRoute */[mapUrlToRoute(url)]);
                    }));
              return Curry._1(self[/* onUnmount */4], (function () {
                            return ReasonReact.Router[/* unwatchUrl */2](watcherID);
                          }));
            }),
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (self) {
              return ReasonReact.element(undefined, undefined, PaddedLayout$Client.make(/* array */[inside(self[/* state */1][/* route */0])]));
            }),
          /* initialState */(function () {
              return /* record */[/* route : Home */0];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */reducer,
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.reducer = reducer;
exports.mapUrlToRoute = mapUrlToRoute;
exports.mapUrlToAction = mapUrlToAction;
exports.component = component;
exports.inside = inside;
exports.make = make;
/*  Not a pure module */
