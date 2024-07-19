const express = require("express");
const app = express();
require("./db/conn");
const router = require("./routes/router");
const noteRoute = require("./routes/noteRoutes")
const cors = require("cors");
const cookiParser = require("cookie-parser")
const noteRoutes = require("./routes/noteRoutes");

const port = 8009;

// app.get("/",(req,res)=>{
//     res.status(201).json("server created")
// });

app.use(express.json());
app.use(cookiParser());
app.use(cors());
app.use(router);
app.use(noteRoute);
app.use(noteRoutes);


app.listen(port,()=>{
    console.log(`server start at port no : ${port}`);
})