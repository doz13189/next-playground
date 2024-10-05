import jwt from "jsonwebtoken";
import type { NextRequest } from "next/server";

export const authenticate = (req: NextRequest) => {
  const SECRET_KEY = process.env.JWT_SECRET_KEY;
  if (!SECRET_KEY) {
    throw new Error("No secret key");
  }

  const authHeader = req.headers.get("authorization");
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    throw new Error("No token provided");
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY) as jwt.JwtPayload;
    return decoded;

    return;
  } catch (error) {
    throw new Error("Invalid token");
  }
};
