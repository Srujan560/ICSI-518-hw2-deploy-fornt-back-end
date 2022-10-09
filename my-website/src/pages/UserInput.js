import React, {useState,useEffect}from 'react'
import {Form, Button} from "react-bootstrap"
import Axios from 'axios'

export default function UserInput() {
    const [UserFirst,setUserFirst]= useState("")
    const [UserLast,setUserlast]= useState("")
    const [UserNumber,setUserNumber]= useState(0)
    const [UserNumber2,setUserNumber2]= useState(0)
    const [listofUsers,setListofUsers]=useState([]);
    const [showForm, setform]=useState(false)
    const [past,showpast]=useState(false)
    const [add,justAdd]=useState(false)

    
    const addUser = ()=>{
        Axios.post("http://localhost:3001/create",{
            UserFirst:UserFirst,
            UserLast:UserLast,
            UserNumber:UserNumber, 
            UserNumber2:UserNumber2}).then(()=>{
                console.log("Fail to add new User") })
                console.log("Was able to add new user")
                justAdd(true)
                
    }
    useEffect(()=>{
        Axios.get("http://localhost:3001/users").then((response)=> {
            setListofUsers(response.data)
        }
    )
    },[])

   function see(){
    window.location.reload(false);
   }
    
  return (
    <div class="d-flex flex-column" >
        <Button onClick={()=>{
            setform(!showForm); 
            // if (past){showpast(flase);}
        }} variant="secondary outline-danger">{!showForm?<p>Show Form</p> : <p>hide form</p>}</Button>
        <Button onClick={()=>{
            showpast(!past)
        }} variant="success outline-dark">{!past?<p>Show history of form</p>:<p>hide output</p>}</Button>
        {showForm?
        <div className="w-50 p-2 border border-primary rounded d-flex justify-content-center align-self-md-center d-flex flex-column" >
            {/* <span class="border border-primary">  </span>*/}
            
            <Form width="30px">
                <Form.Group className='mb-3'>
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" placeholder='Your first name' value={UserFirst} 
                    onChange={(e)=>{e.preventDefault();
                    setUserFirst(e.target.value)}}/>
                </Form.Group>
                

                <Form.Group className='mb-3'>
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" placeholder='Your last name' value={UserLast} 
                    onChange={(e)=>{e.preventDefault();
                    setUserlast(e.target.value)}}/>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Number 1</Form.Label>
                    <Form.Control type="number" placeholder='Enter your Number' value={UserNumber} 
                    onChange={(e)=>{e.preventDefault();
                    setUserNumber(e.target.value)}}/> 
                    
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Number 1</Form.Label>
                    <Form.Control type="number" placeholder='Enter your Number' value={UserNumber2} 
                    onChange={(e)=>{e.preventDefault();
                    setUserNumber2(e.target.value)}}/> 
                    
                </Form.Group>
                <Button onClick={addUser}>Save</Button>
                <p></p>
                {add?<span>Nice Just add the the name go head press the green button</span>:null}
            </Form>

        
        
            
            
            
        </div>:null}
        {/* <p class = "">{UserFirst} {}</p> */}
        {past?
        <div>
            <p></p>
            <span>Not able see your Data ! Do not worry Just Press Reload below</span>
            <Button onClick={see} variant="warning">Reload</Button>
            <p></p>
            {listofUsers.map((user)=>{
                
                // addNum(n1 =user.num1 )
                return(
                    <div className="w-100 p-2 border border-primary rounded d-flex justify-content-center align-self-md-center d-flex flex-column" >
                        <h2>First Name: {user.fname} & Last Name:{user.lname}</h2>
                        <h3>Number: {user.num1} & Number 2: {user.num2} and the sum is {user.num1+user.num2}</h3>
                    </div>
                )
            }
            )
                
             }
        </div>:null}
    </div>
    
  )
}
