const express = require('express');
const router = express.Router();
const {gettask,createtask,updatetask,deletetask, gettaskbyid} = require('../controllers/controls');

router.get('/',gettask);
router.post('/',createtask);
router.put('/:id',updatetask);
router.delete('/:id',deletetask);
router.get('/:id',gettaskbyid)

module.exports = router;