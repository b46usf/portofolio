import { Link } from "react-router-dom";
import {
	Instagram,
	Linkedin,
	Twitter,
	Globe,
	Phone,
	Mail,
	GitHub,
} from "react-feather";

export default function Contact() {
	return (
		<div className="w-screen h-screen flex justify-center items-center">
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
			<div className="h-full flex flex-col justify-center gap-10">
				<div className="flex items-center gap-3 justify-cent">
				<a
						href="https://wa.me/085790558624"
						target="_blank"
						rel="noopener noreferrer"
						className="w-10 h-10"
					>
						<Phone size={26} className="hover:stroke-accent"/>
					</a>
					<h1>+62 857 9055 8624</h1>
				</div>
				<div className="flex gap-3 items-center">
				<a
						href="fianarnatha13@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
						className="w-10 h-10"
					>
						<Mail size={26} className="hover:stroke-accent" />
					</a>
					<h1>afrizal.23183@mhs.unesa.ac.id</h1>
				</div>
				<div className="flex justify-between items-center">
					<a
						href="https://www.instagram.com/afrizallea_/"
						target="_blank"
						rel="noopener noreferrer"
						className="w-10 h-10"
					>
						<Instagram size={26} className="hover:stroke-accent" />
					</a>
					<a
						href="https://www.linkedin.com/in/afrizal-luthfi-4b8369281/"
						target="_blank"
						rel="noopener noreferrer"
						className="w-10 h-10"
					>
						<Linkedin size={26} className="hover:stroke-accent" />
					</a>
					<a
						href="https://github.com/Ijoelel"
						target="_blank"
						rel="noopener noreferrer"
						className="w-10 h-10"
					>
						<GitHub size={26} className="hover:stroke-accent" />
					</a>
					<a
						href="https://twitter.com/Ijoelel?s=09"
						target="_blank"
						rel="noopener noreferrer"
						className="w-10 h-10"
					>
						<Twitter size={26} className="hover:stroke-accent" />
					</a>
					<a
						href="https://afrizal-luthfi.vercel.app"
						target="_blank"
						rel="noopener noreferrer"
						className="w-10 h-10"
					>
						<Globe size={26} className="hover:stroke-accent" />
					</a>
				</div>
			</div>
		</div>
	);
}
