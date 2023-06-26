
import { Route, Routes } from "react-router-dom";
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import Favs from './Routes/Favs'
import Detail from './Routes/Detail'
import Layout from "./Layout/Layout"
import { myRoutes } from "./Routes/utils/myRoutes";
import PageNotFound from "./Routes/PageNotFound";



function App() {
  return (
      <div className="App">
            <Routes>
              <Route path="" element={<Layout />} >
                <Route path={myRoutes.home} element={<Home/>} />
                <Route path={myRoutes.contact} element={<Contact/>} />
                <Route path={myRoutes.favs} element={<Favs/>} />
                <Route path={myRoutes.detail} element={<Detail/>} />
                <Route path={myRoutes.pageNotFound} element={<PageNotFound/>} />
              </Route>
            </Routes>
      </div>
  )
}

export default App;
