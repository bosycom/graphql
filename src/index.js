import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import {resolvers} from "./resolvers";
import {schema} from "./typeDefs";

const startServer = async () => {
    await mongoose.connect('mongodb://localhost:27017/task-app', {useNewUrlParser: true, useUnifiedTopology: true});

    const app = express();

    app.use('/graphql', graphqlHTTP({
        schema: schema,
        rootValue: resolvers,
        graphiql: true,
        pretty: true
    }));

    app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
};

startServer();