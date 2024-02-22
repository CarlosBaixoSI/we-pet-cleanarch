import { IRolesRepository } from "@application/common/interfaces";

import { Role } from "@domain/entities";

import { Dependencies } from "@infrastructure/di";

import { Role as RoleModel } from "@prisma/client";

export function makeRolesRepository({ db }: Pick<Dependencies, 'db'>): IRolesRepository {
  return {
    async getAll() {
      const roles = await db.role.findMany();
      return roles.map(toEntity);
    },
  };

  function toEntity(role: RoleModel) {
    return new Role({
      id: role.id,
      name: role.name,
      description: role.description,
      updatedAt: role.updatedAt,
      createdAt: role.createdAt
    });
  }
}