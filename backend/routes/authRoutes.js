const express =
require("express");

const router =
express.Router();

const bcrypt =
require("bcryptjs");

const jwt =
require("jsonwebtoken");

const pool =
require("../config/db");



/* REGISTER */
router.post(

  "/register",

  async (req, res) => {

    try {

      const {
        name,
        email,
        password,
      } = req.body;



      /* CHECK USER */
      const userCheck =
        await pool.query(

          `
          SELECT *

          FROM users

          WHERE email=$1
          `,

          [email]

        );



      if (

        userCheck.rows.length > 0

      ) {

        return res
          .status(400)
          .json({

            message:
              "User already exists",

          });

      }



      /* HASH PASSWORD */
      const hashedPassword =
        await bcrypt.hash(

          password,

          10

        );



      /* INSERT USER */
      const result =
        await pool.query(

          `
          INSERT INTO users
          (name, email, password, role)

          VALUES ($1, $2, $3, $4)

          RETURNING *
          `,

          [

            name,

            email,

            hashedPassword,

            "user",

          ]

        );



      res.json({

        message:
          "Registration Successful",

        user:
          result.rows[0],

      });

    } catch (error) {

      console.log(error);



      res.status(500).json({

        message:
          "Server Error",

      });

    }

  }

);



/* LOGIN */
router.post(

  "/login",

  async (req, res) => {

    try {

      const {
        email,
        password,
      } = req.body;



      /* FIND USER */
      const result =
        await pool.query(

          `
          SELECT *

          FROM users

          WHERE email=$1
          `,

          [email]

        );



      if (

        result.rows.length === 0

      ) {

        return res
          .status(400)
          .json({

            message:
              "Invalid Email",

          });

      }



      const user =
        result.rows[0];



      /* CHECK PASSWORD */
      const validPassword =
        await bcrypt.compare(

          password,

          user.password

        );



      if (!validPassword) {

        return res
          .status(400)
          .json({

            message:
              "Invalid Password",

          });

      }



      /* TOKEN */
      const token =
        jwt.sign(

          {

            id: user.id,

            role:
              user.role,

          },

          process.env.JWT_SECRET,

          {

            expiresIn:
              "7d",

          }

        );



      res.json({

        token,

        user: {

          id: user.id,

          name:
            user.name,

          email:
            user.email,

          role:
            user.role,

        },

      });

    } catch (error) {

      console.log(error);



      res.status(500).json({

        message:
          "Server Error",

      });

    }

  }

);

module.exports =
router;