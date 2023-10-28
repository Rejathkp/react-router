import React, { useContext, useState } from 'react'
import { Button, Form} from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { NewwContext } from '../App3'
import "./Edit.css"


function EditForm() {
const [student, setStudent] = useContext (NewwContext)
const {user} = useParams ()
console.log(user);
const navigate=useNavigate()
console.log("id: ",user)
const editdata=student[user]
console.log("val: ", editdata)
const [input, setInput] =useState({

  name: editdata.name,
  course:editdata.course,
  age:editdata.course,
})

const handlechange = (e) => {
  console.log(input);
  setInput({...input,[e.target.name]:e.target.value})
};

console.log(input);
const submit = (sub) => {
  sub.preventDefault();
  setInput(student[user]=input)
  navigate("/table")
  console.log("newdata :",input);
}
return(
  <div>
    <Form className='form' onSubmit={submit}>
      <h1 className='heading'>Edit page</h1>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder={editdata.name} onChange={handlechange} name="name"/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Course</Form.Label>
        <Form.Control type="" placeholder={editdata.course} onChange={handlechange} name="course"/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Age</Form.Label>
        <Form.Control type="" placeholder={editdata.age} onChange={handlechange} name="age"/>
      </Form.Group>

      <div className='text-center'>
      <Button variant="primary" type="submit">
        Edit
      </Button>
      </div>
    </Form>
  </div>
)
}
export default EditForm
