import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddService = () => {
    const handleItem = (event) => {
        event.preventDefault();
        const form = event.target
        const details = form.details.value
        const names = form.name.value
        const price = form.price.value
        const start = form.start.value
        const photoURL = form.photoURL.value
        
        const service ={

            name : names,
            price,
           img: photoURL,
           details, 
           start,
           
        }
       

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                toast.success("Added item Successfully", {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                form.reset()
            }
        })
        .catch(err => console.error(err))
    }
    return (
        <div className='flex justify-center p-4'>
            <form onSubmit={handleItem}>
                <input name='name' type="text" placeholder="Name" className="input input-bordered input-success w-full max-w-xs mb-3" required/> <br />
                <input name='photoURL' type="text" placeholder="Photo URL" className="input input-bordered input-success w-full max-w-xs mb-3" /> <br />
                <input name='price' type="text" placeholder="Add price" className="input input-bordered input-success w-full max-w-xs mb-3" /> <br /> 
                <input name='start' type="text" placeholder="Add rating" className="input input-bordered input-success w-full max-w-xs mb-3" /> <br /> 
                <textarea name='details' className="textarea textarea-success w-96" placeholder="write about your item" required></textarea> <br />
                <button className='btn btn-success'>Submit</button> 
                <ToastContainer position="top-center"
                        autoClose={1000}
                       hideProgressBar={false}
                          newestOnTop={false}
                            closeOnClick
                              rtl={false}
                      pauseOnFocusLoss
                       draggable
                        pauseOnHover
                          theme="light" /> 
            </form> 
        </div>
    );
};

export default AddService;