const Hobby = () =>
{
    return (
        <section id="hoby">
            <div class="container">
                <div class="row">
                <div class="col text-center">
                    <h2>My hobies are</h2>
                </div>
                </div>

                <div class="row justify-content-sm-between">
                <div class="col-3">
                    {/* <img src="assets/mountain claimbing.jpg" width="200px" height="200px" class="rounded-circle img-thumbnail"></img> */}
                </div>
                <div class="col-3">
                    {/* <img src="playing guitar.jpg" width="200px" height="200px" class="rounded-circle img-thumbnail"></img> */}
                </div>
                <div class="col-3">
                    {/* <img src="coding.jpg" width="200px" height="200px" class="rounded-circle img-thumbnail"></img> */}
                </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e2edff" fill-opacity="1" d="M0,192L48,186.7C96,181,192,171,288,181.3C384,192,480,224,576,213.3C672,203,768,149,864,160C960,171,1056,245,1152,261.3C1248,277,1344,235,1392,213.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </section>
    )
}

export default Hobby;