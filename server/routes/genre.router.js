const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/:id", (req, res) => {
  console.log("req.params.id:", req.params.id);
  let query = `SELECT “genres”.“name” FROM “movies”
  JOIN “movies_genres” ON “movies_genres”.“movie_id” = “movies”.“id”
  JOIN “genres” ON “genres”.“id” = “movies_genres”.“genre_id”
  WHERE “movies”.“id” = ${req.params.id};`;
  pool
    .query(query)
    .then((result) => {
      console.log(result);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get all genres", err);
      res.sendStatus(500);
    });
});

module.exports = router;

// router.get("/:id", (req, res) => {
// const query = `SELECT
//   "genres".name,
//   "movies_genres".id, "movies".title,
//   "movies".description, "movies".poster FROM
// "movies"
//   JOIN "movies_genres"
//   ON  "movies".id = "movies_genres"."movie_id"
//   JOIN "genres"
//   ON "genres".id = "movies_genres"."genre_id"
//   WHERE "movies".id = $1
//   ORDER BY "movies_genres".id ASC;`;
//   pool
//     .query(queryText, [req.params.id])
//     .then((result) => {
//       res.send(result.rows);
//     })
//     .catch((err) => {
//       console.log("Error completing SELECT detail query", err);
//       res.sendStatus(500);
//     });
// });
