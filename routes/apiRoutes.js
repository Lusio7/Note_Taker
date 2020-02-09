// 
// 
// import database connection from db folder
const db = require("../db/connection.js");

// export function that creates routes (will be imported/executed in server.js)
module.exports = function(app) {

  // GET route that finds all tables with allNotes = false and sends back as JSON
  app.get("/api/notes", function(req, res) {

    db.query("SELECT * FROM notes", (err, tableData) => {

      if (err) {
        console.log(err);
        return res.status(500).end();
      }
      // send array of notes back
      res.json(tableData);
    });

  });