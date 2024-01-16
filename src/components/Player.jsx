import { useState } from "react";

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState("");

    function handleEditClick() {
        setIsEditing(!isEditing);
    }

    let playerName = (
        <span className="player-name">{inputValue || "Player Name"}</span>
    );

    if (isEditing) {
        playerName = (
            <input
                type="text"
                required
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        );
    }

    return (
        <li>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>
                {isEditing ? "Save" : "Edit"}
            </button>
        </li>
    );
}
