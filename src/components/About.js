import React, {useState, useEffect} from 'react';
import axios from 'axios';

const About = () =>
{
    const [about, setAbout] = useState([])

    useEffect(() =>
    {
        axios.get("http://localhost:3004/about").then(res => setAbout(res.data))
    }, [])

    return (
        <section id="about">
        {
            about.map(item => {
                return(
                    <div className="container">
                        <div className="row mb-3">
                        <div className="col text-center">
                            <h2>{item.section}</h2>
                        </div>
                        </div>
                        <div className="row shadow-lg justify-content-start">
                        <div className="col-6 col-sm-2">
                            <img src={item.image} alt="Profile pict" width="200px" height="200px" className="rounded-circle img-thumbnail float-start" />
                        </div>
                        <div className="col-6 col-sm-4">
                            <p className="fs-5">{item.description}</p>
                        </div>
                        </div>
                    </div>
                )
            })
        }
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e2edff" fillOpacity={1} d="M0,128L40,149.3C80,171,160,213,240,208C320,203,400,149,480,144C560,139,640,181,720,186.7C800,192,880,160,960,170.7C1040,181,1120,235,1200,234.7C1280,235,1360,181,1400,154.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z" /></svg>
        </section>
    )
}

export default About;