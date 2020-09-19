module.exports = {
  client: {
    excludes: ["src/generated/graphql.tsx"],
    service: {
      name: "todo",
      url: "http://localhost:8080/v1/graphql"
    }
  }
};
