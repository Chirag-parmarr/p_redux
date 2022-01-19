import React from 'react';
import './form.css'

const Form = () => {
    return (

        <div>
            <h1>Enter details</h1>

            <div className="demo">
                <form className="form form-animate-fields" action="#">
                    <div className="form-field">
                        <input placeholder="First Name" className="form-input" type="text" name="firstname" id="firstname"/>
                            <label htmlFor="firstname" className="form-label">

                            </label>
                    </div>
                    <div className="form-field">
                        <input placeholder="last Name" className="form-input" type="text" name="lastname" id="lastname"/>
                            <label htmlFor="lastname" className="form-label">

                            </label>
                    </div>
                    <div className="form-field">
                        <input placeholder="Email" className="form-input" type="email" name="email" id="email"/>
                            <label htmlFor="email" className="form-label">

                            </label>
                    </div>

                    <div className="">
                        <button className='button-9'>submit</button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;