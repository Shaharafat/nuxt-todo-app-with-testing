import { mount } from '@vue/test-utils'
import TodoList from '~/components/TodoList.vue'

describe('Todo list item', () => {
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
    wrapper = mount(TodoList, {
      propsData: { todos },
      stubs: {
        SingleTodo: true
      }

    })
  })

  test('should have length of two', () => {
    expect(wrapper.find('[data-test="todo-list"]').exists()).toBe(true)
    expect(wrapper.findAll('[data-test="todo-list-item"]')).toHaveLength(2)
  })

})
