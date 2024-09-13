import { FeedBack } from "@prisma/client";
import { Hono } from "hono";
import { prisma } from "../utils/prisma";

const app = new Hono();

type SaveOmit<T, K extends keyof T> = Omit<T, K>;

app.post("/feedback", async (c) => {
  const { title, message } = (await c.req.json()) as SaveOmit<FeedBack, "id">;
  try {
    await prisma.feedBack.create({
      data: {
        title,
        message,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return c.text(error.message, 500);
    }

    return c.text("Something went wrong", 500);
  }
});

export default app;
