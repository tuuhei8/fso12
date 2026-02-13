const express = require('express');
const { getAsync } = require('../redis')
const router = express.Router();

/* GET todo count */
router.get('/', async (req, res) => {
  let todosCount = await getAsync('todosCounter')
  if (!todosCount) {
    todosCount = 0
  }
  const countObject = {
    'todos_added': Number(todosCount)
  }
  res.send(countObject);
})

module.exports = router;