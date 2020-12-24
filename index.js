import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import hbs from "hbs";
import cors from "cors";
import Router from "./routers/routers.js";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(cors());
app.use("/assets", express.static(__dirname + "/public"));
app.use(Router);

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
