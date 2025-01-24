
const express = require('express')
const router = express.Router()


router.get('/', (req, res)  => {
    console.log('User List');
    res.send("This is User list Page.")
})


router.get('/new', (req, res) => {
    res.send("New User Form Section")
});

module.exports = router;