import express from 'express';
// import cors from 'cors';
// import http from 'http';
// import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServer } from '@apollo/server';

const PORT = 8080;
// const app = express();

// app.get('/todos', (req, res) => {
//   res.json([
//     { id: 't1', name: 'react', text: 'Check ReacJS' },
//     { id: 't1', name: 'node', text: 'Run NodeJS Server' },
//   ]);
// });


export default async function appStart() {
  const apolloServer = new ApolloServer({
    typeDefs: {},
    resolvers: {},
  });

  await apolloServer.start();

  app.use('/graphql', cors(), express.json(), expressMiddleware(apolloServer));
  
  app.listen(PORT);
}

appStart();

console.log(`App started listening ${PORT}`);
