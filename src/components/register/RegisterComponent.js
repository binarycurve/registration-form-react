import React, { Component } from "react";
import { isEmail } from "validator";
import {
  Form,
  Input,
  Label,
  FormGroup,
  FormFeedback,
  Button,
} from "reactstrap";
import HomePage from "../Pages/HomePage";

let entry=false;
class Register extends Component {
    
    getInitialState=()=>({
        data: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
          },
          errors:{}
      })
    state = this.getInitialState();
  
  handleChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        //bringing all the current data here..and setting the new data
        [e.target.name]: e.target.value,
      },
      errors:{
          ...this.state.errors,
          [e.target.name]:''
      }
    });
  };
  validate = () => {
    const { data } = this.state;
    let errors = {};

    if (data.firstName === "") errors.firstName = "First Name cannot be blank!";
    if (data.lastName === "") errors.lastName = "Last Name cannot be blank!";
    if (!isEmail(data.email)) errors.email = "Email must be valid!!";
    if (data.email === "") errors.email = "Email cannot be blank!";
    if (data.password === "") errors.password = "Password must be valid";
    if (data.confirmPassword !== data.password)
      errors.confirmPassword = "Passwords must match!!!";

    return errors;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { data } = this.state;
    const errors = this.validate();
    if (Object.keys(errors).length === 0) {
        
        const {firstName,lastName,email,password}=this.state.data;
        localStorage.setItem('firstName',firstName);
        localStorage.setItem('lastName',lastName);
        localStorage.setItem('email',email);
        localStorage.setItem('password',password);
        entry=true;
        //console.log(data);
      //Resetting the form
      this.setState(this.getInitialState())
    } else {
      this.setState({ errors });
    }
    console.log(data, errors);
  };
  render() {
      const {data,errors}=this.state;
      if(!entry){
      return (
      <Form onSubmit={this.handleSubmit} data={this.data}>
        <FormGroup>
          <Label for='firstName'>First Name</Label>
          <Input
            id='firstName'
            invalid={errors.firstName?true:false}
            value={data.firstName}
            name='firstName'
            onChange={this.handleChange}
          />
          <FormFeedback>{errors.firstName}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for='lastName'>Last Name</Label>
          <Input
            id='lastName'
            invalid={errors.lastName?true:false}
            value={data.lastName}
            name='lastName'
            onChange={this.handleChange}
          />
          <FormFeedback>{errors.lastName}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for='email'>Email</Label>
          <Input
            id='email'
            invalid={errors.email?true:false}
            value={data.email}
            name='email'
            onChange={this.handleChange}
          />
          <FormFeedback>{errors.email}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for='password'>Password</Label>
          <Input
            id='password'
            type='password'
            invalid={errors.password?true:false}
            value={data.password}
            name='password'
            onChange={this.handleChange}
          />
          <FormFeedback>{errors.password}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for='confirmPassword'>Confirm Password</Label>
          <Input
            id='confirmPassword'
            type='password'
            invalid={errors.confirmPassword?true:false}
            value={data.confirmPassword}
            name='confirmPassword'
            onChange={this.handleChange}
          />
          <FormFeedback>{errors.confirmPassword}</FormFeedback>
        </FormGroup>
        <Button color='info'>Register</Button>
      </Form>
    );}
    else{
        return <HomePage />;
    }
  }
}

export default Register;
