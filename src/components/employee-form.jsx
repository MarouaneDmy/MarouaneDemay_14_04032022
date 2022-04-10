import React from "react";
import { NavLink } from 'react-router-dom'
import { Dropdown } from "dropdown-library-marouanedmy";
import state from "../data/state"
import department from "../data/department"
import { useDispatch } from 'react-redux'
import { create } from '../store/employee'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export default function EmployeeForm(props) {

    /**
     * Setting the style of the modal
    */ 
    const style = {
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

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

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    /**
     * Creating a function that will dispatch an action to the store. 
    */ 
    const dispatch = useDispatch()

    /**
     * Dispatch user to the store
    */
    const save = () => {
        handleOpen()
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
                    <label htmlFor="state">State</label>
                    <Dropdown data={state} value={user.state} onChange={(event)=>setUser({...user, state:event.target.value})}/>
                </div>
                <div className="input-wrapper-fieldset">
                    <label htmlFor="zipCode">Zip Code</label>
                    <input type="number" id="zipCode" value={user.zipCode} onChange={(event)=>setUser({...user, zipCode:event.target.value})}/>
                </div>
            </fieldset>
            <div className="input-wrapper">
                <label htmlFor="department">Department</label>
                <Dropdown data={department} className="dropdown-department" value={user.department} onChange={(event)=>setUser({...user, department:event.target.value})}/>
            </div>
            <Button type="button" className="button-save" onClick={save}>Save</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography>
                        Employee Created!
                    </Typography>
                </Box>
            </Modal>
        </form>
    </section>
  );
}
