const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
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
      ],
    });

    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await db.$disconnect();
  }
}

main();


/* { name: 'Medicine' },  //Most used one should slide to left
        { name: 'Rehabilitation' },
        { name: 'Muscle Growth' },
        { name: 'Posture' },
        { name: 'Brain' },
        { name: 'Physics' },
        { name: 'Nervous System' },
        { name: 'Proprioception' },
        { name: 'Mental Health' },
        { name: 'Dietary' },
        { name: 'Nutrition' },
        { name: 'Disease' }, */