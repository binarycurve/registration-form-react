import React, { Component } from 'react'

class HomePage extends Component {

    state={
        firstName:'',
        lastName:'',
        email:''
    }
    componentDidMount(){
        const firstName=localStorage.getItem('firstName');
        const lastName=localStorage.getItem('lastName');
        const email=localStorage.getItem('email');
        this.setState({firstName,lastName,email})
    }

    render() {
        const {firstName,lastName,email}=this.state;
        return (
            <div>
                <h1>Hello, {firstName} {lastName}</h1>
        <h3>{email}</h3>
            </div>
        )
    }
}

export default HomePage
