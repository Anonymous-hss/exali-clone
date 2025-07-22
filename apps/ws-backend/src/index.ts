import { WebSocketServer } from "ws";
import jwt, { JwtPayload } from "jsonwebtoken";

const ws = new WebSocketServer({ port: 8080 });
ws.on("connection", function connection(ws, request) {
  const url = request.url;
  if (url) {
    return;
  }

  const queryParam = new URLSearchParams(url?.split("?")[1]);
  const token = queryParam.get("token");
  const decoded = jwt.verify(token, JWT_SECRET);

  if (!decoded || !(decoded as JwtPayload).userId) {
    ws.close();
    return;
  }

  ws.on("message", function message(data) {
    ws.send("pong");
  });
});
