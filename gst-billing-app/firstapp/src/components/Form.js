import React,{useState} from 'react';
import { signUp } from "../service/auth";
import { useNavigate } from 'react-router-dom';
// import Navbar from './Navbar';

export default function Form(props){
  const navigate = useNavigate();

  const [text1css, setText1css] = useState("red");   
  const [text2css, setText2css] = useState("red"); 
  const [text3css, setText3css] = useState("red"); 
  const [text4css, setText4css] = useState("red"); 
  const [text5css, setText5css] = useState(""); 
  const [text6css, setText6css] = useState("green"); 
  const [hideText, setHideText] = useState(""); 
  const [isDisabled, setIsDisabled] = useState(true);
  const [verifyEmail, setVerifyEmail] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [city, setCity] = useState("");
  const onChange = (event, type) => {
    switch (type) {
      case "name":
        setName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      case "phoneNo":
        setPhoneNo(event.target.value);
        break;
      case "city":
        setCity(event.target.value);
        break;
    }
  };

const emailvalid=()=> {
  // let emailvalue = String(email.target.value);
  let evalue = false;
  if(email.includes("@gmail.com")){
     evalue = true;  
  }
  if(evalue){
     setVerifyEmail("");
  }
  else{
     setVerifyEmail("You can not login with this email, Your email must contain @gmail.com")
  }
}

const passvalid=()=>{
  // let password = String(pass.target.value);
  let splitarr = password.split("");
  let capital = false;
  let number = false;
  let unique = false;
  let includes = false;
  if(password.length <8){
      setText1css("red");
  }
  else{
      setText1css("green");
  }
  
  for(let i=0; i<password.length; i++){
    // if(password.charCodeAt(i) >= 65 && password.charCodeAt(i)<=90){
    if(password.match(/[A-Z]/g)){
        capital=true;
    }
  }
if(capital){
    setText4css("green");
}
else{
    setText4css("red");
}
for(let k=0; k<password.length; k++){
    // if(password.charCodeAt(k) >= 49 && password.charCodeAt(k)<=57){
    if(password.match(/[0-9]/g)){
        number = true;
    }
}
if(number){
    setText2css("green");
}
else{
    setText2css("red");
}
// let uniqueArr = ["@", "#", "$", "%", "&", "!"];
for(let h =0; h<password.length; h++){
    // if(splitarr.includes(uniqueArr[h])){
    //     unique = true;
    // }
    if((password.charCodeAt(h) >= 33 && password.charCodeAt(h)<=47) || (password.charCodeAt(h) >=58 && password.charCodeAt(h) <= 64)){
      unique = true;
    }
    }  
    if(unique){
        setText3css("green");
    }
    else{
        setText3css("red");
    }

let nameArr = name.split("");
nameArr.push(nameArr.join(''), name);
for(let i =0; i<nameArr.length; i++){
    if(splitarr.includes(nameArr[i])){
      includes = true;
    }
    if(includes){
      setHideText("You can not include your name in password.");
      setText5css("red");
    }
    else{
      setHideText("");
    }
}
if(password.length >=8 && unique && number && capital){
  setIsDisabled(false);
}
else{
  setIsDisabled(true);
}
}

const onSignUp = async (e) => {
  e.preventDefault();
  // const emailValid = emailvalid();
  // const passValid = passvalid();

  // if (emailValid && passValid) {
    const userData = {
      name,
      email,
      password,
      phoneNo,
      city
    };
    console.log(userData);
    const res = await signUp(userData);
    console.log(">>>>>>>>>>>>>>>>>>>>>>res", res);
    if (res.data.success) {
      alert(res.data.message);
      navigate("/login");
    } else {
      alert(res.data.message ?? "Something went wrong.");
    }
  // }
};

    return (
    <div className="container mt-5">
      { <h2 className='my-3'>{props.heading}</h2> }
        <form className="container"  onSubmit={onSignUp}>
            <div className="mb-3">
                <label htmlFor="exampleInputName1"  className="form-label">Name{props.name}</label>
                <input type="text" placeholder='John Doe' className="form-control" value={name} onChange={(event) => onChange(event, "name")}/>
              </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmaipassword" className="form-label">Email address</label>
              <input onKeyDown={emailvalid} placeholder='jd123@gmail.com'  type="email" className="form-control" value={email} onChange={(event) => onChange(event, "email")} aria-describedby="emailHelp"/>
              <div className={`form-text ${text1css}`}><strong>{verifyEmail}</strong></div>
              <div id="emailHelp" className={`form-text ${text6css}`}>We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1"  className="form-label">Password</label>
              <input onKeyUp={passvalid} placeholder='........' type="password" className="form-control" value={password} onChange={(event) => onChange(event, "password")}/>
              <span  id="passwordHelpInline1" className={`form-text ${text1css}`}>
                Must be 8-20 characters long.
              </span>
              <span id="passwordHelpInline2" className={`form-text ${text2css}`}>
                Must have a numeric value.
              </span>
              <span id="passwordHelpInline3" className={`form-text ${text3css}`}>
                Must have a unique character.
              </span>
              <span id="passwordHelpInline4" className={`form-text ${text4css}`}>
                Must have a UpperCase Letter.
              </span>
              <div className={`form-text ${text5css}`}><strong>{hideText}</strong></div>
              
            </div>
            <div className="mb-3">
                <label htmlFor="Phone" className="form-label">Phone</label>
                <input type="number" placeholder='90XXXXXXXX'  className="form-control" value={phoneNo} onChange={(event) => onChange(event, "phoneNo")}/>
              </div>
              <div className="mb-3">
                <label htmlFor="City" className="form-label">City</label>
                <input type="text" placeholder='Delhi'  className="form-control" value={city} onChange={(event) => onChange(event, "city")}/>
              </div>
            <button type="submit" onClick={onSignUp} disabled={isDisabled} id="btn" className="btn btn-primary">Submit</button>
          </form>
    </div>
  )

};


// Form.propTypes = {name: PropTypes.string,
//                   city: PropTypes.string.isRequired} 
                  
// Form.defaultProps = {
//   name: 'Your',
//   city: 'Your'
// }                  