const mongoose = require("mongoose");

const DB = process.env.DATABASE || "mongodb+srv://shaikinthiyaz904:21am5A0501@cluster0.tkcqp6v.mongodb.net/Notes?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => console.log("DataBase Connected")).catch((err) => {
  console.log(err);
});
