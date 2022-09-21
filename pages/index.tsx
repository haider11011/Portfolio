import React, { useState } from "react";
import { About } from "../components/About";
import { Courses } from "../components/Courses";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";

function Index() {
	const [section, setSection] = useState("about");
	return (
		<div className="h-max min-h-screen w-3/5 mx-auto border-2 border-black">
			<div className="p-5">
				<h1 className="font-bold text-5xl mb-8">Haider Ali Lokhand</h1>
				<ul className="flex justify-start gap-40">
					<li
						onClick={() => setSection("about")}
						className="cursor-pointer text-xl underline"
					>
						About
					</li>
					<li
						onClick={() => setSection("experience")}
						className="cursor-pointer text-xl underline"
					>
						Experience
					</li>
					{/* <li onClick={() => setSection("projects")}>Projects</li> */}
					<li
						onClick={() => setSection("courses")}
						className="cursor-pointer text-xl underline"
					>
						Courses
					</li>
				</ul>

				{section === "about" && <About />}
				{section === "experience" && <Experience />}
				{section === "projects" && <Projects />}
				{section === "courses" && <Courses />}
			</div>
		</div>
	);
}

export default Index;
