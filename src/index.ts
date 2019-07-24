import { nexusPrismaPlugin } from "@generated/nexus-prisma";
import Photon from "@generated/photon";
import { idArg, makeSchema, objectType, stringArg } from "@prisma/nexus";
import { GraphQLServer } from "graphql-yoga";
import { join } from "path";
import { Context } from "./types";

const photon = new Photon();

const nexusPrisma = nexusPrismaPlugin({
  photon: (ctx: Context) => ctx.photon
});

export const Banner = objectType({
  name: "Banner",
  definition(t) {
    t.model.id();
    t.model.imgUrl();
    t.model.url();
  }
});

const Query = objectType({
  name: "Query",
  definition(t) {
    t.crud.findOneBanner({
      alias: "banner"
    });
    t.crud.findManyBanner({
      alias: "banners"
    });
  }
});

const Mutation = objectType({
  name: "Mutation",
  definition(t) {
    t.crud.createOneBanner();
    t.crud.deleteOneBanner();
    t.crud.updateOneBanner();
  }
});

const schema = makeSchema({
  types: [Query, Banner, Mutation, nexusPrisma],
  outputs: {
    typegen: join(__dirname, "../generated/nexus-typegen.ts"),
    schema: join(__dirname, "/schema.graphql")
  },
  typegenAutoConfig: {
    sources: [
      {
        source: "@generated/photon",
        alias: "photon"
      },
      {
        source: join(__dirname, "types.ts"),
        alias: "ctx"
      }
    ],
    contextType: "ctx.Context"
  }
});

const server = new GraphQLServer({
  schema,
  context: { photon }
});

server.start(() => console.log(`🚀 Server ready at http://localhost:4000`));
