import { GraphQLScalarType } from 'graphql'

export default {
    IPv4: new GraphQLScalarType({
        name: 'IPv4',
        description: 'IPv4 custom scalar type',
        parseValue(value) {

        },
        serialize(value) {

        },
        parseLiteral(value) {

        }
    })
}