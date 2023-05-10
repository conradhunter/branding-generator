// import { Webhook } from "svix";
// import { buffer } from "micro";
// import type { NextApiRequest, NextApiResponse } from "next";
// import { clerkClient, type User } from "@clerk/nextjs/dist/api";
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
// import { env } from "../../../env/server.mjs";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// //webhook secret from clerk
// const SECRET = env.USER_SECRET;

// interface UserInterface {
//   email_addresses: {
//     email_address: string;
//     id: string;
//   }[];
//   phone_numbers: {
//     phone_number: string;
//     id: string;
//   }[];
//   primary_email_address_id: string;
//   primary_phone_number_id: string;
//   first_name: string;
//   last_name: string;
//   id: string;
//   attributes: User;
// }

// interface UserCreated {
//   type: "user.created";
//   data: UserInterface;
// }

// interface UserUpdated {
//   type: "user.updated";
//   data: UserInterface;
// }

// interface UserDeleted {
//   type: "user.deleted";
//   data: UserInterface;
// }

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method !== "POST") {
//     res.status(405).json({ message: "Not a post" });
//   }

//   const payload = (await buffer(req)).toString();
//   const headers = req.headers;

//   const wh = new Webhook(SECRET);
//   let msg: UserCreated | UserUpdated | UserDeleted;
//   try {
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     msg = wh.verify(payload, headers as any) as any;
//   } catch (err) {
//     res.status(400).json({ message: "Invalid signature" });
//     return;
//   }

//   //User Created Event from clerk
//   if (msg.type === "user.created") {
//     //update clerk public metadata on user
//     await clerkClient.users.updateUser(msgå.data.id, {
//       publicMetadata: {
//         role: "user",
//       },
//     });

//     await prisma.user.create({
//       data: {
//         id: msg.data.id,
//         // other data to add to user
//       },
//     });

//     //User Updated Event from clerk
//   } else if (msg.type === "user.updated") {
//     await prisma.user.update({
//       where: { id: msg.data.id },
//       data: {
//         //update data here on prisma
//       },
//     });

//     //User Deleted Event from clerk
//   } else if (msg.type === "user.deleted") {
//     //delete user from db if clerk user is deleted
//     await prisma.user.delete({
//       where: { id: msg.data.id },
//     });
//   } else {
//     res.status(400).json({ message: "Unknown event type" });
//   }

//   res.status(200).json({ message: "OK" });
// } 