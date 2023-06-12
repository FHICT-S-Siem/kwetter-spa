import React, { Component, useState ,useEffect} from 'react'
import "./LeftSide.css" 
import {  Button } from '@mui/material';
import { CSVLink } from "react-csv";


export default function  LeftSide()  {   
    const [kweets, setKweets] = useState([])
    
    const deleteKweets = async () => {
        console.log("delete")
        fetch('http://localhost:8080/api/v1/kweet', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    
    useEffect(() => {
        getKweets()
    }, [])
    const getKweets = async () => {
        fetch('http://localhost:8080/api/v1/kweet', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setKweets(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }
    return ( 
        <div className="oseirgj">

            <Button variant='outlined'>
                <CSVLink style={{textDecoration: 'none'}} data={kweets}>Download user data</CSVLink>
            </Button>
            <br/>
            <br/>
            <Button variant='outlined' color='error' onClick= {deleteKweets}>Delete user data</Button>
        </div>
        );
}