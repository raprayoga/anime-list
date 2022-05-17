import routes from "./routers/index"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";
import './App.css';
import {
  useNavigate,
  useLocation,
} from "react-router-dom";
import BottomNavigate from './components/organisms/BottomNavigate'
import Navbar from "components/organisms/Navbar";
import Header from "components/organisms/Header";

const history = createBrowserHistory();

function WithBottom() {
  const location = useLocation()
  const myLocation = location.pathname.split('/')

  return (
    myLocation[1] != 'detail' &&
    <BottomNavigate />
  )
}

function App() {
  return (
    <Router history={history} basename="/anime-list">
      <Navbar />
      <Header />
        <Routes>
          {routes.map((route, index) => (
            <Route
            key={index}
            path={route.path}
            exact={route.exact}
            element={route.element}
            />
          ))}
        </Routes>
      <WithBottom />
    </Router>
  );
}

export default App;
