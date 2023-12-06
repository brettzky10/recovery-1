const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Head" },
        { name: "Neck" },
        { name: "Chest" },
        { name: "Back" },
        { name: "Hips" },
        { name: "Core" },
        { name: "Shoulders" },
        { name: "Arms" },
        { name: "Legs" },
      ]
    });

    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();