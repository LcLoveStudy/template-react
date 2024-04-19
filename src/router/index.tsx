import { Route, Routes, HashRouter } from "react-router-dom";
import TodoList from "../view/todo-list";
import Layout from "../view/layout";
function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TodoList />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default Router;
