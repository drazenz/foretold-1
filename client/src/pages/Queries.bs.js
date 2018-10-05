// Generated by BUCKLESCRIPT VERSION 4.0.6, PLEASE EDIT WITH CARE
'use strict';

var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Js_json = require("bs-platform/lib/js/js_json.js");
var MomentRe = require("bs-moment/src/MomentRe.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var ReasonApollo = require("reason-apollo/src/ReasonApollo.bs.js");
var Option$Rationale = require("rationale/src/Option.js");
var Function$Rationale = require("rationale/src/Function.js");

function stringOfcompetitorType(e) {
  if (e !== 497422978) {
    if (e >= 1055622745) {
      return "Objective";
    } else {
      return "Competitive";
    }
  } else {
    return "Aggregation";
  }
}

var ppx_printed_query = "query getAgents  {\nagents  {\nid  \nmeasurementCount  \nuser: User  {\nid  \nname  \n}\n\nbot: Bot  {\nid  \nname  \ndescription  \ncompetitorType  \n}\n\n}\n\n}\n";

function parse(value) {
  var match = Js_json.decodeObject(value);
  if (match !== undefined) {
    var match$1 = Js_primitive.valFromOption(match)["agents"];
    var tmp;
    if (match$1 !== undefined) {
      var match$2 = Js_json.decodeArray(match$1);
      tmp = match$2 !== undefined ? match$2.map((function (value) {
                var match = Js_json.decodeNull(value);
                if (match !== undefined) {
                  return undefined;
                } else {
                  var match$1 = Js_json.decodeObject(value);
                  var tmp;
                  if (match$1 !== undefined) {
                    var value$1 = Js_primitive.valFromOption(match$1);
                    var match$2 = value$1["id"];
                    var field_id;
                    if (match$2 !== undefined) {
                      var match$3 = Js_json.decodeString(match$2);
                      field_id = match$3 !== undefined ? match$3 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(match$2));
                    } else {
                      field_id = Js_exn.raiseError("graphql_ppx: Field id on type Agent is missing");
                    }
                    var match$4 = value$1["measurementCount"];
                    var field_measurementCount;
                    if (match$4 !== undefined) {
                      var match$5 = Js_json.decodeNull(match$4);
                      if (match$5 !== undefined) {
                        field_measurementCount = undefined;
                      } else {
                        var match$6 = Js_json.decodeNumber(match$4);
                        field_measurementCount = match$6 !== undefined ? match$6 | 0 : Js_exn.raiseError("graphql_ppx: Expected int, got " + JSON.stringify(match$4));
                      }
                    } else {
                      field_measurementCount = undefined;
                    }
                    var match$7 = value$1["user"];
                    var field_user;
                    if (match$7 !== undefined) {
                      var match$8 = Js_json.decodeNull(match$7);
                      if (match$8 !== undefined) {
                        field_user = undefined;
                      } else {
                        var match$9 = Js_json.decodeObject(match$7);
                        var tmp$1;
                        if (match$9 !== undefined) {
                          var value$2 = Js_primitive.valFromOption(match$9);
                          var match$10 = value$2["id"];
                          var field_id$1;
                          if (match$10 !== undefined) {
                            var match$11 = Js_json.decodeString(match$10);
                            field_id$1 = match$11 !== undefined ? match$11 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(match$10));
                          } else {
                            field_id$1 = Js_exn.raiseError("graphql_ppx: Field id on type User is missing");
                          }
                          var match$12 = value$2["name"];
                          var field_name;
                          if (match$12 !== undefined) {
                            var match$13 = Js_json.decodeString(match$12);
                            field_name = match$13 !== undefined ? match$13 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(match$12));
                          } else {
                            field_name = Js_exn.raiseError("graphql_ppx: Field name on type User is missing");
                          }
                          tmp$1 = /* record */[
                            /* id */field_id$1,
                            /* name */field_name
                          ];
                        } else {
                          tmp$1 = Js_exn.raiseError("graphql_ppx: Expected object of type User, got " + JSON.stringify(match$7));
                        }
                        field_user = tmp$1;
                      }
                    } else {
                      field_user = undefined;
                    }
                    var match$14 = value$1["bot"];
                    var field_bot;
                    if (match$14 !== undefined) {
                      var match$15 = Js_json.decodeNull(match$14);
                      if (match$15 !== undefined) {
                        field_bot = undefined;
                      } else {
                        var match$16 = Js_json.decodeObject(match$14);
                        var tmp$2;
                        if (match$16 !== undefined) {
                          var value$3 = Js_primitive.valFromOption(match$16);
                          var match$17 = value$3["id"];
                          var field_id$2;
                          if (match$17 !== undefined) {
                            var match$18 = Js_json.decodeString(match$17);
                            field_id$2 = match$18 !== undefined ? match$18 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(match$17));
                          } else {
                            field_id$2 = Js_exn.raiseError("graphql_ppx: Field id on type Bot is missing");
                          }
                          var match$19 = value$3["name"];
                          var field_name$1;
                          if (match$19 !== undefined) {
                            var match$20 = Js_json.decodeNull(match$19);
                            if (match$20 !== undefined) {
                              field_name$1 = undefined;
                            } else {
                              var match$21 = Js_json.decodeString(match$19);
                              field_name$1 = match$21 !== undefined ? match$21 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(match$19));
                            }
                          } else {
                            field_name$1 = undefined;
                          }
                          var match$22 = value$3["description"];
                          var field_description;
                          if (match$22 !== undefined) {
                            var match$23 = Js_json.decodeNull(match$22);
                            if (match$23 !== undefined) {
                              field_description = undefined;
                            } else {
                              var match$24 = Js_json.decodeString(match$22);
                              field_description = match$24 !== undefined ? match$24 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(match$22));
                            }
                          } else {
                            field_description = undefined;
                          }
                          var match$25 = value$3["competitorType"];
                          var field_competitorType;
                          if (match$25 !== undefined) {
                            var match$26 = Js_json.decodeString(match$25);
                            if (match$26 !== undefined) {
                              var value$4 = match$26;
                              switch (value$4) {
                                case "AGGREGATION" : 
                                    field_competitorType = /* AGGREGATION */497422978;
                                    break;
                                case "COMPETITIVE" : 
                                    field_competitorType = /* COMPETITIVE */-288189265;
                                    break;
                                case "OBJECTIVE" : 
                                    field_competitorType = /* OBJECTIVE */1055622745;
                                    break;
                                default:
                                  field_competitorType = Js_exn.raiseError("graphql_ppx: Unknown enum variant for competitorType: " + value$4);
                              }
                            } else {
                              field_competitorType = Js_exn.raiseError("graphql_ppx: Expected enum value for competitorType, got " + JSON.stringify(match$25));
                            }
                          } else {
                            field_competitorType = Js_exn.raiseError("graphql_ppx: Field competitorType on type Bot is missing");
                          }
                          tmp$2 = /* record */[
                            /* competitorType */field_competitorType,
                            /* description */field_description,
                            /* id */field_id$2,
                            /* name */field_name$1
                          ];
                        } else {
                          tmp$2 = Js_exn.raiseError("graphql_ppx: Expected object of type Bot, got " + JSON.stringify(match$14));
                        }
                        field_bot = tmp$2;
                      }
                    } else {
                      field_bot = undefined;
                    }
                    tmp = /* record */[
                      /* id */field_id,
                      /* measurementCount */field_measurementCount,
                      /* bot */field_bot,
                      /* user */field_user
                    ];
                  } else {
                    tmp = Js_exn.raiseError("graphql_ppx: Expected object of type Agent, got " + JSON.stringify(value));
                  }
                  return tmp;
                }
              })) : Js_exn.raiseError("graphql_ppx: Expected array, got " + JSON.stringify(match$1));
    } else {
      tmp = Js_exn.raiseError("graphql_ppx: Field agents on type Query is missing");
    }
    return {
            agents: tmp
          };
  } else {
    return Js_exn.raiseError("graphql_ppx: Object is not a value");
  }
}

function make() {
  return {
          query: ppx_printed_query,
          variables: null,
          parse: parse
        };
}

function makeWithVariables() {
  return {
          query: ppx_printed_query,
          variables: null,
          parse: parse
        };
}

function ret_type() {
  return /* module */[];
}

var MT_Ret = /* module */[];

var GetAgents = /* module */[
  /* ppx_printed_query */ppx_printed_query,
  /* query */ppx_printed_query,
  /* parse */parse,
  /* make */make,
  /* makeWithVariables */makeWithVariables,
  /* ret_type */ret_type,
  /* MT_Ret */MT_Ret
];

var GetAgentsQuery = ReasonApollo.CreateQuery([
      ppx_printed_query,
      parse
    ]);

function jsonToString(e) {
  return Option$Rationale.$$default("", Js_json.decodeString(e));
}

var partial_arg = Function$Rationale.Infix[/* ||> */1];

function toMoment(param) {
  return partial_arg(jsonToString, (function (eta) {
                return MomentRe.moment(undefined, eta);
              }), param);
}

var ppx_printed_query$1 = "query getMeasurables  {\nmeasurables  {\nid  \nname  \nvalueType  \nisLocked  \nmeasurementCount  \ncreatedAt  \nupdatedAt  \n}\n\n}\n";

function parse$1(value) {
  var match = Js_json.decodeObject(value);
  if (match !== undefined) {
    var match$1 = Js_primitive.valFromOption(match)["measurables"];
    var tmp;
    if (match$1 !== undefined) {
      var match$2 = Js_json.decodeArray(match$1);
      tmp = match$2 !== undefined ? match$2.map((function (value) {
                var match = Js_json.decodeNull(value);
                if (match !== undefined) {
                  return undefined;
                } else {
                  var match$1 = Js_json.decodeObject(value);
                  var tmp;
                  if (match$1 !== undefined) {
                    var value$1 = Js_primitive.valFromOption(match$1);
                    var match$2 = value$1["id"];
                    var field_id;
                    if (match$2 !== undefined) {
                      var match$3 = Js_json.decodeString(match$2);
                      field_id = match$3 !== undefined ? match$3 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(match$2));
                    } else {
                      field_id = Js_exn.raiseError("graphql_ppx: Field id on type Measurable is missing");
                    }
                    var match$4 = value$1["name"];
                    var field_name;
                    if (match$4 !== undefined) {
                      var match$5 = Js_json.decodeString(match$4);
                      field_name = match$5 !== undefined ? match$5 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(match$4));
                    } else {
                      field_name = Js_exn.raiseError("graphql_ppx: Field name on type Measurable is missing");
                    }
                    var match$6 = value$1["valueType"];
                    var field_valueType;
                    if (match$6 !== undefined) {
                      var match$7 = Js_json.decodeString(match$6);
                      if (match$7 !== undefined) {
                        var value$2 = match$7;
                        switch (value$2) {
                          case "DATE" : 
                              field_valueType = /* DATE */757341742;
                              break;
                          case "FLOAT" : 
                              field_valueType = /* FLOAT */8715644;
                              break;
                          case "PERCENTAGE" : 
                              field_valueType = /* PERCENTAGE */-566884582;
                              break;
                          default:
                            field_valueType = Js_exn.raiseError("graphql_ppx: Unknown enum variant for valueType: " + value$2);
                        }
                      } else {
                        field_valueType = Js_exn.raiseError("graphql_ppx: Expected enum value for valueType, got " + JSON.stringify(match$6));
                      }
                    } else {
                      field_valueType = Js_exn.raiseError("graphql_ppx: Field valueType on type Measurable is missing");
                    }
                    var match$8 = value$1["isLocked"];
                    var field_isLocked;
                    if (match$8 !== undefined) {
                      var match$9 = Js_json.decodeBoolean(match$8);
                      field_isLocked = match$9 !== undefined ? match$9 : Js_exn.raiseError("graphql_ppx: Expected boolean, got " + JSON.stringify(match$8));
                    } else {
                      field_isLocked = Js_exn.raiseError("graphql_ppx: Field isLocked on type Measurable is missing");
                    }
                    var match$10 = value$1["measurementCount"];
                    var field_measurementCount;
                    if (match$10 !== undefined) {
                      var match$11 = Js_json.decodeNull(match$10);
                      if (match$11 !== undefined) {
                        field_measurementCount = undefined;
                      } else {
                        var match$12 = Js_json.decodeNumber(match$10);
                        field_measurementCount = match$12 !== undefined ? match$12 | 0 : Js_exn.raiseError("graphql_ppx: Expected int, got " + JSON.stringify(match$10));
                      }
                    } else {
                      field_measurementCount = undefined;
                    }
                    var match$13 = value$1["createdAt"];
                    var field_createdAt = match$13 !== undefined ? toMoment(match$13) : Js_exn.raiseError("graphql_ppx: Field createdAt on type Measurable is missing");
                    var match$14 = value$1["updatedAt"];
                    var field_updatedAt = match$14 !== undefined ? toMoment(match$14) : Js_exn.raiseError("graphql_ppx: Field updatedAt on type Measurable is missing");
                    tmp = /* record */[
                      /* id */field_id,
                      /* name */field_name,
                      /* valueType */field_valueType,
                      /* isLocked */field_isLocked,
                      /* measurementCount */field_measurementCount,
                      /* createdAt */field_createdAt,
                      /* updatedAt */field_updatedAt
                    ];
                  } else {
                    tmp = Js_exn.raiseError("graphql_ppx: Expected object of type Measurable, got " + JSON.stringify(value));
                  }
                  return tmp;
                }
              })) : Js_exn.raiseError("graphql_ppx: Expected array, got " + JSON.stringify(match$1));
    } else {
      tmp = Js_exn.raiseError("graphql_ppx: Field measurables on type Query is missing");
    }
    return {
            measurables: tmp
          };
  } else {
    return Js_exn.raiseError("graphql_ppx: Object is not a value");
  }
}

function make$1() {
  return {
          query: ppx_printed_query$1,
          variables: null,
          parse: parse$1
        };
}

function makeWithVariables$1() {
  return {
          query: ppx_printed_query$1,
          variables: null,
          parse: parse$1
        };
}

function ret_type$1() {
  return /* module */[];
}

var MT_Ret$1 = /* module */[];

var GetMeasurables = /* module */[
  /* ppx_printed_query */ppx_printed_query$1,
  /* query */ppx_printed_query$1,
  /* parse */parse$1,
  /* make */make$1,
  /* makeWithVariables */makeWithVariables$1,
  /* ret_type */ret_type$1,
  /* MT_Ret */MT_Ret$1
];

var GetMeasurablesQuery = ReasonApollo.CreateQuery([
      ppx_printed_query$1,
      parse$1
    ]);

var ppx_printed_query$2 = "query user($auth0Id: String)  {\nuser: user(auth0Id: $auth0Id)  {\nid  \nauth0Id  \nname  \nagent: Agent  {\nid  \n}\n\n}\n\n}\n";

function parse$2(value) {
  var match = Js_json.decodeObject(value);
  if (match !== undefined) {
    var match$1 = Js_primitive.valFromOption(match)["user"];
    var tmp;
    if (match$1 !== undefined) {
      var match$2 = Js_json.decodeNull(match$1);
      if (match$2 !== undefined) {
        tmp = undefined;
      } else {
        var match$3 = Js_json.decodeObject(match$1);
        var tmp$1;
        if (match$3 !== undefined) {
          var value$1 = Js_primitive.valFromOption(match$3);
          var match$4 = value$1["id"];
          var tmp$2;
          if (match$4 !== undefined) {
            var match$5 = Js_json.decodeString(match$4);
            tmp$2 = match$5 !== undefined ? match$5 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(match$4));
          } else {
            tmp$2 = Js_exn.raiseError("graphql_ppx: Field id on type User is missing");
          }
          var match$6 = value$1["auth0Id"];
          var tmp$3;
          if (match$6 !== undefined) {
            var match$7 = Js_json.decodeNull(match$6);
            if (match$7 !== undefined) {
              tmp$3 = undefined;
            } else {
              var match$8 = Js_json.decodeString(match$6);
              tmp$3 = match$8 !== undefined ? match$8 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(match$6));
            }
          } else {
            tmp$3 = undefined;
          }
          var match$9 = value$1["name"];
          var tmp$4;
          if (match$9 !== undefined) {
            var match$10 = Js_json.decodeString(match$9);
            tmp$4 = match$10 !== undefined ? match$10 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(match$9));
          } else {
            tmp$4 = Js_exn.raiseError("graphql_ppx: Field name on type User is missing");
          }
          var match$11 = value$1["agent"];
          var tmp$5;
          if (match$11 !== undefined) {
            var match$12 = Js_json.decodeNull(match$11);
            if (match$12 !== undefined) {
              tmp$5 = undefined;
            } else {
              var match$13 = Js_json.decodeObject(match$11);
              var tmp$6;
              if (match$13 !== undefined) {
                var match$14 = Js_primitive.valFromOption(match$13)["id"];
                var tmp$7;
                if (match$14 !== undefined) {
                  var match$15 = Js_json.decodeString(match$14);
                  tmp$7 = match$15 !== undefined ? match$15 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(match$14));
                } else {
                  tmp$7 = Js_exn.raiseError("graphql_ppx: Field id on type Agent is missing");
                }
                tmp$6 = {
                  id: tmp$7
                };
              } else {
                tmp$6 = Js_exn.raiseError("graphql_ppx: Object is not a value");
              }
              tmp$5 = Js_primitive.some(tmp$6);
            }
          } else {
            tmp$5 = undefined;
          }
          tmp$1 = {
            id: tmp$2,
            auth0Id: tmp$3,
            name: tmp$4,
            agent: tmp$5
          };
        } else {
          tmp$1 = Js_exn.raiseError("graphql_ppx: Object is not a value");
        }
        tmp = Js_primitive.some(tmp$1);
      }
    } else {
      tmp = undefined;
    }
    return {
            user: tmp
          };
  } else {
    return Js_exn.raiseError("graphql_ppx: Object is not a value");
  }
}

function make$2(auth0Id, _) {
  return {
          query: ppx_printed_query$2,
          variables: Js_dict.fromArray(/* array */[/* tuple */[
                  "auth0Id",
                  auth0Id !== undefined ? auth0Id : null
                ]]),
          parse: parse$2
        };
}

function makeWithVariables$2(variables) {
  var auth0Id = variables.auth0Id;
  return {
          query: ppx_printed_query$2,
          variables: Js_dict.fromArray(/* array */[/* tuple */[
                  "auth0Id",
                  auth0Id !== undefined ? auth0Id : null
                ]]),
          parse: parse$2
        };
}

function ret_type$2() {
  return /* module */[];
}

var MT_Ret$2 = /* module */[];

var GetUser = /* module */[
  /* ppx_printed_query */ppx_printed_query$2,
  /* query */ppx_printed_query$2,
  /* parse */parse$2,
  /* make */make$2,
  /* makeWithVariables */makeWithVariables$2,
  /* ret_type */ret_type$2,
  /* MT_Ret */MT_Ret$2
];

var GetUserQuery = ReasonApollo.CreateQuery([
      ppx_printed_query$2,
      parse$2
    ]);

exports.stringOfcompetitorType = stringOfcompetitorType;
exports.GetAgents = GetAgents;
exports.GetAgentsQuery = GetAgentsQuery;
exports.jsonToString = jsonToString;
exports.toMoment = toMoment;
exports.GetMeasurables = GetMeasurables;
exports.GetMeasurablesQuery = GetMeasurablesQuery;
exports.GetUser = GetUser;
exports.GetUserQuery = GetUserQuery;
/* GetAgentsQuery Not a pure module */
