import { Link } from "react-router-dom";

export default function Cert() {
	window.addEventListener("DOMContentLoaded", () => {
		alert("Tekan pada tabel untuk memunculkan sertifikat");
	});

	return (
		<div className="w-screen h-screen flex justify-center items-center flex-col gap-4 md:justify-center md:mt-0 md:flex-row">
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
			<div className="w-4/5 h-4/5 flex p-6 justify-center items-center border-2 rounded-lg border-gray-700">
				<div className="md:overflow-x-auto w-full h-full overflow-x-hidden">
					<table className="table table-pin-rows md:table-lg ">
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
							{/* row 1 */}
							<tr
								onClick={() =>
									document
										.getElementById("my_modal_2")
										.showModal()
								}
							>
								<th>1</th>
								<td>Python, (Basic)</td>
								<td>07 July 2023</td>
								<td>HackerRank</td>
								<td>
									<button
										className="btn btn-xs"
										onClick={() =>
											document
												.getElementById("my_modal_2")
												.showModal()
										}
									>
										Show
									</button>
									<dialog id="my_modal_2" className="modal">
										<div className="modal-box">
											<img
												src="./img/sertif/problem_solving_basic certificate.webp"
												alt=""
											/>
											<div className="modal-action">
												<form method="dialog">
													{/* if there is a button in form, it will close the modal */}
													<button className="btn">
														Close
													</button>
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
								</td>
							</tr>
							{/* row 2 */}
							<tr>
								<th>2</th>
								<td>Problem Solving (Basic)</td>
								<td>07 July, 2023</td>
								<td>See</td>
							</tr>
							<tr>
								<th>2</th>
								<td>Problem Solving (Basic)</td>
								<td>07 July, 2023</td>
								<td>See</td>
							</tr>
							<tr>
								<th>2</th>
								<td>Problem Solving (Basic)</td>
								<td>07 July, 2023</td>
								<td>See</td>
							</tr>
							<tr>
								<th>2</th>
								<td>Problem Solving (Basic)</td>
								<td>07 July, 2023</td>
								<td>See</td>
							</tr>
							<tr>
								<th>2</th>
								<td>Problem Solving (Basic)</td>
								<td>07 July, 2023</td>
								<td>See</td>
							</tr>
							<tr>
								<th>2</th>
								<td>Problem Solving (Basic)</td>
								<td>07 July, 2023</td>
								<td>See</td>
							</tr>
							<tr>
								<th>2</th>
								<td>Problem Solving (Basic)</td>
								<td>07 July, 2023</td>
								<td>See</td>
							</tr>
							<tr>
								<th>2</th>
								<td>Problem Solving (Basic)</td>
								<td>07 July, 2023</td>
								<td>See</td>
							</tr>
							<tr>
								<th>2</th>
								<td>Problem Solving (Basic)</td>
								<td>07 July, 2023</td>
								<td>See</td>
							</tr>
							<tr>
								<th>2</th>
								<td>Problem Solving (Basic)</td>
								<td>07 July, 2023</td>
								<td>See</td>
							</tr>
							<tr>
								<th>2</th>
								<td>Problem Solving (Basic)</td>
								<td>07 July, 2023</td>
								<td>See</td>
							</tr>
							<tr>
								<th>2</th>
								<td>Problem Solving (Basic)</td>
								<td>07 July, 2023</td>
								<td>See</td>
							</tr>
							<tr>
								<th>2</th>
								<td>Problem Solving (Basic)</td>
								<td>07 July, 2023</td>
								<td>See</td>
							</tr>
							<tr>
								<th>2</th>
								<td>Problem Solving (Basic)</td>
								<td>07 July, 2023</td>
								<td>See</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
