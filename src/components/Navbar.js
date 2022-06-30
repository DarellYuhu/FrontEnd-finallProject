/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Navbar()
{
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-lg fixed-top pt-0 pb-0">
                <div class="container">
                <a class="navbar-brand fs-2" href="#" style={{fontFamily: 'American Kestrel'}}>Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav m-auto">
                    <li class="nav-item">
                        <a class="nav-link btn btn-outline-success" aria-current="page" href="#home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">About Me</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#educationSkills">Education & Skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#hoby">Hoby</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact Me</a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    )
}