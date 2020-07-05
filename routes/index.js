const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
    res.redirect(`http://localhost:${process.env.REACT_PORT}`);
});

module.exports = router;