import React from "react";

export const ListView = ({ users }) => {
    return (
        <ul className="collection">
        {users.map(user => {
            const { name, picture, email, dob } = user;
            return (
                <li className="collection-item avatar" >
                <img src={picture.thumbnail} alt="" className="circle" />
                <span className="title">{name.first}</span>
                <p>{email}</p>
                <p>{dob.date}</p>
                </li>
            )
        })}
        </ul>
    )
};