const express =
require("express");

const router =
express.Router();

const pool =
require("../config/db");

const jwt =
require("jsonwebtoken");



/* AUTH */
const authMiddleware =
(req, res, next) => {

  try {

    const token =
      req.headers.authorization?.split(
        " "
      )[1];



    if (!token) {

      return res
        .status(401)
        .json({

          message:
            "No Token",

        });

    }



    const decoded =
      jwt.verify(

        token,

        process.env.JWT_SECRET

      );



    req.user =
      decoded;



    next();

  } catch (error) {

    return res
      .status(401)
      .json({

        message:
          "Invalid Token",

      });

  }

};



/* ADMIN CHECK */
const adminMiddleware =
(req, res, next) => {

  if (

    req.user.role !==
    "admin"

  ) {

    return res
      .status(403)
      .json({

        message:
          "Admin Only",

      });

  }



  next();

};



/* GET ALL PASSES */
router.get(

  "/passes",

  authMiddleware,

  adminMiddleware,

  async (req, res) => {

    try {

      const result =
        await pool.query(

          `
          SELECT

          passes.*,

          users.name

          FROM passes

          JOIN users

          ON passes.user_id = users.id

          ORDER BY passes.id DESC
          `
        );



      res.json(
        result.rows
      );

    } catch (error) {

      console.log(error);



      res.status(500).json({

        message:
          "Server Error",

      });

    }

  }

);



/* UPDATE PASS STATUS */
router.put(

  "/passes/:id",

  authMiddleware,

  adminMiddleware,

  async (req, res) => {

    try {

      const { status } =
        req.body;

      const { id } =
        req.params;



      await pool.query(

        `
        UPDATE passes

        SET status=$1

        WHERE id=$2
        `,

        [status, id]

      );



      res.json({

        message:
          "Status Updated",

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