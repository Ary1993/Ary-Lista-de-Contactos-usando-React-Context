import React from "react";

export const Starships = () => {

    const handleErrorImg = (event) => {
        event.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
    }

    return (
        <div className="container text-center">
            <h1 className="text-pr">Starships</h1>
            <p>
                <img onError={handleErrorImg}
                    src={"https://starwars-visualguide.com/assets/img/starships/5.jpg"} />
            </p>
        </div>
    )
}