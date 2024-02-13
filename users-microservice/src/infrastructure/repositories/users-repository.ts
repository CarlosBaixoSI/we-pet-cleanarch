import { IUsersRepository } from '@application/common/interfaces';
import { User } from '@domain/entities';
import { Dependencies } from '@infrastructure/di';
import { User as UserModel } from '@prisma/client';
export function makeUsersRepository({ db }: Pick<Dependencies, 'db'>): IUsersRepository {
  return {
    async create({ user }) {
      const { id } = await db.user.create({
        data: {
          email: user.email,
          name: user.name,
          birthDate: user.birthDate,
          phoneNumber: user.phoneNumber,
          city: user.city,
        },
      });

      return { id };
    },

    async getById({ id }) {
      const user = await db.user.findFirst({ where: { id } });
      if (!user) return null;
      return toEntity(user);
    },

    async getByEmail({ email }) {
      const user = await db.user.findFirst({ where: { email } });
      if (!user) return null;
      return toEntity(user);
    },

    async delete({ id }) {
      await db.user.delete({ where: { id } });
    },

    async update({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: {
          email: user.email,
          name: user.name,
          birthDate: user.birthDate,
          phoneNumber: user.phoneNumber,
          city: user.city,
          updatedAt: new Date()
        },
      });
    },

    async getAll() {
        const users = await db.user.findMany();
        return users.map(toEntity);
    },
  };

  function toEntity(user: UserModel) {
    return new User({
      email: user.email,
      name: user.name ?? '',
      birthDate: user.birthDate,
      phoneNumber: user.phoneNumber,
      city: user.city,
      id: user.id,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
  }
}
