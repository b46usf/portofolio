import { Link } from "react-router-dom";

export default function Project() {
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
			<div className="card card-compact w-96 bg-base-100 shadow-xl mt-16">
				<figure>
					<img src="./img/project1.png" alt="Portofolio" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">Website Portofolio</h2>
					<p>
						Website yang saya buat untuk mendeskripsikan siapa dan
						apa kemampuan saya.
					</p>
					<div className="card-actions justify-end">
						<a
							href="http://exsciitwo.vercel.app"
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn-primary"
						>
							Visit
						</a>
					</div>
				</div>
			</div>
			<div className="card card-compact w-96 bg-base-100 shadow-xl">
				<figure>
					<img src="./img/project2.png" alt="Website " />
				</figure>
				<div className="card-body">
					<h2 className="card-title">Exsciitwo</h2>
					<p>Website yang saya buat sebagai kenang-kenangan.</p>
					<div className="card-actions justify-end">
						<a
							href="http://exsciitwo.vercel.app"
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn-primary"
						>
							Visit
						</a>
					</div>
				</div>
			</div>
			<div className="card card-compact w-96 bg-base-100 shadow-xl">
				<figure>
					<img src="./img/project3.png" alt="Iqiyi-clone" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">Web Cloning Iqiyi</h2>
					<p>
						Website yang saya buat untuk mengasah skill pengembangan
						website yang saya punyai, sekaligus sebagai project
						full-stack pertama saya.
					</p>
					<div className="card-actions justify-end">
						<button
							className="btn btn-primary"
							onClick={() =>
								document
									.getElementById("my_modal_5")
									.showModal()
							}
						>
							Visit
						</button>
						<dialog
							id="my_modal_5"
							className="modal modal-bottom sm:modal-middle"
						>
							<div className="modal-box">
								<h3 className="font-bold text-lg">Sorry!</h3>
								<p className="py-4">
									Website is not completed yet. Wanna see my
									repo ?
								</p>
								<div className="modal-action">
									<form method="dialog">
										{/* if there is a button in form, it will close the modal */}
										<a
											href="https://github.com/Ijoelel/iqiyi-clone"
											target="_blank"
											rel="noopener noreferrer"
											className="btn btn-primary"
										>
											Yes
										</a>
										<button className="btn">No</button>
									</form>
								</div>
							</div>
						</dialog>
					</div>
				</div>
			</div>
		</div>
	);
}
