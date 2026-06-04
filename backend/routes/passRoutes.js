const express =
require("express");

const router =
express.Router();

const pool =
require("../config/db");

const multer =
require("multer");

const nodemailer =
require("nodemailer");



/* EMAIL TRANSPORT */
const transporter =
nodemailer.createTransport({

  service: "gmail",

  auth: {

    user:
      process.env.EMAIL_USER,

    pass:
      process.env.EMAIL_PASS,

  },

});



/* IMAGE STORAGE */
const storage =
multer.diskStorage({

  destination:
    function (

      req,

      file,

      cb

    ) {

      cb(
        null,
        "uploads/"
      );

    },



  filename:
    function (

      req,

      file,

      cb

    ) {

      cb(

        null,

        Date.now() +

          "-" +

          file.originalname

      );

    },

});



const upload =
multer({

  storage,
});



/* APPLY PASS */
router.post(

  "/apply",

  upload.single("photo"),

  async (req, res) => {

    try {

      const {

        name,

        email,

        route,

        duration,

      } = req.body;



      const photo =
        req.file
          ? req.file.filename
          : null;



      /* SAVE TO DATABASE */
      const result =
        await pool.query(

          `
          INSERT INTO passes
          (
            name,
            email,
            route,
            duration,
            status,
            photo
          )

          VALUES
          (
            $1,
            $2,
            $3,
            $4,
            $5,
            $6
          )

          RETURNING *
          `,

          [

            name,

            email,

            route,

            duration,

            "Pending",

            photo,

          ]

        );



      /* SEND EMAIL */

      try {

        await transporter.sendMail({

          from:
            process.env.EMAIL_USER,

          to: email,

          subject:
            "SmartPassCloud Pass Application",

          html: `

            <h2>
              SmartPassCloud
            </h2>

            <p>
              Hello ${name},
            </p>

            <p>
              Your bus pass application
              was submitted successfully.
            </p>

            <p>
              Route:
              ${route}
            </p>

            <p>
              Duration:
              ${duration}
            </p>

            <p>
              Status:
              Pending
            </p>

          `,

        });



        console.log(
          "EMAIL SENT SUCCESSFULLY"
        );

      } catch (mailError) {

        console.log(
          "EMAIL ERROR:"
        );

        console.log(
          mailError
        );

      }



      res.json(
        result.rows[0]
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



/* GET ALL PASSES */
router.get(

  "/all",

  async (req, res) => {

    try {

      const result =
        await pool.query(

          `
          SELECT *

          FROM passes

          ORDER BY id DESC
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



/* APPROVE PASS */
router.put(

  "/approve/:id",

  async (req, res) => {

    try {

      await pool.query(

        `
        UPDATE passes

        SET status =
        'Approved'

        WHERE id = $1
        `,

        [req.params.id]

      );



      res.json({

        message:
          "Pass Approved",

      });

    } catch (error) {

      console.log(error);

    }

  }

);



/* REJECT PASS */
router.put(

  "/reject/:id",

  async (req, res) => {

    try {

      await pool.query(

        `
        UPDATE passes

        SET status =
        'Rejected'

        WHERE id = $1
        `,

        [req.params.id]

      );



      res.json({

        message:
          "Pass Rejected",

      });

    } catch (error) {

      console.log(error);

    }

  }

);

module.exports =
router;