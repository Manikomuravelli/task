import React from 'react';
import Moment from 'react-moment';

function ListClassItem({listClasses}) {

    return (
        <>
           <section className="classList">
               <div className="container">
                   <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="card mb-5">
                                <div className="card-body p-5">
                                    <h2 className="mb-4 text-center">List Of Classes</h2>
                                    <div className="row">
                                    {listClasses.length > 0 ? 
                                        listClasses.map((element,i) => {
                                            return (
                                                <>
                                                    <div className="col-lg-4">
                                                        <div class="card mt-1">
                                                            <img src="https://i.ytimg.com/vi/bhpeCVrPatc/maxresdefault.jpg" class="card-img-top" alt="..."/>
                                                            <div class="card-body">
                                                            <h5 class="card-title">{element.title}</h5>
                                                                <p class="card-text mb-1 small text-secondary">Price: <span class="badge bg-info">{element.price}</span></p>
                                                                <p class="card-text mb-1 small text-secondary">Date: <Moment format='MMMM Do YYYY'>{element.datetime}</Moment></p>
                                                                <p class="card-text mb-2 small text-secondary">Time: <Moment format='h:mm a'>{element.datetime}</Moment></p>
                                                                <a href="#" class="btn btn-primary">Purchase Class</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    : <h3 className="text-center text-warning">No Classes Available Add a Class</h3>}
                                    </div>
                                </div>
                            </div>
                        </div>
                   </div>
               </div>
           </section>
        </>
    )
}

export default ListClassItem
