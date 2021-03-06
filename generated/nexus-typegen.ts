/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */

import * as ctx from "../src/types"
import * as photon from "@generated/photon"
import { core } from "nexus"

declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  BannerCreateInput: { // input type
    id?: string | null; // ID
    imgUrl: string; // String!
    url: string; // String!
  }
  BannerUpdateInput: { // input type
    imgUrl?: string | null; // String
    url?: string | null; // String
  }
  BannerWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
  QueryFindManyBannerOrderByInput: { // input type
    id?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
    imgUrl?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
    url?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
  }
  QueryFindManyBannerWhereInput: { // input type
    AND?: NexusGenInputs['QueryFindManyBannerWhereInput'][] | null; // [QueryFindManyBannerWhereInput!]
    id?: NexusGenInputs['StringFilter'] | null; // StringFilter
    imgUrl?: NexusGenInputs['StringFilter'] | null; // StringFilter
    NOT?: NexusGenInputs['QueryFindManyBannerWhereInput'][] | null; // [QueryFindManyBannerWhereInput!]
    OR?: NexusGenInputs['QueryFindManyBannerWhereInput'][] | null; // [QueryFindManyBannerWhereInput!]
    url?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  StringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: string | null; // String
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
}

export interface NexusGenEnums {
  OrderByArg: photon.OrderByArg
}

export interface NexusGenRootTypes {
  Banner: photon.Banner;
  Mutation: {};
  Query: {};
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  BannerCreateInput: NexusGenInputs['BannerCreateInput'];
  BannerUpdateInput: NexusGenInputs['BannerUpdateInput'];
  BannerWhereUniqueInput: NexusGenInputs['BannerWhereUniqueInput'];
  QueryFindManyBannerOrderByInput: NexusGenInputs['QueryFindManyBannerOrderByInput'];
  QueryFindManyBannerWhereInput: NexusGenInputs['QueryFindManyBannerWhereInput'];
  StringFilter: NexusGenInputs['StringFilter'];
  OrderByArg: NexusGenEnums['OrderByArg'];
}

export interface NexusGenFieldTypes {
  Banner: { // field return type
    id: string; // ID!
    imgUrl: string; // String!
    url: string; // String!
  }
  Mutation: { // field return type
    createOneBanner: NexusGenRootTypes['Banner']; // Banner!
    deleteOneBanner: NexusGenRootTypes['Banner'] | null; // Banner
    updateOneBanner: NexusGenRootTypes['Banner'] | null; // Banner
  }
  Query: { // field return type
    banner: NexusGenRootTypes['Banner'] | null; // Banner
    banners: NexusGenRootTypes['Banner'][] | null; // [Banner!]
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createOneBanner: { // args
      data: NexusGenInputs['BannerCreateInput']; // BannerCreateInput!
    }
    deleteOneBanner: { // args
      where: NexusGenInputs['BannerWhereUniqueInput']; // BannerWhereUniqueInput!
    }
    updateOneBanner: { // args
      data: NexusGenInputs['BannerUpdateInput']; // BannerUpdateInput!
      where: NexusGenInputs['BannerWhereUniqueInput']; // BannerWhereUniqueInput!
    }
  }
  Query: {
    banner: { // args
      where: NexusGenInputs['BannerWhereUniqueInput']; // BannerWhereUniqueInput!
    }
    banners: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['QueryFindManyBannerOrderByInput'] | null; // QueryFindManyBannerOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['QueryFindManyBannerWhereInput'] | null; // QueryFindManyBannerWhereInput
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Banner" | "Mutation" | "Query";

export type NexusGenInputNames = "BannerCreateInput" | "BannerUpdateInput" | "BannerWhereUniqueInput" | "QueryFindManyBannerOrderByInput" | "QueryFindManyBannerWhereInput" | "StringFilter";

export type NexusGenEnumNames = "OrderByArg";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: ctx.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}