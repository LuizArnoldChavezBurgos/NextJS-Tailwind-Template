import prisma from "@/../prisma/client";

export async function GET(request: Request) {
  try {
    await prisma.user.create({
      data: {
        email: "elso@prisma.io",
        name: "Elso Prisma",
      },
    });
  } catch (error) {
    return new Response("email already exists");
  }

  return new Response(`Hello, Next.js!`);
}
