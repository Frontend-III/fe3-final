import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {ContextGlobal, initialState, reducer} from "./Components/utils/global.context";
import {Outlet} from "react-router-dom";
import {useMemo, useReducer} from "react";

function App() {

    const [state, dispatch] = useReducer(reducer, initialState);
    const value = useMemo(() => ({ state, dispatch }), [state]);

    return (
      <div className="App">
          <ContextGlobal.Provider value={value}>
              <Navbar/>
              <Outlet />
              <Footer/>
          </ContextGlobal.Provider>
      </div>
  );
}

export default App;
