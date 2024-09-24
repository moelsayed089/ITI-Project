import axios from "axios"
import { useContext, useState } from "react"
import { useFormik } from 'formik';
import { loginValidation } from "../validation";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
// import toast from "react-hot-toast";
function Login() {
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()
 const {setUser} = useContext(AuthContext)

  const loginUser = async (values) => {
    setIsLoading(true)
    try {
      const response = await axios.post('http://localhost:5000/user', values);
      const {data} = response;
      const userWithoutPassword = {...data, password: undefined}
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      setUser(userWithoutPassword)
      
      setTimeout(() => {
        // toast.success('Successfully logged in!')
        navigate('/')
      }, 1000)

      return data;
    } catch (err) {
      console.log(err);
      const {response} = err;
      if (response && response.data) {
        const {message} = response.data;
        return {message};
      }
    } finally {
      setIsLoading(false)
    }

  };


  const objectForm = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: ""
    },
    onSubmit: loginUser,
    validate: loginValidation
  })
  return (
    <>
      
    <div className="container d-flex justify-content-center align-items-center mb-4" style={{height:"100vh"}}> 
      
          <div className="row align-items-center " >
          <div className="col-md-6 ">
            <img src="https://images.unsplash.com/photo-1601598852806-524f0060508e?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="img-fluid W-100 rounded-4 shadow-sm " loading="lazy" alt=" " />
            </div>

            <div className="col-md-6 ">
            <h4 className="text-center my-4">Sign in to your account ❤❤</h4>
              <form onSubmit={objectForm.handleSubmit}>

              <div className="mb-3">
                <label htmlFor="username" className="form-label">UserName</label>
                <input onBlur={objectForm.handleBlur} type="text" onChange={objectForm.handleChange} name="username" value={objectForm.values.username} 
                className="form-control shadow-none " id="username"  />
                {objectForm.errors.username && objectForm.touched.username ? <div className="text-danger fw-medium mt-2">{objectForm.errors.username}</div> : null}
              </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                <input onBlur={objectForm.handleBlur} type="email" onChange={objectForm.handleChange} name="email" value={objectForm.values.email} className="form-control shadow-none" id="email"  />
                {objectForm.errors.email && objectForm.touched.email ? <div className="text-danger fw-medium mt-2">{objectForm.errors.email}</div> : null}
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                <input onBlur={objectForm.handleBlur} type="password" onChange={objectForm.handleChange} name="password" value={objectForm.values.password} className="form-control shadow-none" id="password" />
                {objectForm.errors.password && objectForm.touched.password ? <div className="text-danger fw-medium mt-2">{objectForm.errors.password}</div> : null}
                </div>
              
              <button type="submit" className="btn btn-primary py-2 px-5" >{isLoading ? "Loading..." : "Login"}</button>
              </form>
            </div>

          </div>
      </div>
      

    
    </>
  )
}

export default Login