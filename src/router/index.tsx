import { BrowserRouter } from "react-router-dom";
import AppRouter from './routes'
function Router() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default Router;
