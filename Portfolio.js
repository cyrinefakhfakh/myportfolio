import React from 'react';
import './stylee.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';





function Portfolio() {
  return (
    <div>
      <header>
        <nav>
          <img className="logo" src="bestlogocf.png" alt="Logo" />
          <ul className="nav-list">
            <li className="nav-item"><a href="#about">About</a></li>
            <li className="nav-item"><a href="#skills">Skills</a></li>
            <li className="nav-item"><a href="#portfolio">Portfolio</a></li>
            <li className="nav-item"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="about">
        <div className="main">
          <div className="detail">
            <h1>Hello, I'm <span>Cyrine Fk</span></h1>
            <p>I’m a student at ISAMM University studying computer science and multimedia. I'm 20 years old and I'm continuously developing my skills to grow professionally.</p>
            <a href="mycvcyrinefk.pdf" target="_blank"><p id="cv">Download my CV</p></a>
          </div>
        </div>
        <div className="homeimg">
          <img src="hack.png" alt="" id="img" />
        </div>
      </section>

      <section className='skills' id="skills">
        <h2>My Skills</h2>
        <div className="container">
          <div className="servicebox">
            <i className='bx bx-code-alt'></i>
            <h3>Web Development</h3>
            <p>HTML, CSS, JavaScript, PHP, MySQL</p>
          </div>

          <div className="servicebox">
            <i className='bx bxs-paint'></i>
            <h3>Graphic design</h3>
            <p>Adobe Photoshop, Adobe Illustrator, Figma, Canva</p>
          </div>

          <div className="servicebox">
            <i className='bx bxs-paint'></i>
            <h3>Programming languages</h3>
            <p>Python, C, C++, Java</p>
          </div>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <h2>My <span>Projects</span></h2>
        <div className="portfolio-container">
          {/* Repeat this block for each project */}
          <div className="portfolio-box">
            <img src="portfolio2.png" alt="" id="imgp" />
            <div className="layer">
              <h4>Coming Soon</h4>
              <p></p>
            </div>
          </div>
          {/* End of project block */}
        </div>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>You can reach out to me through the following channels:</p>
        <ul>
          <li>Email: sirinefakhfakh03@gmail.com</li>
          <li>Phone: 97 172 151</li>
        </ul>
        <p>Or you can find me on social media:</p>
        <div className="wrapper">
          <div className="button">
            <div className="icon">
              <a href="https://www.facebook.com/profile.php?id=100009838300393">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
            <span>Facebook</span>
          </div>

          <div className="button">
            <div className="icon">
              <a href="https://www.linkedin.com/in/cyrine-fakhfakh/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <span>LinkedIn</span>
          </div>

          <div className="button">
            <div className="icon">
              <a href="https://www.instagram.com/cyrine_fk/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
            <span>Instagram</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
