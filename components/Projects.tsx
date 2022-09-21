import React from "react";

export function Projects() {
	return (
		<div className="mt-10 ml-4">
			<li>
				<p>
					<span className="italic font-semibold">
						3D Printed Modular Microfluidics
					</span>{" "}
					-<span className="">NTU Singapore</span>
				</p>
			</li>
			<li className="mt-2">
				<p>
					<span className="italic font-semibold">
						Conventional and unconventional machining
					</span>{" "}
					-<span className="">Safetech Engineering works</span>
				</p>
				<p className="text-md mt-2 mb-2">
					We designed and developed a 3D-printed Modular 'Magnetic
					Digital Microfluidics' (MDM) Architecture apt to perform
					point-of-care diagnostics by on-demand customisation for
					various categories of diagnostic assays. Analysed the
					working of the system using MATLAB Histograms. It is
					published in the Microsystems and Nanoengineering Journal.
				</p>
				<span className="">
					Paper -{" "}
					<a
						href="https://www.nature.com/articles/s41378-020-0152-4"
						target="_blank"
						className="underline"
					>
						A 3D-printed modular magnetic digital microfluidic
						architecture for on-demand bioanalysis
					</a>
				</span>
			</li>
		</div>
	);
}
