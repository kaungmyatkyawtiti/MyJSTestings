const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

prisma.user
  .create({
    data: {
      name: "Bob",
      bio: "profile bio",
      posts: {
        create: [
          { context: "First Post" },
          { context: "Second Post" },
        ]
      }
    }
  })
  .then(() => {
    console.log("Inserted User Bob with Posts");
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  })
