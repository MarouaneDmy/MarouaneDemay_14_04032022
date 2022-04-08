import React from "react";
import { NavLink } from 'react-router-dom'
import { Dropdown } from "dropdown-library-marouanedmy";
import state from "../data/state"
import department from "../data/department"
import { useDispatch } from 'react-redux'
import { create } from '../store/employee'


export default function EmployeeForm(props) {


    /**
     * Creating a state variable called user and setting it to the object that is passed in.
    */ 
    const [user, setUser] = React.useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        startDate: "",
        department: "Sales",
        street: "",
        city: "",
        state: "Alabama",
        zipCode: ""
    })

    /**
     * Creating a function that will dispatch an action to the store. 
    */ 
    const dispatch = useDispatch()

    /**
     * Dispatch user to the store
    */
    const save = () => {
        dispatch(create(user))
    }
    
  return (
    <section className="employee-form-content">
        <h2>Create Employee</h2>
        <NavLink to="/employees">
            <p>View Current Employees</p>
        </NavLink>
        <form>
            <div className="input-wrapper">
                <label htmlFor="firstName">First Name</label>
                <input autofocus type="text" id="firstName" value={user.firstName} onChange={(event)=>setUser({...user, firstName:event.target.value})}/>
            </div>
            <div className="input-wrapper">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" value={user.lastName} onChange={(event)=>setUser({...user, lastName:event.target.value})}/>
            </div>
            <div className="input-wrapper">
                <label htmlFor="dateBirth">Date of Birth</label>
                <input type="date" id="dateBirth" value={user.dateOfBirth} onChange={(event)=>setUser({...user, dateOfBirth:event.target.value})}/>
            </div>
            <div className="input-wrapper">
                <label htmlFor="startDate">Start Date</label>
                <input type="date" id="startDate" value={user.startDate} onChange={(event)=>setUser({...user, startDate:event.target.value})}/>
            </div>
            <fieldset>
                <legend>Address</legend>
                <div className="input-wrapper-fieldset">
                    <label htmlFor="street">Street</label>
                    <input type="text" id="street" value={user.street} onChange={(event)=>setUser({...user, street:event.target.value})}/>
                </div>
                <div className="input-wrapper-fieldset">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" value={user.city} onChange={(event)=>setUser({...user, city:event.target.value})}/>
                </div>
                <div className="input-wrapper-fieldset">
                    <label>State</label>
                    <Dropdown data={state} value={user.state} onChange={(event)=>setUser({...user, state:event.target.value})}/>
                </div>
                <div className="input-wrapper-fieldset">
                    <label htmlFor="zipCode">Zip Code</label>
                    <input type="number" id="zipCode" value={user.zipCode} onChange={(event)=>setUser({...user, zipCode:event.target.value})}/>
                </div>
            </fieldset>
            <div className="input-wrapper">
                <label>Department</label>
                <Dropdown data={department} className="dropdown-department" value={user.department} onChange={(event)=>setUser({...user, department:event.target.value})}/>
            </div>
            <button type="button" className="button-save" onClick={save}>Save</button>
        </form>
    </section>
  );
}
