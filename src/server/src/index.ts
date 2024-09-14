import { FeedBack } from "@prisma/client";
import { Hono } from "hono";
import { prisma } from "../utils/prisma";
import { cors } from "hono/cors";
import { SaveOmit } from "../../types";

const app = new Hono();

app.use("*", cors());
app.post("/feedback", async (c) => {
  const { title, message } = (await c.req.json()) as SaveOmit<FeedBack, "id">;
  try {
    await prisma.feedBack.create({
      data: {
        title,
        message,
      },
    });
    return c.text("Thank you for your feedback", 200);
  } catch (error) {
    if (error instanceof Error) {
      return c.text(error.message, 500);
    }

    return c.text("Something went wrong", 500);
  }
});

export default app;
