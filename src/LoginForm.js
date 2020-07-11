import React, {Component} from 'react';
import FormLoginComponent from './FormLoginComponent';
 
class FormLogin extends Component{
    constructor(){
       super();
       this.state = {
           firstName : "",
           lastName: "",
           gender: ""
       } ;
       this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const {value, name} = e.target ;
    }
    render() {
        return <FormLoginComponent handleChange={this.handleChange} {...this.state} />;
      }
}
export default FormLogin;