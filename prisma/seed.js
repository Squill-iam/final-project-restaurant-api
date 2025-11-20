import prisma from '../src/config/db.js';

async function main() {
  console.log('Seeding database...');

  // Clear existing data
  await prisma.reservation.deleteMany();
  await prisma.menu.deleteMany();
  await prisma.restaurant.deleteMany();
  await prisma.user.deleteMany();
  await prisma.$queryRawUnsafe(`TRUNCATE TABLE "users", "restaurants", "menu_items", "reservations" RESTART IDENTITY CASCADE;`);


  // Users
  const alice = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@example.com',
      password: 'alice123',
      phone: '123-456-7890',
      role: 'USER',
    },
  });

  const bob = await prisma.user.create({
    data: {
      name: 'Bob',
      email: 'bob@example.com',
      password: 'bob123',
      phone: '234-567-8901',
      role: 'USER',
    },
  });

  const john = await prisma.user.create({
    data: {
      name: 'John',
      email: 'john@example.com',
      password: 'john123',
      phone: '345-678-9012',
      role: 'ADMIN',
    },
  });

  // Restaurants with nested Menu items
  const italianPlace = await prisma.restaurant.create({
    data: {
      name: 'Italian Restaurant',
      address: '123 Main St',
      phone: '555-1234',
      openingTime: new Date('2025-01-01T12:00:00Z'),
      closingTime: new Date('2025-01-01T22:00:00Z'),
      menuItems: {
        create: [
          { name: 'Spaghetti', price: 12.99 },
          { name: 'Salad', price: 8.5 },
        ],
      },
    },
  });

  const burgerPlace = await prisma.restaurant.create({
    data: {
      name: 'Burger Restaurant',
      address: '456 Test Dr',
      phone: '555-5678',
      openingTime: new Date('2025-01-01T07:00:00Z'),
      closingTime: new Date('2025-01-01T23:00:00Z'),
      menuItems: {
        create: [
          { name: 'Burger', price: 9.99 },
          { name: 'Fries', price: 3.5 },
        ],
      },
    },
  });

  // Reservations
  await prisma.reservation.create({
    data: {
      userId: alice.id,
      restaurantId: italianPlace.id,
      reservationTime: new Date('2025-11-22T21:00:00Z'),
      partySize: 2,
      status: 'CANCELED',
    },
  });

  await prisma.reservation.create({
    data: {
      userId: bob.id,
      restaurantId: burgerPlace.id,
      reservationTime: new Date('2025-11-21T19:00:00Z'),
      partySize: 4,
      status: 'CONFIRMED',
    },
  });

  console.log('Database successfully seeded!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
