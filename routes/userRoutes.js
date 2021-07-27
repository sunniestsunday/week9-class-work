const express = require('express');
const router = express.Router();
router.post ('/Signup', () =>{
    console.log(req.body)
})

module.exports = router;