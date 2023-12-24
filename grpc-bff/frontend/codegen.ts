
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "../bff-nestjs/src/schema.gql",
  documents: "pages/**/*.tsx",
  generates: {
    "generate/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
