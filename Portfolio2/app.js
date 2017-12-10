const axios = require('axios');
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.post('/api/login', (req,res) => {
    axios.get('http://localhost:3000/logins').then(logins => {
        console.log(req.body, logins.data);
        let user = logins.data.filter(x => x.Username === req.body.Username);
        console.log(user);
        if(user.length != 1)
        {
            res.status(500).send("Invalid Information");
            return;
        }
        if(user[0].Password === req.body.Password)
        {
            axios.get('http://localhost:3000/users').then(foundUser => {
                res.send(foundUser.data.filter(x => x.ID === user[0].ID)[0]);
            });
        }
        else{
            res.status(500).send("Invalid Information");
        }
    })
})

app.post('/api/register', (req,res) => {
    axios.post('http://localhost:3000/users', {Username: req.body.Username, Gender: req.body.Gender, Prefered: req.body.Prefered, Birthday: req.body.Birthday, Cash: req.body.Cash}).then(user => {
        axios.post('http://localhost:3000/logins', {Username: req.body.Username, Password: req.body.Password, userID: user.data.id}).then(login => {
            res.send(user.data);
        })
    })
})

app.listen(5000);
