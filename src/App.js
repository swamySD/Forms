import React,{useState} from 'react'
import FormInput from './components/Forms/FormInput'
import classes from './App.module.css'
const App = () => {

const [userDetails,setUserDetails]=useState({
  username:'',
  email:'',
  birthday:'',
  password:'',
  confirmpassword:''
})

const inputs=[
  {
    id:1,
    name:'username',
    type:'text',
    placeholder:'username',
    errorMessage:'Username should be 3-16 characters and shouldnot include any special charcter!',
    label:'username',
    pattern:'^[A-Za-z0-9]{3,16}$',
    required:true,
  },
  {
    id:2,
    name:'email',
    type:'email',
    placeholder:'Email',
    errorMessage:'It should be valid email address',
    label:'Email',
    required:true,
  },
  {
    id:3,
    name:'birthday',
    type:'date',
    placeholder:'birthday',
    errorMessage:'',
    pattern:'',
    label:'birthday'
  },
  {
    id:4,
    name:'password',
    type:'password',
    placeholder:'password',
    errorMessage:'password should be 8- charcters and includes at least 1 letter,1 number and 1 special charcter',
    label:'password',
    pattern:`^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$`,
    required:true,
  }, {
    id:5,
    name:'confirmpassword',
    type:'password',
    placeholder:'confirm   password',
    errorMessage:'password donot match',
    label:'confirm  password',
    pattern:userDetails.password,
    required:true,
  }
]
  

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(userDetails)
   }

   const onChange=(e)=>{
    setUserDetails({...userDetails,[e.target.name]:e.target.value})
    
   }


  return (
    <div className={classes.app}>

      <form onSubmit={handleSubmit} className={classes.form}>
        <h1 className={classes.title}>Register</h1>
        {inputs.map((eachInput)=>(

        <FormInput key={eachInput.id} 
        {...eachInput} 
         value={userDetails[eachInput.name]}
         onChange={onChange}/>
        
        ))}
       <button className={classes.button}>Submit</button>
      </form>
    </div>
  )
}

export default App