const express = require('express');
const router = express.Router();
const teamCtrl = require('../controllers/teams');

/*---------- Public Routes ----------*/
router.post('/add', teamCtrl.add)
router.get('/index', teamCtrl.index)
router.post('/delete', teamCtrl.delete)



/*---------- Protected Routes ----------*/




module.exports = router;