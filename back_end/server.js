const express = require("express");

const mysql = require('mysql');

const cors = require('cors');

const { check, validationResult } = require('express-validator');

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
    const sql = 'INSERT INTO user (user_name,user_email,pass_word, access) VALUES (?)';
    const values = [req.body.name, req.body.email, req.body.password, "user"];

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

        db.query(sql, [req.body.userName, req.body.password], (err, data) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.json(errors);
            } else {
                if (err) { return res.json("Error"); }
                if (data.length > 0) {
                    return res.json(data);
                } else {
                    return res.json("Faile");
                }
            }
        })
    })

app.post('/dashboard', (req, res) => {
    if (req.body.key === 'get Car Data') {
        const sql = "SELECT * FROM cars";
        db.query(sql, (err, data) => {
            if (err) {
                console.log(err);
                return res.json("Error");
            }
            return res.json(data);
        })
    } else if (req.body.key === 'get User Data') {
        const sql = "SELECT * FROM `user` WHERE access = 'user' ";
        db.query(sql, (err, data) => {
            if (err) {
                console.log(err);
                return res.json("Error");

            }
            return res.json(data);
        })
    } else {
        const sql = 'INSERT INTO `cars`(`brand`, `model`, `year`, `tranmission`, `num_seats`, `fuel_type`, `price_per_day`, `image`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
        db.query(sql, [req.body.brand, req.body.model, req.body.year, req.body.transmission, req.body.num_seats, req.body.fuel_type, req.body.price_per_day, req.body.image], (err, data) => {
            if (err) {
                console.log(err);
                return res.json("Error");
            }
            return res.json("Success");
        })
    }
})

app.post('/booking',
    (req, res) => {
        if (req.body.key === "get Booking Data") {
            const sql =
                `SELECT b.start_date, b.end_date, b.total_price, c.brand, c.model, u.full_name, u.user_email
                FROM bookings b
                JOIN cars c ON b.car_id = c.car_id
                JOIN user u ON b.user_id = u.user_id`;
            db.query(sql, (err, data) => {
                if (err) {
                    console.log(err);
                    return res.json("get Booking Data Error!");
                } else {
                    return res.json(data);
                }
            })
        }
    })


app.post("/profile",
    (req, res) => {
        const newUser = req.body;

        const sql = "UPDATE `user` SET `user_name` = ?, `pass_word` = ?, `user_email` = ?, `full_name` = ?, `phone_number` = ?, `citizenID` = ?, `user_images` = ?, `address` = ? WHERE `user_name` = ?";


        const values = [
            newUser.user_name,
            newUser.pass_word,
            newUser.user_email,
            newUser.full_name,
            newUser.phone_number,
            newUser.citizenID,
            newUser.user_images,
            newUser.address,
            newUser.user_name,
        ];
        // console.log(values);
        db.query(sql, values, (err, data) => {
            if (err) {
                console.log(err);
                return res.json("Cap nhat that bai");
            } else {
                console.log(1);
                return res.json("Success");
            }
        })

    })
app.listen(8082, () => { console.log("listening"); })