const express =
require("express");

const cors =
require("cors");

require("dotenv").config();



const authRoutes =
require("./routes/authRoutes");

const passRoutes =
require("./routes/passRoutes");



const app = express();



app.use(cors());

app.use(express.json());



/* IMAGE ACCESS */
app.use(

  "/uploads",

  express.static("uploads")

);



/* ROUTES */
app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/passes",
  passRoutes
);



const PORT =
process.env.PORT || 5000;



app.listen(PORT, () => {

  console.log(

    `Server running on port ${PORT}`

  );

});