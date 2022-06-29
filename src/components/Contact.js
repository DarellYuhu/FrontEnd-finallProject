const Contact = () =>
{
    return (
        <section id="contact" >
            {/* style="background-color: #e2edff;" */}
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
    )
}

export default Contact;