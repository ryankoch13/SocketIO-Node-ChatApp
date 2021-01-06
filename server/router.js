const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('This app has been re-hosted on netlify to make it faster. Please visit ryanchat.netlify.app')
})

module.exports = router