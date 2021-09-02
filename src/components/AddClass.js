import React, {useEffect, useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function AddClass({currentClass,classes}) {

    const notify = () => toast("New Class Added Successfully");

    const [teacherName, setTeacherName] = useState('')
    const [title, setTitle] = useState('')
    const [dateTime, setDateTime] = useState('')
    const [price, setPrice] = useState('')


    useEffect(() => {
        const tName = prompt('Please enter your name') 
        setTeacherName(tName)
    }, [])


    const formSubmit = (e) => {
        e.preventDefault();
        if(title && dateTime && price !== '') {
            const newClass = {
                title: title,
                dateTime: dateTime,
                price: price,
            }
            classes([...currentClass, newClass])
            notify()
            setTitle('')
            setDateTime('')
            setPrice('')
            
        }else {
            alert('Please fill all fields')
        }
    }


    return (
        <>
            <section className="main">
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="card">
                        <div className="card-body">
                            <div className="text-center">
                                <h2>Hi! {teacherName}, Add your class here</h2>
                            </div>
                            <form onSubmit={(e) => formSubmit(e)}>
                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} id="title"className="form-control" placeholder="Enter title" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="dTime">Date & Time</label>
                                    <input type="datetime-local" value={dateTime} onChange={(e) => setDateTime(e.target.value)} id="dTime"className="form-control" placeholder="Select date & time" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="title">Price</label>
                                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} id="title"className="form-control" placeholder="Enter title" />
                                </div>
                                <div className="form-group">
                                    <button type="submit"  className="btn btn-success">Add Class</button>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
                <ToastContainer />
            </section>  
        </>
    )
}

export default AddClass
