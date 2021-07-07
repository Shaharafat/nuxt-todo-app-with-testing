import { mount } from '@vue/test-utils'
import SingleTodo from '~/components/SingleTodo.vue'

describe('single todo', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(SingleTodo, {
      propsData: {
        content: {
          id: '1',
          userId: '11',
          title: 'breakfast',
          completed: false
        }
      }
    })
  })

  test('Title should be matched', () => {
    const titleElem = wrapper.get('[data-test="todo-title"]')

    expect(titleElem.text()).toBe('breakfast')
  })

  test('Should emit toggle-todo-completed', async () => {
    const toggleButton = wrapper.get('[data-test=todo-toggle]')

    await toggleButton.trigger('click')

    expect(wrapper.emitted()).toHaveProperty('toggle-todo-complete')
    expect(wrapper.emitted('toggle-todo-complete')[0][0]).toBe('1')
  })

  test('Should emit remove-todo', async () => {
    const deleteButton = wrapper.get('[data-test="remove-todo"]')

    await deleteButton.trigger('click')

    expect(wrapper.emitted()).toHaveProperty('remove-todo')
  })
})
