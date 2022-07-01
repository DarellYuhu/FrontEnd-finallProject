import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Education = () =>
{
    const [education, setEducation] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3004/education").then(res => setEducation(res.data))
    }, [])
    return (
        <>
        <section id="educationSkills" style={{backgroundColor:" #e2edff"}}>
        {
            education.map(item => {
                return(
                    <div className="container">
                        <div className="row mb-3">
                        <div className="col text-center">
                            <h2>{item.section}</h2>
                        </div>
                        </div>
                        {/* Education and Skills 1 */}
                        <div className="row justify-content-center">
                        <div className="col-3 mb-3 text-center">
                            <img src={item.image} width="200px" height="200px" className="rounded-circle img-thumbnail" alt="..." />
                        </div>
                        </div>
                        <div className="row justify-content-evenly">
                        <div className="col-md-3 mb-3">
                            <div className="card" style={{width: "288px;"}}>
                            <img src={item.schImage} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.education.elementry.title}</h5>
                                <p className="card-text">{item.education.elementry.description}</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="card" style={{width: "288px;"}}>
                            <img src={item.schImage} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.education.middle.title}</h5>
                                <p className="card-text">{item.education.middle.description}</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="card" style={{width: "288px;"}}>
                            <img src={item.schImage} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.education.high.title}</h5>
                                <p className="card-text">{item.education.high.description}</p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row justify-content-center mb-5">
                        <div className="col-md-7 shadow-sm bg-light p-3 m-3">
                            <em>{item.skills.html.title}</em>
                            <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: item.skills.html.value}}>{item.skills.html.value}</div>
                            </div>
                            <em>{item.skills.javascript.title}</em>
                            <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: item.skills.javascript.value}}>{item.skills.javascript.value}</div>
                            </div>
                            <em>{item.skills.css.title}</em>
                            <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: item.skills.css.value}}>{item.skills.css.value}</div>
                            </div>
                            <em>{item.skills.bootstrap.title}</em>
                            <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: item.skills.bootstrap.value}}>{item.skills.bootstrap.value}</div>
                            </div>
                        </div>
                        </div>
                        {/* Education and Skills 1 End*/}
                    </div>
                )
            })
        }
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity={1} d="M0,224L34.3,218.7C68.6,213,137,203,206,181.3C274.3,160,343,128,411,144C480,160,549,224,617,229.3C685.7,235,754,181,823,149.3C891.4,117,960,107,1029,122.7C1097.1,139,1166,181,1234,213.3C1302.9,245,1371,267,1406,277.3L1440,288L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" /></svg>
        </section>
        </>
    )
}

export default Education;