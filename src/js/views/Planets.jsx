import React from "react";

export const Planets = () => {

    const handleErrorImg = (event) => {
		event.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
	}

    return (
        <div className="container text-center">
            <h1 className="text-pr">Planets</h1>
            <p>
				<img onError={handleErrorImg}
					src={"https://starwars-visualguide.com/assets/img/planets/3.jpg"} />
			</p>
        </div>
    )
}