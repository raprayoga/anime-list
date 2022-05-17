import Category from "components/pages/Category";
import Detail from "components/pages/Detail";
import Home from "components/pages/Home";
import ListOnCategory from "components/pages/ListOnCategory";

const animesRoutes = [{
    path: "/",
    exact: true,
    element: <Home />
  },
  {
    path: "/category",
    element: <Category />
  },
  {
    path: "/category/:id",
    element: <ListOnCategory />
  },
  {
    path: "/detail/:id",
    element: <Detail />
  }
];

export default animesRoutes