import { Route, Routes } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Layout from './Layout/Layout';
import Favs from './Routes/Favs';
import { myRoutes } from './Routes/utilties/myRoutes';
// import Login from './Routes/Login';

// import Footer from "./Components/Footer";
// import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path={myRoutes.home} element={<Home />} />
          <Route path={myRoutes.contact} element={<Contact />} />
          <Route path={`${myRoutes.detail}:id`} element={<Detail />} />
          {/* <Route path={myRoutes.login} element={<Login />} /> */}
          <Route path={myRoutes.favs} element={<Favs />} />
          {/* <Route path={myRoutes.pageNotFound} element={<PageNotFound />} /> */}
        </Route>
      </Routes>
      {/* <Navbar/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
