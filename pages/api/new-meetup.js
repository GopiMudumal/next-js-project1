// api/new-meetup
// POST  api/new-meetup

import { MongoClient } from "mongodb";

async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const data = req.body;
      const client = await MongoClient.connect(process.env.REACT_APP_DATABASE);
      const db = client.db();

      const meetupCollections = db.collection("meetups");

      const result = await meetupCollections.insertOne({ data });

      client.close();

      res.status(201).json({ message: "Meetup inserted!" });
    }
  } catch (err) {
    console.log(err);
  }
}

export default handler;
