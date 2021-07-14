import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import AddIcon from "@material-ui/icons/Add";
import { Hidden } from "@material-ui/core";

function CreateArea(props) {
    const [isExpanded, setExpanded] = useState(false);

    const show = () => {
        setExpanded(true);
    };

    const hide = () => {
        setExpanded(false);
    };

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value,
            };
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: "",
        });
        event.preventDefault();
    }

    return (
        <div>
            <form className="create-note">
                <input
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder="Title"
                    style={{ display: isExpanded ? "block" : "none" }}
                />
                <textarea
                    name="content"
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note..."
                    rows={isExpanded ? 3 : 1}
                    onClick={show}
                />
                <Zoom in={isExpanded ? true : false}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
