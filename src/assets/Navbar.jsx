import { Link } from "react-router-dom";

export default function NavbarApp() {
	return (
		<div>
			<ul className="flex items-center justify-center gap-10 font-medium">
				<Link to="/about">About</Link>
				<Link to="/project">Project</Link>
				<Link to="/certification">
					Certification
				</Link>
				<Link to="/contact">Contact</Link>
			</ul>
		</div>
	);
}
