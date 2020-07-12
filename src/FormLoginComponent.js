import React from 'react';

function FormLoginComponent(props){
    return(
        <main>
            <h4>Login Form</h4>
            <form className="inputForm">
            <input
                className="text"
                onChange={props.handleChange}
                name="firstName"
                placeholder="First Name"
                value={props.firstName}
            />
            <br/> 
            <input
                className="text"
                onChange={props.handleChange}
                name="lastName"
                placeholder="Last Name"
                value={props.lastName}
            />
            <br/>
            <label>
            <input
                className="radiobutton"
                type="radio"
                name="gender"
                value="male"
                checked={props.gender === "male"}
                onChange={props.handleChange}
            />
            Male
            </label>
            <label>
            <br/>
            <input
                className="radiobutton"
                type="radio"
                name="gender"
                value="female"
                checked={props.gender === "female"}
                onChange={props.handleChange}
            />
            Female
            </label>
            <br />
            <br/>
            <button className="submit">Masukk</button>
            </form>
            <hr/>
            <div className="info">
            <p>
                Your name: {props.firstName} {props.lastName}
            </p>
            <p>Your gender: {props.gender}</p>
            </div>
        </main>
    );
}

export default FormLoginComponent;