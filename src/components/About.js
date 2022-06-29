const About = () =>
{
    return (
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
    )
}

export default About;