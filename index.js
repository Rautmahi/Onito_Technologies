const express = require("express");

const {userRouter}=require("./routes/User.route")


const app = express();


app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Home ");
})

app.use("/users",userRouter)

app.listen(8080,async() => {
  try {
    await connection
    console.log("Connected to DB");
  } catch (e) {
    console.log("error to connecting DB", e);
  }
  console.log(`Running at Port 8080`);
});
