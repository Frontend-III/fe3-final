import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/contact" element={<Contact />} />
					<Route exact path="/detail" element={<Detail />} />
					<Route exact path="/favs" element={<Favs />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
