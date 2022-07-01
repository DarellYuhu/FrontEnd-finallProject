import React, {useState, useEffect} from "react";
import axios from "axios";

const Contact = () =>
{
    const [contact, setContact] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3004/contact").then(res => setContact(res.data))
    }, [])
    return (
        <>
        <section id="contact" style={{backgroundColor: "#e2edff"}}>
        {
            contact.map(item =>
                {
                    return(
                        <div className="container">
                            <div className="row mb-5">
                            <div className="col text-center">
                                <h2>Contact Me</h2>
                            </div>
                            </div>
                            <div className="row justify-content-center">
                            <div className="col-md-6 bg-light shadow-lg me-5 pb-1">
                                <h3 className="text-center">Get in touch</h3>
                                <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Nama</label>
                                    <input type="text" className="form-control" id="name" aria-describedby="name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" aria-describedby="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="pesan" className="form-label">Leave a message</label>
                                    <textarea className="form-control" id="pesan" rows={3} defaultValue={""} />
                                </div>
                                <button type="button" className="btn btn-outline-success">Send</button>
                                </form>
                            </div>
                            <div className="col-5 fs-5 bg-light shadow-lg">
                                <h3 className="text-center">Social Media</h3>
                                <p>{item.name}</p>
                                <p><i className="bi bi-facebook" />  : <a href={item.facebook.link} target="_blank" rel="noreferrer">{item.facebook.label}</a></p>
                                <p><i className="bi bi-whatsapp" />  : <a href={item.whatsapp.link} target="_blank" rel="noreferrer">{item.whatsapp.label} </a></p>
                                <p><i className="bi bi-instagram" /> : <a href={item.instagram.link} target="_blank" rel="noreferrer">{item.instagram.label}</a></p>
                            </div>
                            </div>
                        </div>
                    )
                })
        }
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0d6efd" fillOpacity={1} d="M0,288L48,261.3C96,235,192,181,288,176C384,171,480,213,576,213.3C672,213,768,171,864,165.3C960,160,1056,192,1152,218.7C1248,245,1344,267,1392,277.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" /></svg>
        </section>
        </>
    )
}

export default Contact;