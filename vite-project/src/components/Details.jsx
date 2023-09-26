import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";
const Detail = (props) => {
    const [author, setAuthor] = useState({})
    const {id} = useParams(); 
    useEffect(() => {
        axios.get("http://localhost:8000/api/author/" + id)
            .then( res => {
                console.log(res.data);
                setAuthor(res.data);
            })
            .catch( err => console.log(err) );
    }, []);
    return (
        <div>
            <p>Name: {author.name}</p>
        </div>
    );
}
export default Detail;