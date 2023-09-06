import { useState } from 'preact/hooks'
import axios from 'axios';
import './app.css'

export function App() {

  const [formData, setFormData] = useState({
    username:'',
    password:''
  });

  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post("https://server-w4y4.onrender.com/api/users", formData)
      .then((result)=>{
        console.log(result);
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  const handleGet = (e)=>{
    e.preventDefault()
    axios.get("https://server-w4y4.onrender.com/api/users")
      .then((result)=>{
        console.log(result.data);
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  return (
    <>
      <form action="postData" method="">
          <input type="text" name="" id="" placeholder='username' onChange={(e)=>{formData.username=e.target.value;}} required/>
          <input type="password" name="" id="" placeholder='password' onChange={(e)=>{formData.password=e.target.value;}} required/>
          <input type="submit" value="" onClick={handleSubmit}/>
      </form>
      <button onClick={handleGet}>get</button>
    </>
  )
}
