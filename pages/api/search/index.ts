const { connectToDatabase } = require('../../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;
import { NextApiRequest, NextApiResponse } from "next";

export default function getAllMettings(req: NextApiRequest, res: NextApiResponse) {
  // switch the methods
  switch (req.method) {
    case 'GET': {
        return get(req, res);
    }
    case 'POST':
    case 'PUT':
    case 'DELETE': {
      return res.json({
        message: new Error("Unable method").message,
        success: false,
      });
    }
  }
}

// Getting all meetings.
async function get(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = {
      users: [
          // {
          //     id: 1,
          //     name: 'Marcel Jones ',
          //     email: "atuny0@sohu.com",
          //     phone: "+63 791 675 8914",
          //     show: false,
          //     image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500",
          // },
          // {
          //     id: 2,
          //     name: 'Sheldon Quigley ',
          //     "email": "hbingley1@plala.or.jp",
          //     "phone": "+7 813 117 7139",
          //     show: false,
          //     image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500",
          // },
          // {
          //     id: 3,
          //     name: 'Leonard Leach ',
          //     "email": "rshawe2@51.la",
          //     "phone": "+63 739 292 7942",
          //     show: true,
          //     image: "https://images.unsplash.com/photo-1584999734482-0361aecad844?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500",
          // },
      ],
      blog: [
        {
          id: 1,
          title: 'Te amo',
          description: 'Un montonal',
          image: "https://images.unsplash.com/photo-1584999734482-0361aecad844?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500",
        }
      ]
    };
    return res.json({
      data: JSON.parse(JSON.stringify(data)),
      message: 'OK',
      success: true,
    });
      // let { db } = await connectToDatabase();
      // let meetings = await db
      //     .collection('meetings')
      //     .find({})
      //     .sort({ startDatetime: 1 })
      //     .toArray();
      // return res.json({
      //     data: JSON.parse(JSON.stringify(meetings)),
      //     message: 'OK',
      //     success: true,
      // });
  } catch (error) {
      return res.json({
          message: new Error(error).message,
          success: false,
      });
  }
}