import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export function middleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers("authorization") ?? "";
  const decoded = jwt.verify(token, JWT_SECRET);

  if (decoded) {
    req.userId = decoded.userId;
  } else {
    res.send(403).json({
      message: "Unauthorized",
    });
  }
}
