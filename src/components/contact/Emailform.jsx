import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Emailform = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Input validation
        if (!name || !email || !message) {
            alert('Please fill out all fields before submitting.');
            return;
        }

        const serviceId = "service_vve4ans";
        const templateId = "template_k7btunh";
        const publicKey = "1pDM-RxgESbywDLJU";

        // Dynamic template parameters
        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: "Nanda G",
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log("Email sent successfully!", response);
                alert('Your message has been sent successfully!');
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                alert('There was an error sending your message. Please try again later.');
            });
    };

    return (
        <form onSubmit={handleSubmit} className='emailform'>
            <input
                className='input'
                type='text'
                placeholder='Your Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                className='input'
                type='email'
                placeholder='Your Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
                className='message'
                cols="30"
                rows="10"
                value={message}
                placeholder='Enter your message here'
                onChange={(e) => setMessage(e.target.value)}
            >
            </textarea>

            <button  className='btn1' type='submit'>Submit</button>
        </form>
    );
}

export default Emailform;






// import React, { useState } from 'react'
// import emailjs from '@emailjs/browser';
// import './contact.css'

// const Emailform = () => {

//     const [name,setName]=useState('');
//     const [email,setEmail]=useState('');
//     const [message,setMessage]=useState('');
    
//     const handleSubmit= (e) =>{
//         e.preventDefault()

//         const serviceId="service_vve4ans";
//         const templateId="template_k7btunh";
//         const publicKey="1pDM-RxgESbywDLJU";

//         // dynamic template paramters
//         const templateParams={
//             from_name:name,
//             from_email:email,
//             to_name:"Nanda G",
//             message:message,
//         };

//         emailjs.send(serviceId,templateId,templateParams,publicKey)
//         .then((response)=>{
//             console.log("Email sent successfully!",response);
//             setName('');
//             setEmail('');
//             setMessage('');
//         })
//         .catch((error)=>{
//             console.error('Error sending email:',error);
//         });
//     }

   



//   return (
//     <form onSubmit={handleSubmit} className='emailform'>
//         <input
//         className='input'
//         type='text'
//         placeholder='Your Name'
//         value={name}
//         onChange={(e)=>setName(e.target.value)}
//         />
//         <input
//         className='input'
//         type='email'
//         placeholder='Your Email'
//         value={email}
//         onChange={(e)=>setEmail(e.target.value)}
//         />
//         <textarea 
//         className='message'
//         cols="30"
//         rows="10"
//         value={message}
//         placeholder='Enter your message here'
//         onChange={(e)=>setMessage(e.target.value)}
//         >
            
//         </textarea>

//         <button className='btn1' type='submit'>Submit</button>

//     </form>
//   )
// }

// export default Emailform