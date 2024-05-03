import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { supabase } from '../Auth/supabaseConfig';


function Note() {
    const [userId, setUserId] = useState(null);
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    
    async function handleSubmit(event) {
        event.preventDefault();
        await handleAdd(title, body);
        setTitle("");
        setBody("");
    }

    useEffect(() => {
        async function fetchData() {
            try {
                await fetchNotes();
                const user = await supabase.auth.getUser();
                setUserId(user.data.user.id);
            } catch (error) {
                console.error('Error fetching user data:', error.message);
            }
        }  
        fetchData();
    }, []);

    async function fetchNotes() {
        try {
            const { data, error } = await supabase
                .from('Notes')
                .select('*')
                .order('created_at', { ascending: false });
            
            if (error) {
                throw error;
            }
            setNotes(data);
        } catch (error) {
            console.error('Error fetching notes:', error.message);
        } 
    }

    async function handleAdd(title, noteText) {
        try {
            const { error } = await supabase
                .from('Notes')
                .insert({ title, body: noteText, user_id: userId });

            if (error) {
                throw error;
            }
            await fetchNotes();
        } catch (error) {
            console.error('Error adding note:', error.message);
        }
    }

    async function handleDelete(id) {
        try {
            const { error } = await supabase
                .from('Notes')
                .delete()
                .eq('id', id);

            if (error) {
                throw error;
            }
            await fetchNotes();
        } catch (error) {
            console.error('Error deleting note:', error.message);
        }
    }

    return (
        <>
            <Header />
            <form className="create-note" onSubmit={handleSubmit}>
                <input placeholder="Title" onChange={(event)=>setTitle(event.target.value)} value={title} />
                <textarea placeholder="Take a note..." onChange={(event)=>setBody(event.target.value)} value={body}></textarea>
                <button type="submit">+</button>
            </form>
            {notes.map((note, index) => (
                <div key={index} className="note">
                    <div className="noteHeader">
                        <h1>{note.title}</h1>
                        <button onClick={() => handleDelete(note.id)}>X</button>
                    </div>
                    <p>{note.body}</p>
                    
                </div>
            ))}
            <Footer />
        </>
    );
}

export default Note;
