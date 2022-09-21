import React from "react";
import Image from "next/image";

export function About() {
	return (
		<div className="">
			<div className="mt-10">
				<Image
					src={"/dp.jpg"}
					width={500}
					height={300}
					layout="intrinsic"
					objectFit="contain"
				/>
			</div>
			<p className="mt-5 w-4/5">
				Hi! I am Haider Ali Lokhand, a student from Banswara, Rajasthan
				currently pursuing and looking for opportunities in the field of
				Machine Learning/ Deep Learning.
			</p>
		</div>
	);
}
