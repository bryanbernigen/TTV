const express = require("express");
const mongoose = require("mongoose");
const swaggerUi = require("swagger-ui-express");
require("dotenv").config();

//Own modules
const Routes = require("./Routes/routes");
const swaggerDocument = require("./swagger.json");

//Setup express
const app = express();
app.use(express.json());


//Connect to DB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        const port = process.env.PORT || 5000;
        app.listen(port, () =>
            console.log(`Server running on http://localhost:${port}`)
        );
    })
    .catch((err) => console.log(err));

//Routes
app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello World" });
});
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api", Routes);