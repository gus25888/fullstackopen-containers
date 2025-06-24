const Todo = ({ todo, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo)
  }

  const onClickComplete = (todo) => () => {
    completeTodo(todo)
  }

  return (<div className="todoContainer">
    <span>{todo.text}</span>
    <span>
      This todo is {todo.done ? 'done' : 'NOT done'}
    </span>
    <span>
      <button onClick={onClickDelete(todo)}> Delete </button>
      {todo.done ? <></> : <button onClick={onClickComplete(todo)}> Set as done </button>}
    </span>
  </div>
  )
}

export default Todo