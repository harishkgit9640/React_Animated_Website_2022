import React, { useState } from 'react'

const Contact = () => {
    const [data, setData] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: ''
    })
    const inputEvent = (event) => {
        const { name, value } = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }

    const submitForm = (event) => {
        event.preventDefault();
        alert(` Name : ${data.fullName}
                email : ${data.email}
                subject : ${data.subject}
                message : ${data.message}`)
    }

    return (
        <>
            <section id='services' className=''>
                <div className="my-3">
                    <h1 className='text-center text-primary fw-bold'>Contact Us</h1>
                </div>
                <div className="container contact_div">
                    <div className="row">
                        <div className="col-md-8 col-10 mx-auto">
                            <form action="#" className='mb-5' onSubmit={submitForm}>

                                <div className="mb-3">
                                    <label htmlFor="Full Name" className="form-label fw-bold">Full Name</label>
                                    <input type="text" className="form-control" id="" name='fullName' value={data.fullName} onChange={inputEvent} placeholder="John Nick" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label fw-bold">Email address</label>
                                    <input type="email" className="form-control" id="" name='email' value={data.email} onChange={inputEvent} placeholder="name@example.com" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="subject" className="form-label fw-bold">subject address</label>
                                    <input type="text" className="form-control" id="" name='subject' value={data.subject} onChange={inputEvent} placeholder="Web Development, App Development etc." />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label fw-bold">Example textarea</label>
                                    <textarea className="form-control" id="myMsg" rows="3" name='message' value={data.message} onChange={inputEvent} placeholder='Write something about your subject...'></textarea>
                                </div>
                                <div className="col-12">
                                    <button className='btn btn-outline-primary px-5 fw-bold '>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
