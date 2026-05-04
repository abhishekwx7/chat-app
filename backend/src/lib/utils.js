import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const { JWT_SECRET } = process.env;
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not configured");
  }
  const token = jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // in milli-seconds
    httpOnly: true, // protects from XSS
    sameSite: "lax", // CSRF protection in strict and used is lax
    secure: process.env.NODE_ENV === "development" ? false : true,
  });

  return token;
};
