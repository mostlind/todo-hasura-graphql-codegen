import { buildASTSchema } from "graphql";
import { addMockFunctionsToSchema, IMocks } from "graphql-tools";
import { createClient, dedupExchange, cacheExchange } from "urql";
import { schemaExchange } from "urql-exchange-schema";
import * as schemaAst from "../schema.graphql";

//https://www.apollographql.com/docs/graphql-tools/mocking/
const baseMocks = {
  uuid: () => String(Math.random()),
  timestamptz: () => new Date()
};

export function mockUrqlClient(mocks: IMocks = {}) {
  const schema = buildASTSchema(schemaAst);

  addMockFunctionsToSchema({ schema, mocks: Object.assign(baseMocks, mocks) });

  return createClient({
    url: "nothing",
    exchanges: [dedupExchange, cacheExchange, schemaExchange(schema)]
  });
}