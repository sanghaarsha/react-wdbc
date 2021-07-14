import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = useState([]);

    const createNote = (newNote) => {
        setNotes((prevState) => [...prevState, newNote]);
    };

    const deleteNote = (id) => {
        setNotes(notes.filter((items, index) => index !== id));
    };

    return (
        <div>
            <Header />
            <CreateArea addNote={createNote} />
            {notes.map((item, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={item.title}
                        content={item.content}
                        deleteNote={deleteNote}
                    />
                );
            })}
            <Footer />
        </div>
    );
}

export default App;
