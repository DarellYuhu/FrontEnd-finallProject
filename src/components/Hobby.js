import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Hobby = () =>
{
    const [hobby, setHobby] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3004/hobies").then(res => setHobby(res.data))
    }, [])
    return (
        <>
        <section id="hoby">
        {
            hobby.map(item => {
                return(
                    <div className="container">
                        <div className="row" style={{marginBottom: "50px"}}>
                        <div className="col text-center">
                            <h2>{item.section}</h2>
                        </div>
                        </div>
                        <div className="row justify-content-sm-between shadow-lg p-3 mb-5 bg-body rounded">
                        <div className="col-3 border border-primary">
                            <img src={item.hobby.climber.image} width="200px" height="200px" className="rounded-circle img-thumbnail" alt="Mountain pict" />
                            <p>{item.hobby.climber.description}</p>
                        </div>
                        <div className="col-3 border border-success">
                            <img src={item.hobby.guitar.image} alt="Playing guitar" width="200px" height="200px" className="rounded-circle img-thumbnail" />
                            <p>{item.hobby.guitar.description}</p>
                        </div>
                        <div className="col-3 border border-danger">
                            <img src={item.hobby.coding.image} alt="Coding" width="200px" height="200px" className="rounded-circle img-thumbnail" />
                            <p>{item.hobby.coding.description}</p>
                        </div>
                        </div>
                    </div>
                )
            })
        }
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e2edff" fillOpacity={1} d="M0,192L48,186.7C96,181,192,171,288,181.3C384,192,480,224,576,213.3C672,203,768,149,864,160C960,171,1056,245,1152,261.3C1248,277,1344,235,1392,213.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" /></svg>
        </section>

        </>
    )
}

export default Hobby;