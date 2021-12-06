
import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import connectBD from './db/db.js';
import { types } from './gql/types.js';
import { resolvers } from './gql/resolvers.js';

dotenv.config();

const server = new ApolloServer({
  typeDefs: types,
  resolvers: resolvers,
});

const app = express();

app.use(express.json());

app.use(cors());
const port = process.env.PORT || 5500

app.listen({ port }, async () => {
  await connectBD();
  await server.start();

  server.applyMiddleware({ app });
  const dataBase = process.env.DBNAME;
  console.log('Server connected to data base: ' + dataBase);
});