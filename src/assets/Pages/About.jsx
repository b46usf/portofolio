import { Link } from "react-router-dom";

export default function About() {
	return (
		<div className="w-screen h-screen flex items-center flex-col gap-4 md:justify-center md:mt-0 md:flex-row">
			<Link to="/" className="flex gap-3 absolute top-5 left-8">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
					/>
				</svg>
				<h1 className="hidden md:block">Back to Home</h1>
			</Link>
			<div className="tabs">
				<a className="tab tab-lifted tab-active">
					Normal
				</a>
				<a className="tab tab-lifted">Normal</a>
				<a className="tab tab-lifted">Normal</a>
			</div>
		</div>
	);
}
