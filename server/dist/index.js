'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _auth0Js = require('auth0-js');

var auth0 = _interopRequireWildcard(_auth0Js);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _schema = require('./schema');

var _graphqlTools = require('graphql-tools');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const models = require("./models");
const Sequelize = require('sequelize');

const jwt = require('express-jwt');
var jwks = require('jwks-rsa');
const { ApolloServer, gql } = require('apollo-server-express');

const PORT = process.env.PORT || 4000;

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!'
  }
};

const server = new ApolloServer({
  schema: _schema.schema,
  formatError: error => {
    return error;
  },
  formatResponse: response => {
    return response;
  },
  context: ({ req }) => {
    return { userAuth0Id: req.user && req.user.sub };
  }
});

function getToken(req) {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
  } else if (req.query && req.query.token) {
    return req.query.token;
  }
  return null;
}
const app = (0, _express2.default)();
var cors = require("cors");
app.use(cors());
app.use(jwt({ secret: "bhz9XiFVqoowf_cSicdItfmExxWrAoeyhKEjGNQKjpX08E0NKuLNQ3uF5XL-wdy_", credentialsRequired: false, getToken }));
server.applyMiddleware({ app });

app.listen({ port: PORT }, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
});
//# sourceMappingURL=index.js.map