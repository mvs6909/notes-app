//React App
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notesData from "../notesData";

function createNote(note){
    return (
        <Note 
        title={note.title}
        content = {note.content}
        />
    )
}

function App(){
    return (<div>
        <Header />
        {notesData.map(createNote)}
        <Footer />
    </div>)
}

export default App;
