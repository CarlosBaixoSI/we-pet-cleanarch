import { IUsersInfoRepository } from '@application/common/interfaces';
import { UserInfo } from '@domain/entities/userInfo';
import { Dependencies } from '@infrastructure/di';
import { UserInfo as UserInfoModel } from '@prisma/client';
export function makeUsersInfoRepository({ db }: Pick<Dependencies, 'db'>): IUsersInfoRepository {
  return {
    async create({ userInfo }) {
      const { id } = await db.userInfo.create({
        data: {
          email: userInfo.email,
          password: userInfo.password,
          username: userInfo.username,
          createdAt: new Date(),
          updatedAt: new Date(),
          resetPasswordExpires: null,
          resetPasswordToken: null,
          roles: {
            connectOrCreate: userInfo.roles?.map((role) => {
                return {
                    where: { name: role.name },
                    create: { name: role.name, description: role.description, createdAt: new Date(), updatedAt: new Date()},
                };
            }),
        },
        },
      });

      return { id };
    },

    async getById({ id }) {
      const userInfo = await db.userInfo.findFirst({ where: { id } });
      if (!userInfo) return null;
      return toEntity(userInfo);
    },

    async delete({ id }) {
      await db.userInfo.delete({ where: { id } });
    },

    async update({ userInfo }) {
      await db.userInfo.update({
        where: { id: userInfo.id },
        data: {
          email: userInfo.email,
          password: userInfo.password,
          username: userInfo.username,
          updatedAt: new Date(),
          resetPasswordExpires: userInfo.resetPasswordExpires,
          resetPasswordToken: userInfo.resetPasswordToken
        },
      });
    },

    async getByEmail({email}){
      const userInfo = await db.userInfo.findFirst({ where: { email }, include: {roles: true} });
      if (!userInfo) return null;
      return toEntity(userInfo);
    }
  };

  function toEntity(user: any, roles: any[] = []) {
    return new UserInfo({
      email: user.email,
      username: user.username,
      password: user.password,
      id: user.id,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      roles: user.roles.map((role: any) => ({name: role.name, description: role.description, id: role.id, createdAt: role.createdAt, updatedAt: role.updatedAt}))
    });
  }
}
