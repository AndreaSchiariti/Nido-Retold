import { Request, Response } from "express";
import { db } from "../db.js";

export async function getTest(req: Request, res: Response) {
  try {
    const users = await db.manyOrNone(
      `SELECT *
      FROM users`
    );

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Test Failed" });
  }
}
