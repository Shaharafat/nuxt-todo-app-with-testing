import { mount } from '@vue/test-utils'
import TodoInput from '~/components/TodoInput.vue'

describe('Input form', () => {
  let wrapper
  const todos = [
    {
      id: '1',
      userId: '1',
      title: 'breakfast',
      completed: true
    },
    {
      id: '2',
      userId: '2',
      title: 'lunch',
      completed: true
    }
  ]

  beforeEach(() => {
    wrapper = mount(TodoInput, {
      propsData: {
        todos
      }
    })
  })

  test('should have an input field', () => {
    expect(
      wrapper.find('[data-test="todo-input"]').exists()
    ).toBe(true)
  })

  test('should not add new todo in the list if no text given', async () => {
    const form = wrapper.get('[data-test="todo-form"]')

    expect(todos.length).toBe(2)

    await form.trigger('submit.prevent')

    expect(todos.length).toBe(2)
  })

  test('should add new todo in the list if text given', async () => {
    const form = wrapper.get('[data-test="todo-form"]')
    const input = wrapper.get('[data-test="todo-input"]')

    expect(todos.length).toBe(2)

    await input.setValue('Dinner')
    await form.trigger('submit.prevent')

    expect(todos.length).toBe(3)
  })
})
