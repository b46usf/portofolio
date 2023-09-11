import { Link } from "react-router-dom";
import api from "../api.json";

export default function Cert() {
	setTimeout(function () {
		if (window.innerWidth <= 768) {
			document.getElementById("my_modal_x").showModal();
		}
	}, 0);

	return (
		<div className="w-screen h-screen flex justify-center items-center flex-col gap-4 md:justify-center md:mt-0 md:flex-row">
			<dialog id="my_modal_x" className="modal">
				<div className="modal-box alert">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						className="stroke-current shrink-0 w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						></path>
					</svg>
					<span>Tekan pada tabel untuk melihat sertifikat.</span>
				</div>
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
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
			<div className="w-full md:w-4/5 md:h-4/5 flex p-6 justify-center items-center border-0 rounded-lg border-gray-700 md:border-2">
				<div className="overflow-x-auto w-full h-full">
					<table className="table table-pin-rows table-pin-cols table-sm md:table-lg">
						{/* head */}
						<thead>
							<tr>
								<th></th>
								<th className="text-base">Title</th>
								<th className="text-base">Date</th>
								<th className="text-base">From</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{api.result.map((item, i) => {
								return (
									<tr key={i}
									>
										<th>{i + 1}</th>
										<td>{item.title}</td>
										<td>{item.date}</td>
										<td>
											<a
												href={item.link}
												target="_blank"
												rel="noopener noreferrer"
												className="text-blue-600 hover:text-slate-400"
											>
												{item.from}
											</a>
										</td>
										<td>
											<button
												className="btn btn-xs hidden md:block"
												onClick={() =>
													document
														.getElementById(
															`my_modal_${i}`
														)
														.showModal()
												}
											>
												Show
											</button>
										</td>
										<dialog
											id={`my_modal_${i}`}
											className="modal"
										>
											<div className="modal-box">
												<img
													src={`./sertif/${item.image}`}
													alt={item.title}
												/>
												<div className="modal-action">
													<form method="dialog">
														{" "}
														{/* if there is a button in form, it will close the modal */}
														<button className="btn">
															Close
														</button>{" "}
													</form>
												</div>
											</div>

											<form
												method="dialog"
												className="modal-backdrop"
											>
												<button>close</button>
											</form>
										</dialog>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
