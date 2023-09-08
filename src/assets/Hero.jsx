import Typewriter from "typewriter-effect";

export default function HeroApp() {
	return (
		<div className="w-full h-full flex items-center flex-col md:flex-row md:gap-32 justify-center md:mt-0">
			<img
				src="./img/1.png"
				className="w-[10rem] rounded-full bg-slate-500 border-slate-400 border-2 md:w-[12rem] lg:w-[15rem] md:order-last"
			/>
			<div className="md:ml-24 md:w-1/3">
				<h1 className="">{"Hello, I'm a"}</h1>
				<h1 className="text-4xl md:text-6xl italic">
					<Typewriter
						style
						onInit={(typewriter) => {
							typewriter
								.typeString("Web Developer")
								.pauseFor(1000)
								.deleteAll()
								.start();
						}}
						options={{
							autoStart: true,
							loop: true,
						}}
					/>
				</h1>
				<h1>
					My name is{" "}
					<span className="text-2xl">Afrizal Luthfi Eka Arnatha</span>
				</h1>
			</div>
		</div>
	);
}
