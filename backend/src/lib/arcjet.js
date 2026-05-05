import arcjet, { detectBot, shield, slidingWindow } from "@arcjet/node";
import { isSpoofedBot } from "@arcjet/inspect";
import http from "node:http";
import { ENV } from "./env.js";

const aj = arcjet({
  key: ENV.ARCJET_KEY, // ✅ removed !
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE",
      allow: ["CATEGORY:SEARCH_ENGINE"],
    }),
    slidingWindow({
      mode: "LIVE",
      max: 100,
      interval: 60,
    }),
  ],
});

export default aj;
