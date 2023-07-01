
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import Favs from './Routes/Favs'
import Detail from './Routes/Detail'
import Layout from "./Layout/Layout"
import { myRoutes } from "./Routes/utils/myRoutes";
import PageNotFound from "./Routes/PageNotFound";
import FetchContext from './Context/FetchContext/FetchContext';
import ThemeContext from './Context/ThemeContext/ThemeContext';


function App() {
  return (
      <div className="App">
        <FetchContext>
        <ThemeContext>
        <Layout>
            <Navbar/>
            <Routes>              
                <Route path={myRoutes.home} element={<Home/>} />
                <Route path={myRoutes.contact} element={<Contact/>} />
                <Route path={myRoutes.favs} element={<Favs/>} />
                <Route path={`${myRoutes.detail}:id`} element={<Detail />} />
                <Route path={myRoutes.pageNotFound} element={<PageNotFound/>} />              
            </Routes>
            <Footer/>
        </Layout>
        </ThemeContext>
        </FetchContext>
      </div>
  )
}

export default App;
