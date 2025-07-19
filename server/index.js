import Fastify from "fastify";
import websocket from "@fastify/websocket";
import { MongoClient } from "mongodb";
import { OpenAI } from "openai";

const fastify = Fastify();
fastify.register(websocket);

const client = new MongoClient(process.env.MONGO_URI);
await client.connect();
const db = client.db("test-task");

fastify.post("/register", async (req, reply) => {
  const { email } = req.body;
  if (!email) return reply.status(400).send({ error: "Email required" });
  await db.collection("users").insertOne({ email });
  return { succes: true };
});

fastify.listen({ port: 5000 }, (err) => {
  if (err) console.error(err);
  console.log("Server running on http://localhost:5000");
});
