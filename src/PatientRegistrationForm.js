
import React, { useState} from "react";
const PatientRegistrationForm =() => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        contact: '',
        email: '',
        aadhar: '',
        address: '',
        
    })
};

const handleChange = (e) => {
    const{name, value} = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);// change this with API call
    alert('Patient Registered Successfully')
};

return(
    <div className="container">
        <h2>Patient Registration</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            
            <div className="form-group">
                <label>Age</label>
                <input type="number" name="age" value={formData.age} onChange={handleChange} required />
            </div>

            <div className="form-group">
                <label>Contact</label>
                <input type="tel" name="contact" value={formData.contact} onChange={handleChange} required />
            </div>

            <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="form-group">
                <label>Aadhar</label>
                <input type="number" name="aadhar" value={formData.aadhar} onChange={handleChange} required />
            </div>

            <div className="form-group">
                <label>Address</label>
                <textarea name="address" value={formData.address} onChange={handleChange} required />
            </div>

        </form>
    </div>
);

export default PatientRegistrationForm;

