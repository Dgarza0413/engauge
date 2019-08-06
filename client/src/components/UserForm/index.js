import React from "react";
import { Link } from 'react-router-dom';


const UserForm = props => {
    return (
        <div className="registration">
        <form>
            <div className="form-group">
                <h4>{props.title}</h4>
            <label htmlFor="register-email">Email address</label>
                <br></br>
                <input 
                    className="col-12 form-control"
                    value={props.email}
                    type="email"
                    name="registerEmail"
                    placeholder="Enter email"
                    onChange={props.handleChange}
                />
            </div>
            <div className="form-group">
            <label htmlFor="register-pw">Password</label>
                <br></br>
                <input 
                    className="col-12 form-control"
                    value={props.password}
                    type="password"
                    name="registerPW"
                    placeholder="Enter your password"
                    onChange={props.handleChange}
                />
            </div>
            <div className="button">
                <button type="submit" className="submitBtn btn" onClick={props.handleFormSubmit}>
                    Submit
                </button>
                <Link to="/register" className="FormField__Link">I'm already a member.</Link>
            </div>
        </form>
        </div>
    )
}
export default UserForm;