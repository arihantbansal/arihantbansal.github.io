import React from "react";
import Particles from "react-tsparticles";
import "./App.css";
import particlesOptions from "./particles.json";
import Typical from "react-typical";
import {
	FaFacebookF,
	FaLinkedin,
	FaGithub,
	FaQuora,
	FaMediumM,
	FaRegEnvelope,
} from "react-icons/fa";

const App = () => {
	return (
		<div className="App">
			<Particles options={particlesOptions} />
			<header className="App-header">
				<h1>Hello, I am Arihant!</h1>
				<h3>
					I &#128153; {/*solving problems. */}
					<Typical
						loop={Infinity}
						steps={["solving problems", 1000, "making new things", 1000]}
					/>
				</h3>
				<div className="icons">
					<span className="box">
						<a className="dix">
							<FaFacebookF />
						</a>
					</span>
					<span className="box">
						<a className="dix">
							<FaLinkedin />
						</a>
					</span>
					<span className="box">
						<a className="dix">
							<FaGithub />
						</a>
					</span>
					<span className="box">
						<a className="dix">
							<FaQuora />
						</a>
					</span>
					<span className="box">
						<a className="dix">
							<FaMediumM />
						</a>
					</span>
					<span className="box">
						<a className="dix">
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
//       whether it's about code, design, math,
//       coffee, sleeping, or anything in between.
