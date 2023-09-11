import { Link } from "react-router-dom";

export default function NavbarApp() {
	return (
		<div>
			<ul className="flex items-center justify-center gap-10 font-medium">
				<Link to="/about" className="hover:text-accent">About</Link>
				<Link to="/project" className="hover:text-accent">Project</Link>
				<Link to="/certification" className="hover:text-accent">
					Certification
				</Link>
				<Link to="/contact" className="hover:text-accent">Contact</Link>
			</ul>
		</div>
	);
}
