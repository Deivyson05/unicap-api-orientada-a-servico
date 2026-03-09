import express from "express";
import cors from "cors";
import "dotenv/config";

import router from "./routes/routes.ts";

const app: express.Application = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.use(express.static("src/public"));

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});