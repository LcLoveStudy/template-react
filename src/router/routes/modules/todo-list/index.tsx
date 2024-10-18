import TodoList from '@/view/todo-list'
import { BookOutlined } from '@ant-design/icons'
const TodoModule: MenuItemType = {
  path: 'todo-list',
  name: '代办事项',
  icon: <BookOutlined />,
  order: 2,
  element: <TodoList />
}

export default TodoModule
