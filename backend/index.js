require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const express = require("express");
const { UserRouter, NoteRouter, LeadRouter, EventRouter } = require("./router");
const app = express();

app.use(express.static("uploads"));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    console.log("file ", file);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + "." + file?.mimetype?.split("/")[1]
    );
  },
});
const upload = multer({ storage: storage });

app.use(cors("*"));
app.use(express.json());

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("MongoDb connected successfully on port 27017");
  })
  .catch((error) => {
    console.log(error);
  });

app.use((req, res, next) => {
  console.log(
    `${new Date()} :: ${req.method} :: ${req.path} :: ${JSON.stringify(
      req.query
    )} :: ${JSON.stringify(req.params)} :: ${JSON.stringify(req.body)}`
  );
  next();
});

app.get("/", (req, res, next) => {
  res.send("Server is Up and Running!");
});

app.post("/upload", upload.single("file"), (req, res, nex) => {
  res.json({ url: `http://localhost:3000/${req?.file?.filename}` });
});

app.use("/user", UserRouter);
app.use("/note", NoteRouter);
app.use("/lead", LeadRouter);
app.use("/event", EventRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server started at port ${process.env.PORT}`);
});
