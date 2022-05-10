const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });


    const woopa1New = await prisma.explorer_new.upsert({
        where: { name: 'Woopa 3' },
        update: {},
        create: {
            name: 'Woopa 3',
                    lang: 'ES',
                    missionCommander: 'Carlo',
                    enrollments: 1,
        },
    });
    const woopa2New = await prisma.explorer_new.upsert({
        where: { name: 'Woopa 2' },
        update: {},
        create: {
            name: 'Woopa 2',
                    lang: 'ES',
                    missionCommander: 'Carlo',
                    enrollments: 1,
        },
    });
    const woopa3New = await prisma.explorer_new.upsert({
        where: { name: 'Woopa 1' },
        update: {},
        create: {
            name: 'Woopa 1',
                    lang: 'ES',
                    missionCommander: 'Carlo',
                    enrollments: 1,
        },
    });


    //missioncommander
    const mc1 = await prisma.missionCommander.upsert({
        where: { name: 'Carlo' },
        update: {},
        create: {
            name: 'Carlo',
                    username: 'carlogilmar',
                    mainStack: 'nodejs',
        },
    });


    const mc2 = await prisma.missionCommander.upsert({
        where: { name: 'Rodrigo' },
        update: {},
        create: {
            name: 'Rodrigo',
                    username: 'Romarpla',
                    mainStack: 'react',        
        },
    });


    const mc3 = await prisma.missionCommander.upsert({
        where: { name: 'Fernanda' },
        update: {},
        create: {
            name: 'Fernanda',
                    username: 'FernandaOchoa',
                    mainStack: 'vue', 
        },
    });

    console.log('Create 3 explorers');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();