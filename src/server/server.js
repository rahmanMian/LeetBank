const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP;
const fetch = require('node-fetch');

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

const app = express();


const questions = [
    {title: "Two Sum"
    }
]

const QuestionType = new GraphQLObjectType({
    name:"Question",
    description: "This contains details containing title and URL of the question",
    fields: () => ({
        title: {type: GraphQLNonNull(GraphQLString)}
    })
})

const QuestionQueryType = new GraphQLObjectType({
     name: "Query",
     description: "Question Query extracting data",
     fields: () =>({
          questions: {
            type: new GraphQLList(QuestionType),
            description: "List of All Questions",
            resolve: () => questions
          }
        })
     })


const schema = new GraphQLSchema({
    query: QuestionQueryType
})

app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}));

app.listen(5000, () => console.log('Server Running'));
