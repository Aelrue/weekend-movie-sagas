const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/:id", (req, res) => {
  const query = `SELECT
  "genres".name FROM
"movies"
  JOIN "movies_genres"
  ON  "movies".id = "movies_genres"."movie_id"
  JOIN "genres"
  ON "genres".id = "movies_genres"."genre_id"
  WHERE "movies".id = ${req.params.id}
  ORDER BY "movies_genres".id ASC;`;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("Error completing SELECT detail query", err);
      res.sendStatus(500);
    });
});

module.exports = router;
