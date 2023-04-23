const express = require("express");

const mysql = require('mysql');

const cors = require('cors');

const {check, validationResult} = require('express-validator');

const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: '6466'
})

app.post('/signup', (req, res) => {
  const sql = 'INSERT INTO user (user_name,user_email,pass_word) VALUES (?)';
  const values = [req.body.name, req.body.email, req.body.password];

  db.query(sql, [values], (err, data) => {
    if (err) {
        return res.json("Error");
    }
    return res.json(data);
  })
})

app.post('/login',
    (req, res) => {
        const sql = "SELECT * FROM user WHERE user_name = ? AND pass_word = ?";
        console.log(req);
        db.query(sql, [req.body.userName, req.body.password], (err, data) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.json(errors);
            } else {
                if (err) { return res.json("Error"); }
                if (data.length > 0) {
                    return res.json("Success");
                } else {
                    return res.json("Faile");
                }
            }
        })
    })
app.listen(8082, () => { console.log("listening"); })