import { useState } from 'react';
import './LoginForm.css'
export default function LoginForm(){

    let [formData, setformData] = useState(
        {
          username:"",
          password:""
        }
      )
    
      let handlingChange = (event) => {
        event.preventDefault();
        let fieldName = event.target.name;
        let fieldValue = event.target.value;
        
        setformData((currData) => {
        
           return {...currData, [fieldName] : fieldValue}
    
        })
      }
    
      let  handlingSubmit = (event) => {
          event.preventDefault();  
          console.log(formData) 
          setformData(
            {
              fullname:"",
              username:"",
              password:""
            }
          )   
      }
    
    return(
        <>
            <div className='LoginForm'>
                <h2>Login</h2>
                <form action="" onSubmit={handlingSubmit}>
                    <label htmlFor="username">Username</label> <br />
                    <input type="text" id = "username" name='username' placeholder='username' value={formData.username} onChange={handlingChange} required />  <br /> <br />

                    <label htmlFor="password">Password</label> <br />
                    <input type="password" id = "password" name='password' placeholder='password' value={formData.password} onChange={handlingChange} required/>  <br /> <br />


                    <button>submit</button>
                </form>
            </div>
        </>
    )
}