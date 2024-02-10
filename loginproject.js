import React,{useState} from 'react'

const App = () => {
  const[data,setData]=useState({
    username:'',
    email:'',
    password :'',
    confirmpassword:''
  })
  const{username,email,password,confirmpassword}=data;
  const changeHandler=e=>{
     setData({...data,[e.target.name]:[e.target.value]})
  }

  const submitHandler=e=>{
    e.preventDefault();
    if(username.length>=5){
      alert("username must be length upto 5");
    }
    else if (password===confirmpassword){
      alert("password and confirmpassword must be same");
    }else{
       alert("name: " + username);
       alert("dob: 8 sep 2002");
       alert("contact: 9014179389");
    }
  }
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
        <input type='text' name='username' value={username} onChange={changeHandler} placeholder="username"
/> <br/>
        <input type='email' name='email' value={email} onChange={changeHandler} placeholder="email"/><br/>
        <input type='password' name='password' value={password} onChange={changeHandler} placeholder="password"/> <br/>
        <input type='password' name='confirmpassword' value={confirmpassword} onChange={changeHandler} placeholder="confirmpassword"/><br/>
        <input type='submit' name='submit'/>
        </form>
      </center>
     
    </div>
  )
}

export default App