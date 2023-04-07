import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {ContextProvider} from "./Components/utils/global.context";
import {Outlet} from "react-router-dom";

function App() {
    return (
      <div className="App">
          <ContextProvider>
              <Navbar/>
              <Outlet />
              <Footer/>
          </ContextProvider>
      </div>
  );
}

export default App;
