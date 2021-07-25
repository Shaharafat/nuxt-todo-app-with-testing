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

  test('should have two items initially', () => {
    expect(wrapper.find('[data-test="todo-list"]').exists()).toBe(true)
    expect(wrapper.findAll('[data-test="todo-list-item"]')).toHaveLength(1)
  })

  test('should emit toggle-todo-complete', () => {
    wrapper.vm.emitToggleTodo(1)

    expect(wrapper.emitted()).toHaveProperty('toggle-todo-complete')
    expect(wrapper.emitted('toggle-todo-complete')[0][0]).toBe(1)
  })

  test('should emit remove-todo', () => {
    wrapper.vm.emitRemoveTodo(1)

    expect(wrapper.emitted()).toHaveProperty('remove-todo')
    expect(wrapper.emitted('remove-todo')[0][0]).toBe(1)
  })
})
