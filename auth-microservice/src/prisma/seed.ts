import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

async function main(){
    await prisma.role.createMany({
        data: [
            {name: 'user', description: 'Utilizador', updatedAt: new Date(), createdAt: new Date()},
            {name: 'admin', description: 'Administrador', updatedAt: new Date(), createdAt: new Date()},
            {name: 'guest', description: 'Convidado', updatedAt: new Date(), createdAt: new Date()},
        ]
    });
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })