import React, { Component, useContext, useEffect } from "react";

import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Contact = () => {
    
    const {store, actions}= useContext(Context)

    useEffect(()=>{
		actions.getAllContacts()
	},[]);

    console.log(store.contacts);
    return(        
    <>
        <div className="d-flex justify-content-end">
            <Link className="btn btn-success " to="/add-contact">Add new contact</Link>
        </div>

    {store.contacts.map((contact)=>{
        return (
            <div className="card mb-3" key={contact.id}>
            <div className="row g-0 text-black">
                <div className="col-3">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Unknown-person.gif" className="img-fluid rounded-circle p-2 m-3 mr-3" alt="..."/>
                </div>
                <div className="col-7">
                    <div className="card-body">
                        <h5 className="card-title">{contact.full_name}</h5>
                        <p className="card-text">{contact.address}</p>
                        <p className="card-text">{contact.phone}</p>
                        <p className="card-text">{contact.email}</p>
                    </div>
                </div>
                <div className="col-2 d-flex">
                    <div><i className="fa fa-pen p-2 m-3"/></div>
                    <div><i className="fa fa-trash p-2 m-3"/></div>
                </div>
            </div>
        </div>
        )
    })}

</>
    );
}