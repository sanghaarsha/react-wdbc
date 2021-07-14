import React, { useState } from "react";

function CreateArea(props) {
    const [newNote, setNewNote] = useState({
        title: "",
        content: "",
    });

    const changeHandler = (e) => {
        const title = e.target.name;
        const content = e.target.value;
        setNewNote((prevState) => ({
            ...prevState,
            [title]: content,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        props.addNote(newNote);
        setNewNote({
            title: "",
            content: "",
        });
    };

    return (
        <div>
            <form>
                <input
                    name="title"
                    placeholder="Title"
                    onChange={changeHandler}
                    value={newNote.title}
                />
                <textarea
                    name="content"
                    placeholder="Take a note..."
                    rows="3"
                    onChange={changeHandler}
                    value={newNote.content}
                />
                <button onClick={submitHandler}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
