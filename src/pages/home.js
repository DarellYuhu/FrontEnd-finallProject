import React from 'react';

class Home extends React.Component
{
    render()
    {
        return (
        <div>
            {/* <!-- Navbar start --> */}
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-lg fixed-top pt-0 pb-0">
                <div class="container">
                {/* <a class="navbar-brand fs-2" href="#" style="font-family: 'American Kestrel', sans-serif;">Navbar</a> */}
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav m-auto">
                    <li class="nav-item">
                        <a class="nav-link btn btn-outline-success" aria-current="page" href="#home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#educationSkills">Education & Skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#hoby">Hoby</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact Us</a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
            {/* <!-- Nav bar end --> */}

            {/* <!-- Home --> */}
            <section class="jumbotron text-center" id="home">
            <div class="container">
                <div class="row">
                <div class="col-4 justify-content-start">
                    {/* <h1 class="display-1" style="font-family: 'Lavalette', sans-serif;">Welcome to my personal Profile</h1> */}
                    <p class="fs-5">Ini adalah website yang dibuat oleh Mona, Darell Christopher mahasiswa dari Fakultas Ilmu Komputer untuk memenuhi tugas final Web Design.</p>
                </div>
                </div>
            </div>
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ffffff" fill-opacity="1" d="M0,96L40,106.7C80,117,160,139,240,154.7C320,171,400,181,480,165.3C560,149,640,107,720,90.7C800,75,880,85,960,112C1040,139,1120,181,1200,165.3C1280,149,1360,75,1400,37.3L1440,0L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
                </path>
            </svg>
            </section>
            {/* <!-- Home End --> */}

            {/* <!-- About --> */}
            <section id="about">
                <div class="container">
                    <div class="row mb-3">
                        <div class="col text-center">
                            <h2>About Me</h2>
                        </div>
                    </div>
                    <div class="row shadow-lg justify-content-start">
                        <div class="col-6 col-sm-2">
                            {/* <img src="darell.webp" width="200px" height="200px" class="rounded-circle img-thumbnail float-start"></img> */}
                        </div>
                        <div class="col-6 col-sm-4">
                        <p class="fs-5">Halo saya Darell Mona seorang mahasiswa yang sedang menjalani pendidikan di Universitas Klabat jurusan Informatika. Ini adalah tahun kedua saya sebagai mahasiswa.</p>
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e2edff" fill-opacity="1" d="M0,128L40,149.3C80,171,160,213,240,208C320,203,400,149,480,144C560,139,640,181,720,186.7C800,192,880,160,960,170.7C1040,181,1120,235,1200,234.7C1280,235,1360,181,1400,154.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            </section>
            {/* <!-- About End --> */}

            {/* <!-- Education --> */}
            {/* style="background-color: #e2edff;" */}
            <section id="educationSkills" >
            <div class="container">
                <div class="row mb-3">
                <div class="col text-center">
                    <h2>Education & Skills</h2>
                </div>
                </div>

                {/* <!-- Education and Skills 1 --> */}
                <div class="row justify-content-center">
                <div class="col-3 mb-3 text-center">
                    <img src="darell.webp" width="200px" height="200px" class="rounded-circle img-thumbnail" alt="..." />
                </div>
                </div>

                <div class="row justify-content-evenly">
                <div class="col-md-3 mb-3">
                    {/* style="width: 18rem;" */}
                    <div class="card" >
                    <img src="vladislav-vasilev-9qbPV3dvna0-unsplash.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Elementry</h5>
                        <p class="card-text">I was Studying at Klabat University - Elementary.</p>
                    </div>
                    </div>
                </div>
                <div class="col-md-3 mb-3">
                    {/* style="width: 18rem;" */}
                    <div class="card">
                    <img src="vladislav-vasilev-9qbPV3dvna0-unsplash.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Midle School</h5>
                        <p class="card-text">I was studying at Klabat University - Middle School.</p>
                    </div>
                    </div>
                </div>
                <div class="col-md-3 mb-3">
                    {/* style="width: 18rem;" */}
                    <div class="card">
                    <img src="vladislav-vasilev-9qbPV3dvna0-unsplash.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">High School</h5>
                        <p class="card-text">I was Studying at Klabat University - High School.</p>
                    </div>
                    </div>
                </div>
                </div>

                {/* <div class="row justify-content-center mb-5">
                <div class="col-md-7 shadow-sm bg-light p-3 m-3">
                    <em>HTML</em>
                    <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 70%">70%</div>
                    </div>
                    <em>JavaScript</em>
                    <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 60%">60%</div>
                    </div>
                    <em>CSS</em>
                    <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 80%">80%</div>
                    </div>
                    <em>Bootstrap</em>
                    <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 70%">70%</div>
                    </div>
                </div>
                </div> */}
                {/* <!-- Education and Skills 1 End--> */}

            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,224L34.3,218.7C68.6,213,137,203,206,181.3C274.3,160,343,128,411,144C480,160,549,224,617,229.3C685.7,235,754,181,823,149.3C891.4,117,960,107,1029,122.7C1097.1,139,1166,181,1234,213.3C1302.9,245,1371,267,1406,277.3L1440,288L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
            </section>
            {/* <!-- Education End --> */}

            {/* <!-- Hoby --> */}
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
            {/* <!-- Hoby End --> */}

            {/* <!-- Contact --> */}
            {/* style="background-color: #e2edff;" */}
            <section id="contact" >
            <div class="container">
                <div class="row mb-5">
                <div class="col text-center">
                    <h2>Contact Us</h2>
                </div>
                </div>

                <div class="row justify-content-center">
                <div class="col-md-6 bg-light shadow-lg me-5 pb-1">
                    <h3 class="text-center">Get in touch</h3>
                    <form>
                    <div class="mb-3">
                        <label for="name" class="form-label">Nama</label>
                        <input type="text" class="form-control" id="name" aria-describedby="name" />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" aria-describedby="email" />
                    </div>
                    <div class="mb-3">
                        <label for="pesan" class="form-label">Example textarea</label>
                        <textarea class="form-control" id="pesan" rows="3"></textarea>
                    </div>
                    <button type="button" class="btn btn-outline-success">Kirim</button>
                    </form>
                </div>

                <div class="col-5 fs-5 bg-light shadow-lg">
                    <h3 class="text-center">Social Media</h3>
                    <p>Darell Mona</p>
                    <p><i class="bi bi-facebook"></i>  : <a href="https://www.facebook.com/darel.mona.3" target="_blank" rel="noreferrer">Darell Mona</a></p>
                    <p><i class="bi bi-whatsapp"></i>  : +62 899-1661-959</p>
                    <p><i class="bi bi-instagram"></i> : <a href="https://www.instagram.com/darellyuhu">@darellyuhu</a></p>
                </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0d6efd" fill-opacity="1" d="M0,288L48,261.3C96,235,192,181,288,176C384,171,480,213,576,213.3C672,213,768,171,864,165.3C960,160,1056,192,1152,218.7C1248,245,1344,267,1392,277.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </section>
            {/* <!-- Contact End --> */}

            {/* <!-- Footer --> */}
            <footer class="bg-primary text-white text-center fw-bold pb-3">
            <p><i class="bi bi-pc-display-horizontal"></i> Build by Mona, Darell Christopher <i class="bi bi-pc-display-horizontal"></i></p>
            </footer>
            {/* <!-- Footer End --> */}
        </div>
        )
    }
}

export default Home;