import { hc } from "hono/client";
import { type APIRoutes } from "@server/app";

const client = hc<APIRoutes>("/");

export const api = client.api;
