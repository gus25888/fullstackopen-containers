const express = require('express');
const { Todo } = require('../mongo')
const router = express.Router();

/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({})
  res.send(todos);
});

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false
  })
  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params
  req.todo = await Todo.findById(id)
  if (!req.todo) return res.sendStatus(404)

  next()
}

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete()
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get('/', async (req, res) => {
  if (req.todo) {
    return res.json(req.todo);
  }

  return res.sendStatus(404);
});

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
  const { text, done } = req.body;

  if (typeof done !== "boolean") {
    return res.status(400).json({ error: "'done' is required and must be a boolean." });
  }
  if (typeof text !== "string") {
    return res.status(400).json({ error: "'text' is required and must be a string." });
  }

  const todoData = { text, done }

  if (req.todo && todoData) {
    const todoUpdated = await Todo.updateOne(req.todo, todoData, { new: true, runValidators: true, context: 'query' })
    if (todoUpdated) {
      return res.json(todoUpdated);
    }
  }

  return res.sendStatus(404);
});

router.use('/:id', findByIdMiddleware, singleRouter)


module.exports = router;
