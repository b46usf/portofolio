import HeroApp from "./assets/Hero";
import NavbarApp from "./assets/Navbar";

function Home() {
	return (
		<div className="p-10 w-screen h-screen font-poppins">
			<NavbarApp />
			<HeroApp/>
		</div>
	);
}

export default Home;
