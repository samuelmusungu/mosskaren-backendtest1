import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// GET all menu items
app.get("/menu", async (req, res) => {
  try {
    const items = await prisma.menuItem.findMany();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch menu items" });
  }
});

// POST a new menu item
app.post("/menu", async (req, res) => {
  const { name, description, price, imageUrl, category } = req.body;
  try {
    const newItem = await prisma.menuItem.create({
      data: { name, description, price, imageUrl, category },
    });
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: "Failed to create menu item" });
  }
});
// GET all events
app.get("/events", async (req, res) => {
  try {
    const events = await prisma.event.findMany();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch events" });
  }
});

// POST a new event
app.post("/events", async (req, res) => {
  const { title, description, date, imageUrl } = req.body;
  try {
    const newEvent = await prisma.event.create({
      data: {
        title,
        description,
        date: new Date(date),
        imageUrl,
      },
    });
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ error: "Failed to create event" });
  }
});
// GET all contact messages
app.get("/contact", async (req, res) => {
  try {
    const messages = await prisma.contactMessage.findMany();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch contact messages" });
  }
});

// POST a new contact message
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newMessage = await prisma.contactMessage.create({
      data: { name, email, message },
    });
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: "Failed to send message" });
  }
});

app.listen(4000, () => {
  console.log("✅ Moss Karen backend running on http://localhost:4000");
});