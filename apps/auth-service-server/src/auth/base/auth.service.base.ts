/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Auth as PrismaAuth } from "@prisma/client";

export class AuthServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.AuthCountArgs, "select">): Promise<number> {
    return this.prisma.auth.count(args);
  }

  async auths(args: Prisma.AuthFindManyArgs): Promise<PrismaAuth[]> {
    return this.prisma.auth.findMany(args);
  }
  async auth(args: Prisma.AuthFindUniqueArgs): Promise<PrismaAuth | null> {
    return this.prisma.auth.findUnique(args);
  }
  async createAuth(args: Prisma.AuthCreateArgs): Promise<PrismaAuth> {
    return this.prisma.auth.create(args);
  }
  async updateAuth(args: Prisma.AuthUpdateArgs): Promise<PrismaAuth> {
    return this.prisma.auth.update(args);
  }
  async deleteAuth(args: Prisma.AuthDeleteArgs): Promise<PrismaAuth> {
    return this.prisma.auth.delete(args);
  }
}
