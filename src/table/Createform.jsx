import React from 'react'
import { useContext , useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NewwContext } from '../App3'
import { Form , Button} from 'react-bootstrap'
import "./Edit.css"

function Createform() {
  const navigate= useNavigate()
  const [student,setStudent] = useContext(NewwContext)
  console.log(student);
  const [input, setInput] = useState({
    name:"" ,
    course:"" ,
    age:"" ,
  })

  const handleChange = (e) => {
    setInput({...input,[e.target.name]:e.target.value})
  };
  console.log(input);

  const Submit = (sub) => {
    console.log(student);
    sub.preventDefault();
    const New= [...student,input]
    setStudent(New)
    navigate(-1)
  }

  return (
    <div>
      <Form className='form' onSubmit={Submit}>
      <h1 className='heading'>Add Details</h1>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="" onChange={handleChange} name="name"/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Course</Form.Label>
        <Form.Control type="" placeholder="" onChange={handleChange} name="course"/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Age</Form.Label>
        <Form.Control type="" placeholder="" onChange={handleChange} name="age"/>
      </Form.Group>

      <div className='text-center'>
      <Button variant="primary" type="submit" className='center'>
        Add
      </Button>
      </div>
    </Form>
    </div>
  )
}

export default Createform