import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
const Edit = (props) => {
    const { id } = useParams();
    const [name, setName] = useState();
    const navigate = useNavigate();
    // retrieve the current values for this person so we can fill
    // in the form with what is in the db currently
    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setTitle(res.data.name);
            })
            .catch(err => console.log(err))
    }, [])
    const updatePerson = (e) => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/author/' + id, {
            name
        })
            .then(res => {
                console.log(res);
                navigate("/author"); // this will take us back to the Main.js
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>Update an Author</h1>
            <form onSubmit={updatePerson}>
                <p>
                    <label>Name</label><br />
                    <input type="text"
                        name="name"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }} />
                </p>

                <input type="submit" />
            </form>
        </div>
    )
}
export default Edit;

