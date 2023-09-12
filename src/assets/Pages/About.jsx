import { Link } from "react-router-dom";

export default function About() {
	return (
		<div className="w-screen h-screen flex justify-start items-center flex-col gap-4 md:justify-center md:mt-0 md:flex-row">
			<Link to="/" className="flex gap-3 absolute top-5 left-8">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6 hover:stroke-accent"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
					/>
				</svg>
				<h1 className="hidden md:block hover:text-accent">Back to Home</h1>
			</Link>
			<div className="flex flex-col w-full h-2/5 m-24 items-center lg:flex-row">
				{/* About Section */}
				<div className="bg-base-300 rounded-box flex flex-col w-4/5 md:w-1/2 p-16 gap-5 justify-center items-start">
					<h1 className="text-accent text-3xl">About</h1>
					<p>
						Saya adalah mahasiswa di Universitas Negeri Surabaya.
						Saya memiliki minat yang kuat dalam teknologi, yang
						mendorong saya untuk selalu ingin tahu tentang
						perkembangan terbaru dalam bidang ini. Selain itu, saya
						juga sangat tertarik pada logika dan matematika, dan
						saya sering menghabiskan waktu untuk belajar dan
						memecahkan masalah matematis.
					</p>
				</div>
				<div className="divider lg:divider-horizontal"></div>
				{/* Skills Section */}
				<div className="bg-base-300 rounded-box w-4/5 md:w-1/2 p-12 flex flex-col gap-5 items-start justify-center">
					<h1 className="text-accent text-3xl">Skills</h1>
					<div className="w-full gap-4 grid grid-rows-4 grid-cols-1 md:grid-rows-2 md:grid-cols-3 justify-center items-center">
						<div>
						<h1 className="font-poppins">Mathematics</h1>
						<div className="rating">
							<svg
								type="radio"
								name="rating-5"
								className="mask mask-star-2 bg-accent w-3 h-3"
							/>
							<svg
								type="radio"
								name="rating-5"
								className="mask mask-star-2 bg-accent w-3 h-3"
							/>
							<svg
								type="radio"
								name="rating-5"
								className="mask mask-star-2 bg-accent w-3 h-3"
							/>
							<svg
								type="radio"
								name="rating-5"
								className="mask mask-star-2 bg-accent opacity-25 w-3 h-3"
							/>
							<svg
								type="radio"
								name="rating-5"
								className="mask mask-star-2 bg-accent opacity-25 w-3 h-3"
							/>
						</div>
						</div>
						<div>
						<h1 className="font-poppins">Computer Skills</h1>
						<div className="rating">
							<svg
								type="radio"
								name="rating-5"
								className="mask mask-star-2 bg-accent w-3 h-3"
							/>
							<svg
								type="radio"
								name="rating-5"
								className="mask mask-star-2 bg-accent w-3 h-3"
							/>
							<svg
								type="radio"
								name="rating-5"
								className="mask mask-star-2 bg-accent w-3 h-3"
							/>
							<svg
								type="radio"
								name="rating-5"
								className="mask mask-star-2 bg-accent opacity-25 w-3 h-3"
							/>
							<svg
								type="radio"
								name="rating-5"
								className="mask mask-star-2 bg-accent opacity-25 w-3 h-3"
							/>
						</div>
						</div>
						<div>
						<h1 className="font-poppins">Problem Solving</h1>
						<div className="rating">
							<svg
								type="radio"
								name="rating-5"
								className="mask mask-star-2 bg-accent w-3 h-3"
							/>
							<svg
								type="radio"
								name="rating-5"
								className="mask mask-star-2 bg-accent w-3 h-3"
							/>
							<svg
								type="radio"
								name="rating-5"
								className="mask mask-star-2 bg-accent w-3 h-3"
							/>
							<svg
								type="radio"
								name="rating-5"
								className="mask mask-star-2 bg-accent opacity-25 w-3 h-3"
							/>
							<svg
								type="radio"
								name="rating-5"
								className="mask mask-star-2 bg-accent opacity-25 w-3 h-3"
							/>
						</div>
						</div>
						<div>
						<h1 className="font-poppins">Microsoft Office</h1>
						<div className="rating">
							<svg
								type="radio"
								name="rating-5"
								className="mask mask-star-2 bg-accent w-3 h-3"
							/>
							<svg
								type="radio"
								name="rating-5"
								className="mask mask-star-2 bg-accent w-3 h-3"
							/>
							<svg
								type="radio"
								name="rating-5"
								className="mask mask-star-2 bg-accent opacity-25 w-3 h-3"
							/>
							<svg
								type="radio"
								name="rating-5"
								className="mask mask-star-2 bg-accent opacity-25 w-3 h-3"
							/>
							<svg
								type="radio"
								name="rating-5"
								className="mask mask-star-2 bg-accent opacity-25 w-3 h-3"
							/>
						</div>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	);
}
