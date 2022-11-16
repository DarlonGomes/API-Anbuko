import express, { json, Express } from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";
// import router from "./routers/router";
import {ErrorHandler} from "./middlewares";
import { connectDb, disconnectDB } from "./database/prisma";

dotenv.config();
export const app = express();

app.use(cors());
app.use(json());
// app.use(router);
app.use(ErrorHandler.handleExceptions);

export function init(): Promise<Express> {
    connectDb();
    return Promise.resolve(app);
  }
  
  export async function close(): Promise<void> {
    await disconnectDB();
  }