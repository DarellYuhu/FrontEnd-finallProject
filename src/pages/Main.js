import React from 'react';
import Navbar from '../components/Navbar'
import Home from '../components/Home';
import About from '../components/About';
import Education from '../components/Education';
import Hobby from '../components/Hobby';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

class Main extends React.Component
{
    render()
    {
        return (
        <div>
            {/* <!-- Navbar start --> */}
            <Navbar />
            {/* <!-- Nav bar end --> */}

            {/* <!-- Home --> */}
            <Home />
            {/* <!-- Home End --> */}

            {/* <!-- About --> */}
            <About />
            {/* <!-- About End --> */}

            {/* <!-- Education --> */}
            <Education />
            {/* <!-- Education End --> */}

            {/* <!-- Hoby --> */}
            <Hobby />
            {/* <!-- Hoby End --> */}

            {/* <!-- Contact --> */}
            <Contact />
            {/* <!-- Contact End --> */}

            {/* <!-- Footer --> */}
            <Footer />
            {/* <!-- Footer End --> */}
        </div>
        )
    }
}

export default Main;