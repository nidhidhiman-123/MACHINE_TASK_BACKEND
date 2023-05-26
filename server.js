const express = require("express");
const mongoose = require("mongoose");
const { DATABASE_URI } = require('./config');
const router = require('./routes');
const cors = require("cors");
const app = express();
const port = 8000


app.use(cors())
app.use(express.json());
app.use('/', router);
app.use(express.urlencoded({ extended: true }))
mongoose.connect(DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
}).then(() => app.listen(port, () => console.log('listen on port 8000.'))).catch((error) => console.log("error occured", error))

