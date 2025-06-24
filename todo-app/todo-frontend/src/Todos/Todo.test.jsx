import { render, screen } from '@testing-library/react'
import Todo from './Todo'

test('renders content', () => {
  const newTodo = {
    text: 'Test the correct rendering of Todos',
  }

  const { container } = render(<Todo todo={newTodo} />)

  const div = container.querySelector('.todoContainer')

  expect(div).toHaveTextContent(newTodo.text)
})