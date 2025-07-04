const Todo = ({ todo, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo)
  }

  const onClickComplete = (todo) => () => {
    completeTodo(todo)
  }

  const key = (Math.random() * 10000).toString().replace('.', '')

  return (<div className="todoContainer" key={key}>
    <span>{todo.text}</span>
    <span>
      This TODO is {todo.done ? 'done' : 'NOT done'}
    </span>
    <span>
      <button onClick={onClickDelete(todo)}> Delete </button>
      {todo.done ? <></> : <button onClick={onClickComplete(todo)}> Set as done </button>}
    </span>
  </div>
  )
}

export default Todo