const express = require("express");

const router = express.Router();

const axios = require("axios");



router.post("/run", async (req, res) => {

    try {

        const { language, versionIndex, code } = req.body;



        const response = await axios.post(

            "https://api.jdoodle.com/v1/execute",

            {

                clientId: "a9417939ffae2a69eed92c634c8d36de",

                clientSecret: "ad533bd44b188d4242168950cfb7951715f2433635fc974ee0ca35ff5382a37c",

                script: code,

                language: language,

                versionIndex: versionIndex,

            }

        );



        res.json(response.data);

    }

    catch (error) {

        console.log(error);



        res.status(500).json({

            message: "Code execution failed",

        });

    }

});



module.exports = router;