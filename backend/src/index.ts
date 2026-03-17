import express from "express";
import { ENV } from "./config/env";
import { clerkMiddleware } from '@clerk/express';
import cors from "cors";

const app = express();

app.use(cors({ origin: ENV.FRONTEND_URL }));
app.use(clerkMiddleware()); // auth obj will be attached to the req
app.use(express.json()); // parses JSOn request bodies
app.use(express.urlencoded({ extended: true })); // parses from data

app.get("/", (req: express.Request, res: express.Response) => {
    res.json({
       message: "Welcome to the backend!",
    });
})

app.listen(ENV.PORT, () => { console.log(`Server started on port ${ENV.PORT}`); });