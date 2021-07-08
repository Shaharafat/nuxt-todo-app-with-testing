import { mount } from '@vue/test-utils'
import AppContainer from '~/components/AppContainer.vue'

describe('App container', () => {
  let wrapper
  const todos = [
    {
      id: '1',
      title: 'breakfast',
      completed: false

    },
    {
      id: '2',
      title: 'lunch',
      completed: false

    }
  ]
  beforeEach(() => {
    wrapper = mount(AppContainer, {
      data () {
        return {
          todos
        }
      },
      stubs: {
        TodoInput: true,
        TodoList: true
      }
    })
  })

  test('Should have a todo add form', () => {
    expect(wrapper.get('[data-test="todo-input-container"]').exists()).toBe(true)
  })

  test('Should have a todo list cotainer', () => {
    expect(wrapper.get('[data-test="todo-list-container"]').exists()).toBe(true)
  })

  test('Should toggle todo for the given id', () => {
    wrapper.vm.toggleTodo('2')

    expect(wrapper.vm.todos[1].completed).toBeTruthy()
  })

  test('Should remove a todo', () => {
    wrapper.vm.removeTodo('2')

    expect(wrapper.vm.todos.length).toBe(1)
  })
})
