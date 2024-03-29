const express = require('express')
const app = express()
const cors = require('cors')
const User = require('./models/model')
const jwt = require('jsonwebtoken');
app.use(express.json())
app.use(cors())
const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://rohit:Krohit03032002.@cluster0.xcoleq7.mongodb.net/test")
// mongoose.connection.on('error', err => {
//     console.log(err);
//   });


app.post('/api/register', async (req, res) => {
    console.log(req.body)
    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.json({ status: 'ok' })

    } catch (err) {
        res.json({ status: 'error', error: 'duplicate email' })
    }

}
)

app.post('/api/login', async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password
    })
    console.log(user)
    if (user) {
        const token = jwt.sign({
            name: user.name,
            email: user.email

        },
            'opensecret123'
        )
        console.log(token);
        const userToken={name:user.name,email:user.email,token}
        return res.json({"status":"ok",'user':userToken})
    }
    else {
        return res.json({ 'status': 'error', user: false })
    }
})


app.listen(7070, () => {
    console.log("port 7070")
})