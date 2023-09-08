import { Link } from "react-router-dom";

export default function About() {
	return (
		<Link to="/" className="flex gap-3 mt-5 ml-8">
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
	);
}
