import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'
import { readFileSync } from 'fs';
import { resolve } from 'path';

import * as resolvers from './schema/resolvers/index.js';
import createContext from './schema/context/index.js';

const schemaFile = readFileSync(resolve('schema.graphql'), 'utf-8');
const apolloServer = new ApolloServer({
  typeDefs: schemaFile,
  resolvers,
});

async function startApp() {
  const { url } = await startStandaloneServer(apolloServer, {
    context: createContext,
  });

  console.log(`Sever Started: ${url}`);
}

startApp();
