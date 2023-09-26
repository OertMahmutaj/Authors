import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const AuthorsList = (props) => {

    const { removeFromDom, author, setAuthor } = props;
    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/author")
            .then((res) => {
                console.log(res.data);
                setAuthor(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            {
                author.sort((a, b) => a.name.localeCompare(b.name)).map((author, index) => {
                    return (
                      <div key={index}>
                            {/* <p>{author.name}</p> */}
                            <Link to={`/author/${author._id}`}> {author.name}</Link>
                            <Link to={"/author/" + author._id}>
                                Edit 
                            </Link>
                            <button onClick={(e)=>{deleteAuthor(author._id)}}>
                            Delete
                        </button>
                        </div>
                    )
                })
            }
        </div>
    );
}
export default AuthorsList;

  

