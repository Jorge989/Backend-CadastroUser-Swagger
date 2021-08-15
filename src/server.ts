const express = require("express");
const cors = require("cors");
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";

import { router } from "./routes";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);
app.listen(3333, () => console.log("🎢 Server is running!"));
