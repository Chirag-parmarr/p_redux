import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { sendData } from "../Redux/Action/Action"

import './form.css'

const Form = () => {
    const [data, setData] = useState({
        firstname: '',
        lastname: "",
        email: ""
    });
    let name, value;
    const changeHandler = (e) => {
        name = e.target.name;
        value = e.target.value;
        setData({ ...data, [name]: value })
    }
    
    const allData = useSelector((state) => state)
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        console.log();
        const { firstname, lastname, email } = data;

        if (!firstname || !lastname || !email) {

            return toast.warn("please enter details")
        }



        const Data = {

            id: allData.data[allData.data.length - 1].id + 1,
            firstname,
            lastname,
            email
        }
        dispatch(sendData(Data));
        

    }
    return (
        <>
            <div className="form">
                <div className="title">Welcome</div>
                <div className="subtitle">Let's create your account!</div>
                <div className="input-container ic1">
                    <input name="firstname" onChange={changeHandler} value={data.firstname} id="firstname" className="input" type="text" placeholder=" " />
                    <div className="cut"></div>
                    <label htmlFor="firstname" className="placeholder">First name</label>
                </div>
                <div className="input-container ic2">
                    <input name="lastname" onChange={changeHandler} value={data.lastname} id="lastname" className="input" type="text" placeholder=" " />
                    <div className="cut"></div>
                    <label htmlFor="lastname" className="placeholder">Last name</label>
                </div>
                <div className="input-container ic2">
                    <input name="email" onChange={changeHandler} value={data.email} id="email" className="input" type="text" placeholder=" " />
                    <div className="cut cut-short"></div>
                    <label htmlFor="email" className="placeholder"> Email</label>
                </div>
                <button type="text" onClick={onSubmit} className="submit">submit</button>
            </div>


        </>


    );
};

export default Form;

