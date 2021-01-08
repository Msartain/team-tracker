import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import './SignupForm.css'


const SignupForm = (props) => {

  // state = {
  //   name: '',
  //   email: '',
  //   password: '',
  //   passwordConf: ''
  // };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');

  const handleChange = (e) => {
    switch(e.target.name) {
      case 'name': 
        setName(e.target.value);
        break;
      case 'email': 
        setEmail(e.target.value);
        break;
      case 'password': 
        setPassword(e.target.value);
        break;
      case 'passwordConf': 
        setPasswordConf(e.target.value);
        break;
    }
    // props.updateMessage('');
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup({name, email, password, passwordConf});
      // Let <App> know a user has signed up!
      props.handleSignupOrLogin();
      // Successfully signed up - show GamePage
      props.history.push('/');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      props.updateMessage(err.message);
    }
  }

  const isFormInvalid = () => {
    return !(name && email && password === passwordConf);
  }

    return (
      <div>
        <header className="header-footer">Sign Up</header>
        <form className="form-horizontal" onSubmit={handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="Name" value={name} name="name" onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="email" className="form-control" placeholder="Email" value={email} name="email" onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Password" value={password} name="password" onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Confirm Password" value={passwordConf} name="passwordConf" onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-form btn-default">Sign Up</button>&nbsp;&nbsp;
              <Link to='/login' className="btn btn-form">Log In</Link>
              <Link to='/' className="btn btn-form">Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
}


export default SignupForm;
