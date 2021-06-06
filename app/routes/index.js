var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test"
});

var testCoord1 = 50.917380;
var testCoord2 =  7.070533;

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/test', function(req, res, next) {

    var val = req.body.body

    con.query("CALL proc_testzentrum_suche(?,?,?)",[testCoord1,testCoord2,val], function (error, results, fields) {
      if (error) {
        return console.error(error.message);
      }
      
      console.log(results);
    });
/*
    con.query(`SELECT * FROM userprofil WHERE vorname = "${val}"`, function (err, rows, fields) {
      if (err) throw err;
      rows.forEach( (row) => {
        console.log(`${row.vorname} ${row.nachname}`);
      });  
    });
    res.render('index', { title: 'Express' });
    */
});

module.exports = router;