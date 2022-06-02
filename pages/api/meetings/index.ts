const { connectToDatabase } = require('../../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;
import { NextApiRequest, NextApiResponse } from "next";

export default function getAllMettings(req: NextApiRequest, res: NextApiResponse) {
  // switch the methods
  switch (req.method) {
    case 'GET': {
        return getMeetings(req, res);
    }

    case 'POST': {
        return addMeeting(req, res);
    }

    case 'PUT': {
        return updateMeeting(req, res);
    }

    case 'DELETE': {
        return deleteMeeting(req, res);
    }
  }
}

// Getting all meetings.
async function getMeetings(req: NextApiRequest, res: NextApiResponse) {
  try {
      let { db } = await connectToDatabase();
      let meetings = await db
          .collection('meetings')
          .find({})
          .sort({ startDatetime: -1 })
          .toArray();
      return res.json({
          data: JSON.parse(JSON.stringify(meetings)),
          message: 'OK',
          success: true,
      });
  } catch (error) {
      return res.json({
          message: new Error(error).message,
          success: false,
      });
  }
}

// Adding a new post
async function addMeeting(req: NextApiRequest, res: NextApiResponse) {
  try {
      let { db } = await connectToDatabase();
      const newItem = JSON.parse(req.body);
      await db.collection('meetings').insertOne({
        ...newItem,
        active: true
      });
      return res.json({
        data: 'Meeting added successfully',
        message: 'OK',
        success: true,
      });
  } catch (error) {
      return res.json({
          message: new Error(error).message,
          success: false,
      });
  }
}

// Updating a post
async function updateMeeting(req: NextApiRequest, res: NextApiResponse) {
  try {
      let { db } = await connectToDatabase();

      await db.collection('meetings').updateOne(
          {
              _id: new ObjectId(req.body),
          },
          { $set: { active: false } }
      );

      return res.json({
          data: 'Meeting updated successfully',
          message: 'OK',
          success: true,
      });
  } catch (error) {
      return res.json({
          message: new Error(error).message,
          success: false,
      });
  }
}

// deleting a post
async function deleteMeeting(req: NextApiRequest, res: NextApiResponse) {
  try {
      let { db } = await connectToDatabase();

      await db.collection('meetings').deleteOne({
          _id: new ObjectId(req.body),
      });

      return res.json({
          data: 'Meeting deleted successfully',
          message: 'OK',
          success: true,
      });
  } catch (error) {
      return res.json({
          message: new Error(error).message,
          success: false,
          body: req.body,
      });
  }
}
