import React, { useState } from "react";

// This component simulates a traffic light with three lights: red, yellow, and green.
export function Home() {
	// The selectedColor state holds the current active light color.
	const [selectedColor, setSelectedColor] = useState("yellow");

	// The render function returns JSX with three divs representing the lights.
	return (
		<div className="traffic-light">

			<div
				onClick={() => setSelectedColor("red")}
				className={
					"light red" + (selectedColor === "red" ? " glow" : "")
				}></div>

			<div
				onClick={() => setSelectedColor("yellow")}
				className={
					"light yellow" + (selectedColor === "yellow" ? " glow" : "")
				}></div>

			<div
				onClick={() => setSelectedColor('green')}
				className={
					"light green" + (selectedColor === "green" ? " glow" : "")
				}></div>

		</div>
	);
}