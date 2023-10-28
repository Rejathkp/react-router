import React, {  useContext } from 'react';
import { useParams } from 'react-router-dom';
import {NewwContext} from '../App3'
import "./Table.css"

  function Viewform() {
    const [student, setStudent] =useContext (NewwContext)
    console.log(student)
    const {user} = useParams ()
    console.log(user)
    const viewdata =student[user]
    return (
    <div>
        <h2> {viewdata.name} </h2>
        <h2> {viewdata.course} </h2>
        <h2> {viewdata.age}</h2>
    </div>
    )
}

export default Viewform;