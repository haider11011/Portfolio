import React from "react";

export function Courses() {
	return (
		<div className="ml-4 mt-10 flex flex-col gap-4">
			<li>
				<a
					href="https://www.coursera.org/account/accomplishments/certificate/SNW3F8GY8FNQ"
					target="_blank"
				>
					<span className="italic font-semibold">
						Machine Learning
					</span>
					- Stanford University
				</a>
			</li>
			<li>
				<a
					href="https://www.coursera.org/account/accomplishments/certificate/3RBPF8BRDDZK"
					target="_blank"
				>
					<span className="italic font-semibold">
						Neural Networks and Deep Learning{" "}
					</span>
					- Deeplearning.ai
				</a>
			</li>
		</div>
	);
}
