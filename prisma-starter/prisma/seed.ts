import 'dotenv/config';
import { PrismaClient } from '../generated/prisma/client.ts'


const prisma = new PrismaClient();

async function createUser() {
  const newUser = await prisma.user.createMany({
    data: [
      {
        name: "Kaung",
        email: "kaung@gmail.com"
      },
      {
        name: "Ti Ti",
        email: "eucalyptus@gmail.com"
      }
    ]
  });
  console.log("newUser", newUser);
}

async function main() {
  await createUser();
}

main()
  .catch(async e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
