import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { loginAction } from "../redux/actions/authAction";
import { login } from "../service/auth";

  const Login = (props)=>{
    const dispatch = useDispatch();
    const [pass, setPass] = useState("");
    const [mail, setMail] = useState("");
    const [passError, setPassError] = useState("");
  
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (event, type)=>{
    switch(type){
       case "mail":
        setMail(event.target.value);
        break;
      case "pass":
        setPass(event.target.value);
        break;
    }
  };

  const validate = () => {
    let valid = true;
    if (pass.length < 8) {
      valid = false;
      setPassError("Password must be at least 8 character.");
    } else if (pass.length > 16) {
      valid = false;
      setPassError("Password can not be more then 16 character.");
    } else setPassError("");
     return valid;
  };
  const onLogin = async (e) => {
    e.preventDefault();

    const isValid = validate();
    if (isValid) {
      // setLoading(true);

      const data = {
       email : mail,
       password: pass,
      };
      const res = await login(data);

      console.log(">>>>>>>>>>>>>>>>>>>>>>login res", res);
      if (res.data.success) {
        alert(res.data.message);
        localStorage.setItem("authData", JSON.stringify(res?.data?.data));
        localStorage.setItem("token", JSON.stringify(res.data?.data?.token));
        dispatch(loginAction(res.data.data));

        navigate("/dashboard");
      } else {
        alert(res.data.message ?? "Something went wrong");
      }
      // setLoading(false);
    }
  };

  return (
    <>
    <div className='container'>
      {<h2 className='my-3'>{props.heading}</h2>}
      <form onSubmit={onLogin}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" value={mail} required onChange={(event)=> onChange(event, "mail")} id="Email1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" value={pass} required onChange={(event)=> onChange(event, "pass")} id="Password1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
    </>
  )
};

export default Login;