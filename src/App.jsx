import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Cert from "./assets/Pages/Cert.jsx";
import Contact from "./assets/Pages/Contact.jsx";
import Project from "./assets/Pages/Project.jsx";
import About from "./assets/Pages/About.jsx";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" Component={Home} />
				<Route path="/about" Component={About} />
				<Route path="/certification" Component={Cert} />
				<Route path="/project" Component={Project} />
				<Route path="/contact" Component={Contact} />
			</Routes>
		</Router>
	);
};

export default App;
