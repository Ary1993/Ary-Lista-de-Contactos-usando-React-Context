import React from "react";

export const Characters = () => {

    const handleErrorImg = (event) => {
        event.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
    }

    return (
        <div className="container text-center">
            <h1 className="text-pr">Characters</h1>
            <p>
                <img onError={handleErrorImg}
                    src={"https://starwars-visualguide.com/assets/img/characters/3.jpg"} />
            </p>
        </div>
    )
}