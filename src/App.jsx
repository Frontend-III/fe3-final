
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Detail from "./Routes/Detail";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import {useContextGlobal} from "./Components/utils/global.context"


function App() {
  const {theme} = useContextGlobal()
  return (
      <div className="App" id={theme}>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/favs" element={<Favs/>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
