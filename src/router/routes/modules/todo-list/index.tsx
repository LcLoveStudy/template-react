import TodoList from '@/view/todo-list'
const TodoModule: MenuItemType = {
  path: 'todo-list',
  name: '代办事项',
  order: 2,
  element: <TodoList />
}

export default TodoModule
