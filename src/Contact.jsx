import React, { useState } from 'react'

function Contact() {

    const [data,setData]=useState({
        fullname:'',
        phone:'',
        email:'',
        msg:''
    })
    const formSubmit =(e)=>{
        e.preventDefault();
        alert(`My Name Is${data.fullname}, My Mobile Number Is ${data.phone}, My email is ${data.email}, Here is what i want to say ${data.msg} `)
    }

    const InputEvent =(event)=>{
        const {name,value}=event.target;
        setData((curData)=>{
            return {
                ...curData,
                [name]:value,
            }
        })
    }

    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Contact US</h1>
            </div>
            <div className='container contact-div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">
                                    FullName
                                </label>
                                <input type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={InputEvent}
                                    placeholder="Enter Your Name" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">
                                    Phone
                                </label>
                                <input type="number"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="phone"
                                    value={ data.phone}
                                    onChange={InputEvent}
                                    placeholder="Enter Your Mobile Number" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">
                                    Email address
                                </label>
                                <input type="email"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                    placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">
                                    Message
                                </label>
                                <textarea className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    name="msg"
                                    value={data.msg}
                                    onChange={InputEvent}>
                                </textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">
                                    Submit form
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact