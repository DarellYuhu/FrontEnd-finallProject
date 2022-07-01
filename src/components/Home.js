import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Home = () =>
{
    const [home, setHome] = useState([])

    useEffect(() =>
    {
        axios.get("http://localhost:3004/home").then(res => setHome(res.data))
    }, [])

    return (
        <>
        <section className="jumbotron text-center" id="home">
        {
            home.map(item => {
                return (
                    <div className="container">
                        <div className="row">
                        <div className="col-4 justify-content-start">
                            <h1 className="display-1" style={{fontFamily: 'Lavalette'}}>{item.title}</h1>
                            <p className="fs-5">{item.description}</p>
                        </div>
                        </div>
                    </div>
                )
            })
        }
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity={1} d="M0,96L40,106.7C80,117,160,139,240,154.7C320,171,400,181,480,165.3C560,149,640,107,720,90.7C800,75,880,85,960,112C1040,139,1120,181,1200,165.3C1280,149,1360,75,1400,37.3L1440,0L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
            </path>
        </svg>
        </section>
        </>
    )
}

export default Home;