import Typewriter from "typewriter-effect";

export default function HeroApp() {
	return (
		<div className="w-full h-full flex items-center flex-col md:flex-row md:gap-32 justify-center md:mt-0">
			<img
				src="./img/1.webp"
				className="w-[10rem] rounded-full bg-slate-500 border-accent border-2 md:w-[12rem] lg:w-[15rem] md:order-last"
			/>
			<div className="md:ml-18 md:w-2/5 mt-5">
				<h1 className="">{"Hello, My name is"}</h1>
				<h1 className="text-4xl md:text-4xl italic text-accent">
					<Typewriter
						style
						onInit={(typewriter) => {
							typewriter
								.typeString("Afrizal Luthfi Eka Arnatha")
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
					I{`'`}am a College Student
				</h1>
			</div>
		</div>
	);
}
