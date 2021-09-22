import React from "react";
import Particles from "react-tsparticles";
import "./App.css";
import particlesOptions from "./particles.json";
import Typical from "react-typical";
import { FaLinkedin, FaGithub, FaTwitter, FaRegEnvelope } from "react-icons/fa";
import me from "./arihant.jpg";

const App = () => {
	return (
		<div className="App">
			<Particles id="tsparticles" options={particlesOptions} />
			<header className="App-header">
				<img src={me} className="App-logo" alt="logo" />
				<h1>Hello, I am Arihant!</h1>
				<h3>
					I &#128153;{" "}
					<Typical
						loop={Infinity}
						wrapper="span"
						steps={[
							"solving problems",
							1000,
							"building stuff",
							1000,
							"to learn",
							1000,
						]}
					/>
				</h3>
				<div className="icons">
					<span className="box">
						<a
							className="dix"
							href="https://www.github.com/arihantbansal"
							target="_blank"
							rel="noreferrer"
							aria-hidden={true}>
							<FaGithub className="icon" />
						</a>
					</span>
					<span className="box">
						<a
							className="dix"
							href="https://www.linkedin.com/in/arihantbansal/"
							target="_blank"
							rel="noreferrer"
							aria-hidden={true}>
							<FaLinkedin />
						</a>
					</span>
					<span className="box">
						<a
							className="dix"
							href="https://twitter.com/_arihantbansal"
							target="_blank"
							rel="noreferrer"
							aria-hidden={true}>
							<FaTwitter />
						</a>
					</span>
					<span className="box">
						<a
							className="dix"
							href="mailto:arihant.bansal@gmail.com"
							target="_blank"
							rel="noreferrer"
							aria-hidden={true}>
							<FaRegEnvelope />
						</a>
					</span>
				</div>
				<p></p>
			</header>
		</div>
	);
};

export default App;

//        _   _              _   _                   _
//       | | | | ___ _   _  | |_| |__   ___ _ __ ___| |
//       | |_| |/ _ \ | | | | __| '_ \ / _ \ '__/ _ \ |
//       |  _  |  __/ |_| | | |_| | | |  __/ | |  __/_|
//       |_| |_|\___|\__, |  \__|_| |_|\___|_|  \___(_)
//                   |___/

//       Lookin' at the source code huh?
//       Be sure to drop me a line! I'd love to chat,
//       whether it's about code, math,
//       history of rome, or anything in between.
