import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => (
  <>
    {todos
      .map(todo => <Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />)
      .reduce((acc, cur) => [...acc, <hr />, cur], [])
    }
  </>
)

export default TodoList
