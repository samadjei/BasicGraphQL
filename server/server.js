const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const cors = require('cors')

const app = express();

app.use(cors())


// Construct a schema, using GraphQL schema language
let schema = buildSchema(`
  type Song {
    id: ID,
    title: String,
    artist: String
  }

  type Query {
    songs: [Song]
  }
`);

const root = {
  songs: [
    {
      id: 1,
      title: "Tranquility",
      artist: "M Huncho"
    },
    {
      id: 2,
      title: "Caution",
      artist: "Headie One"
    }
  ]
}

const API_URL = 'http://localhost:8080/graphql';

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(8080, ()=> console.log(`🚀 Server is running at ${API_URL}`));


