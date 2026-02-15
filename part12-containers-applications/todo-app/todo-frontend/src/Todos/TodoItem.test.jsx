import { render, screen } from '@testing-library/react'
import TodoItem from './TodoItem'
import { describe, expect } from 'vitest'

describe('TodoItem is rendered.', () => {

  test('Renders text and status as done.', () => {
    const todo = {
      text: 'Component testing is done with react-testing-library',
      done: true
    }

    const doneInfo = (
      <>
        <span>This todo is done</span>
        <span>
          <button> Delete </button>
        </span>
      </>
    )

    render(<TodoItem text={todo.text} done={doneInfo} />)

    const textElement = screen.getByText('Component testing is done with react-testing-library')
    const doneElement = screen.getByText('This todo is done')

    expect(textElement).toBeDefined()
    expect(doneElement).toBeDefined()
  })

  test('Renders text and status as not done.', () => {
    const todo = {
      text: 'Component testing is done with react-testing-library',
      done: false
    }

    const notDoneInfo = (
    <>
      <span>
        This todo is not done
      </span>
      <span>
        <button> Delete </button>
        <button> Set as done </button>
      </span>
    </>
  )

    render(<TodoItem text={todo.text} done={notDoneInfo} />)

    const textElement = screen.getByText('Component testing is done with react-testing-library')
    const doneElement = screen.getByText('This todo is not done')
    expect(textElement).toBeDefined()
    expect(doneElement).toBeDefined()
  })
})