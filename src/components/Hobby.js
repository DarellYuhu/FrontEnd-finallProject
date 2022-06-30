import montainClimb from '../assets/mountain claimbing.jpg'
import guitaring from '../assets/playing guitar.jpg'
import coding from '../assets/coding.jpg'

const Hobby = () =>
{
    return (
        <>
        <section id="hoby">
        <div className="container">
            <div className="row" style={{marginBottom: "50px"}}>
            <div className="col text-center">
                <h2>My hobies are</h2>
            </div>
            </div>
            <div className="row justify-content-sm-between shadow-lg p-3 mb-5 bg-body rounded">
            <div className="col-3 border border-primary">
                <img src={montainClimb} width="200px" height="200px" className="rounded-circle img-thumbnail" alt="Mountain pict" />
                <p><b>Climbing mountains</b> will teach you patience, persistence and gratitude. Climbing a mountain is the furthest thing from easy. Long stretches of constant vertical climbing can be the most exhausting and hardest thing you do. Not only the physical difficulties but also the mental difficulties will also test you.</p>
            </div>
            <div className="col-3 border border-success">
                <img src={guitaring} alt="Playing guitar" width="200px" height="200px" className="rounded-circle img-thumbnail" />
                <p><b>Playing guitar</b> (or any instrument!) has a calming effect on the mind and body, and is linked to lower blood pressure, decreased heart rate, a lower rate of anxiety and depression, and overall reduced stress levels. It is the perfect stress buster!</p>
            </div>
            <div className="col-3 border border-danger">
                <img src={coding} alt="Coding" width="200px" height="200px" className="rounded-circle img-thumbnail" />
                <p><b>Coding</b> encourages us to use logic and algorithms to create a program. When facing a new challenge, you need to follow a logical approach to solve the issue. Therefore, this is an exercise for your brain to train up your logical ability.</p>
            </div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e2edff" fillOpacity={1} d="M0,192L48,186.7C96,181,192,171,288,181.3C384,192,480,224,576,213.3C672,203,768,149,864,160C960,171,1056,245,1152,261.3C1248,277,1344,235,1392,213.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" /></svg>
        </section>

        </>
    )
}

export default Hobby;