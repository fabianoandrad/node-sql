import fastify from "fastify";
import { appRoutes } from "./http/routes/app-routes.js";

export const app = fastify();

app.register(appRoutes);