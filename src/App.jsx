import './App.css'
import './animate.css'
import './components/styles.css'
import { useCarousel } from './hooks/useCarousel'
import { useAnimate } from './hooks/useAnimate'

function App() {
  useCarousel();
  useAnimate();
  return (
  <>
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target" id="ftco-navbar">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          APPDEV1
        </a>
        <button
          className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu" /> Menu
        </button>
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav nav ml-auto">
            <li className="nav-item">
              <a href="#home-section" className="nav-link">
                <span>Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#about-section" className="nav-link">
                <span>About</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#resume-section" className="nav-link">
                <span>Resume</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#services-section" className="nav-link">
                <span>Hobbies</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills-section" className="nav-link">
                <span>Skills</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects-section" className="nav-link">
                <span>Projects</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact-section" className="nav-link">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <section id="home-section" className="hero">
      <div className="home-slider owl-carousel">
        <div className="slider-item ">
          <div className="overlay" />
          <div className="container">
            <div
              className="row d-md-flex no-gutters slider-text align-items-end justify-content-end"
              data-scrollax-parent="true"
            >
              <div
                className="one-third js-fullheight order-md-last img"
                style={{ backgroundImage: "url(images/team.jpg)" }}
              >
                <div className="overlay" />
              </div>
              <div
                className="one-forth d-flex  align-items-center ftco-animate"
                data-scrollax=" properties: { translateY: '70%' }"
              >
                <div className="text">
                  <span className="subheading">Hello!</span>
                  <h1 className="mb-4 mt-3">
                    I'm <span>Jamela!</span>
                  </h1>
                  <p>
                    <a href="#" className="btn btn-primary py-3 px-4">
                      Hire me
                    </a>{" "}
                    <a
                      href="#"
                      className="btn btn-white btn-outline-white py-3 px-4"
                    >
                      My works
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-item">
          <div className="overlay" />
          <div className="container">
            <div
              className="row d-flex no-gutters slider-text align-items-end justify-content-end"
              data-scrollax-parent="true"
            >
              <div
                className="one-third js-fullheight order-md-last img"
                style={{ 
                  backgroundImage: "url(images/2.jpg)",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="overlay" />
              </div>
              <div
                className="one-forth d-flex align-items-center ftco-animate"
                data-scrollax=" properties: { translateY: '70%' }"
              >
                <div className="text">
                  <span className="subheading">Hello!</span>
                  <h1 className="mb-4 mt-3">
                    Aspiring <span>Project Manager</span> from the Philippines.
                  </h1>
                  <p>
                    <a href="#" className="btn btn-primary py-3 px-4">
                      Hire me
                    </a>{" "}
                    <a
                      href="#"
                      className="btn btn-white btn-outline-white py-3 px-4"
                    >
                      My works
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      className="ftco-about img ftco-section ftco-no-pb"
      id="about-section"
    >
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-6 col-lg-5 d-flex">
            <div className="img-about img d-flex align-items-stretch">
              <div className="overlay" />
              <div
                className="img d-flex align-self-stretch align-items-center"
                style={{ backgroundImage: "url(images/1.jpg)" }}
              ></div>
            </div>
          </div>
          <div className="col-md-6 col-lg-7 pl-lg-5 pb-5">
            <div className="row justify-content-start pb-3">
              <div className="col-md-12 heading-section ftco-animate">
                <h1 className="big">About</h1>
                <h2 className="mb-4">About Me</h2>
                <p>
                  Hi! I’m <strong>Jamela</strong>, an aspiring Project Manager from the Philippines. <br />I’m currently studying and I specialize in planning, organizing, and guiding projects to success through teamwork, strategy, and clear communication. My goal is to ensure efficiency, collaboration, and meaningful results in every project I lead.
                </p>
                <ul className="about-info mt-4 px-md-0 px-2">
                  <li className="d-flex">
                    <span>Name:</span> <span>Jamela Fernandez</span>
                  </li>
                  <li className="d-flex">
                    <span>Education:</span> <span>Bachelor of Science in Information Systems</span>
                  </li>
                  <li className="d-flex">
                    <span>Location:</span> <span>Pampanga</span>
                  </li>
                  <li className="d-flex">
                    <span>Passion:</span> <span>I’m passionate about specializing in planning, organizing, and guiding projects.</span>
                  </li>
                  <li className="d-flex">
                    <span>Email:</span> <span>jamela.fernandez.29@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="ftco-section ftco-no-pb" id="resume-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-10 heading-section text-center ftco-animate">
            <h1 className="big big-2">Resume</h1>
            <h2 className="mb-4">Resume</h2>
            <p>
              This section presents a comprehensive overview of my skills, experiences, and projects, showcasing my development and passion in project planning, leadership, and effective team collaboration.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="resume-wrap ftco-animate">
              <span className="date">2023–Present</span>
              <h2>Bachelor of Science in Information Systems</h2>
              <span className="position">La Verdad Christian College</span>
              <p className="mt-4">
                Pursuing a Bachelor of Science in Information Systems at La Verdad Christian College, developing strong competencies in project management, team leadership, and strategic planning to ensure successful project outcomes.
              </p>
            </div>
            <div className="resume-wrap ftco-animate">
              <span className="date">2023-Present</span>
              <h2>Senior High School</h2>
              <span className="position">La Verdad Christian School</span>
              <p className="mt-4">
                Completed secondary education under the ICT strand, where I consistently graduated with honors while frequently taking on leadership roles in group projects—strengthening my passion for technology, and project management.              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="resume-wrap ftco-animate">
              <span className="date">2023-Present</span>
              <h2>MCGI Production</h2>
              <span className="position">Transcriber</span>
              <p className="mt-4">
                Currently part of the MCGI Production team as a Transcriber, managing files and maintaining accuracy while effectively balancing responsibilities with my college studies.
              </p>
            </div>
            <div className="resume-wrap ftco-animate">
              <span className="date">2023-2024</span>
              <h2>Project Manager in IT Marketing</h2>
              <span className="position">ICT Week 2023-2024</span>
              <p className="mt-4">
                Led a team in planning and executing marketing strategies for ICT Week 2023-2024, focusing on promoting technology and innovation through effective project management and team collaboration.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-6 text-center ftco-animate">
            <p>
              <a
                href="RESUME.pdf"
                download="RESUME.pdf"
                className="btn btn-primary py-3 px-4 small-btn"
              >
                Download CV
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="ftco-section" id="services-section">
      <div className="container">
        <div className="row justify-content-center py-5 mt-5">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <h1 className="big big-2">Hobbies</h1>
            <h2 className="mb-4">Hobbies</h2>
            <p>
              Outside academics, I enjoy dancing, cooking, and practicing calligraphy and sketching as creative outlets. <br />I also value rest and relaxation—sleeping helps me recharge and stay productive.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 text-center d-flex ftco-animate">
            <a href="#" className="services-1">
              <span className="icon">
                <i className="fi fi-rr-dance"></i>
              </span>
              <div className="desc">
                <h3 className="mb-5">Dancing</h3>
              </div>
            </a>
          </div>
          <div className="col-md-4 text-center d-flex ftco-animate">
            <a href="#" className="services-1">
              <span className="icon">
                <i className="fi fi-rr-knife-fork"></i>
              </span>
              <div className="desc">
                <h3 className="mb-5">Cooking</h3>
              </div>
            </a>
          </div>
          <div className="col-md-4 text-center d-flex ftco-animate">
            <a href="#" className="services-1">
              <span className="icon">
                <i className="fi fi-rr-pen-nib"></i>
              </span>
              <div className="desc">
                <h3 className="mb-5">Calligraphy</h3>
              </div>
            </a>
          </div>
          <div className="col-md-4 text-center d-flex ftco-animate">
            <a href="#" className="services-1">
              <span className="icon">
                <i className="fi fi-rr-pencil"></i>
              </span>
              <div className="desc">
                <h3 className="mb-5">Sketching</h3>
              </div>
            </a>
          </div>
          <div className="col-md-4 text-center d-flex ftco-animate">
            <a href="#" className="services-1">
              <span className="icon">
                <i className="fi fi-rr-bed-alt"></i>
              </span>
              <div className="desc">
                <h3 className="mb-5">Sleeping</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="ftco-section" id="skills-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <h1 className="big big-2">Skills</h1>
            <h2 className="mb-4">My Skills</h2>
            <p>
              Here are the tools and project areas I specialize in and truly enjoy working with.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate">
              <h3>Communication</h3>
              <div className="progress">
                <div
                  className="progress-bar color-1"
                  role="progressbar"
                  aria-valuenow={85}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "85%" }}
                >
                  <span>85%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate">
              <h3>Figma</h3>
              <div className="progress">
                <div
                  className="progress-bar color-2"
                  role="progressbar"
                  aria-valuenow={95}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "95%" }}
                >
                  <span>95%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate">
              <h3>Jira</h3>
              <div className="progress">
                <div
                  className="progress-bar color-3"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "80%" }}
                >
                  <span>80%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate">
              <h3>Python</h3>
              <div className="progress">
                <div
                  className="progress-bar color-4"
                  role="progressbar"
                  aria-valuenow={70}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "70%" }}
                >
                  <span>70%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate">
              <h3>HTML</h3>
              <div className="progress">
                <div
                  className="progress-bar color-5"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "80%" }}
                >
                  <span>80%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate">
              <h3>SQL</h3>
              <div className="progress">
                <div
                  className="progress-bar color-6"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "80%" }}
                >
                  <span>80%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="ftco-section ftco-project" id="projects-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <h1 className="big big-2">Projects</h1>
            <h2 className="mb-4">Projects</h2>
            <p>
              This section highlights a collection of my completed projects — from team-led initiatives and academic works to creative outputs. <br />Each project reflects my growth, leadership, and passion for organizing, managing, and bringing ideas to life.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div
              className="project img ftco-animate d-flex justify-content-center align-items-center"
              style={{ backgroundImage: "url(images/basabata.jpg)" }}
            >
              <div className="overlay" />
              <div className="text text-center p-4">
                <h3>
                  <a href="#">Basa Bata App</a>
                </h3>
                <span>Basa Bata is a reading assistance application designed to help students understand complex terms in El Filibusterismo by providing word meanings and references for places and people, enhancing comprehension.</span>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div
              className="project img ftco-animate d-flex justify-content-center align-items-center"
              style={{ backgroundImage: "url(images/hi_baby-project.png)" }}
            >
              <div className="overlay" />
              <div className="text text-center p-4">
                <h3>
                  <a href="#">Hi, Baby! E-commerce</a>
                </h3>
                <span>Hi, Baby! — An e-commerce website designed to provide a seamless online shopping experience for baby essentials. Built with a focus on user-friendly navigation and clean interface design using <strong>Figma</strong>, the project emphasized usability, product presentation, and efficient user flow.</span>
              </div>
            </div>
          </div>
          <div className="col-md-8">
          
            <div
              className="project img ftco-animate d-flex justify-content-center align-items-center"
              style={{ backgroundImage: "url(images/image_3.jpg)" }}
            >
              <div className="overlay" />
              <div className="text text-center p-4">
                <h3>
                  <a href="#">Instructor-Centered Classroom Monitoring and Attendance System</a>
                </h3>
                <span>A platform we are currently developing to help instructors efficiently manage attendance and classroom activities.</span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="project img ftco-animate d-flex justify-content-center align-items-center"
                  style={{ backgroundImage: "url(images/dashplate.jfif)" }}
                >
                  <div className="overlay" />
                  <div className="text text-center p-4">
                    <h3>
                      <a href="#">Dashplate</a>
                    </h3>
                    <span>Dashplate — A food ordering app designed in <strong>Figma</strong>, focused on simple navigation and a smooth user experience.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      className="ftco-section contact-section ftco-no-pb"
      id="contact-section"
    >
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <h1 className="big big-2">Contact</h1>
            <h2 className="mb-4">Contact Me</h2>
            <p>
              Feel free to reach out for collaborations, project inquiries, or just to connect!
            </p>
          </div>
        </div>
        <div className="row d-flex contact-info mb-5">
          <div className="col-md-6 col-lg-3 d-flex ftco-animate">
            <div className="align-self-stretch box p-4 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
               <i className="fab fa-linkedin fa-2x"style={{ color: '#f9a825' }}></i>
              </div>
              <h3 className="mb-4">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/jamela-fernandez-55b962300/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
                style={{ color: '#f9a825', fontWeight: 'bold' }}
              >
              Jamela Fernandez
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex ftco-animate">
            <div className="align-self-stretch box p-4 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <i className="fa-brands fa-instagram fa-2x" style={{ color: '#f9a825' }}></i>
              </div>
              <h3 className="mb-4">Instagram</h3>
              <p>
                <a
                  href="https://www.instagram.com/jamela_fernandez_progreso/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                  style={{ color: '#f9a825', fontWeight: 'bold' }}
                  >
                  jamela_fernandez_progreso
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex ftco-animate">
            <div className="align-self-stretch box p-4 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <i className="fa-solid fa-envelope fa-2x" style={{ color: '#f9a825' }}></i>
              </div>
              <h3 className="mb-4">Email Address</h3>
              <p>
                <a
                  href="mailto:jamela.fernandez.29@gmail.com"
                  className="text-decoration-none"
                  style={{ color: '#f9a825', fontWeight: 'bold' }}
                >
                jamela.fernandez.29@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex ftco-animate">
            <div className="align-self-stretch box p-4 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                 <i className="fa-brands fa-github fa-2x" style={{ color: '#f9a825' }}></i>
              </div>
              <h3 className="mb-4">GitHub</h3>
              <p>
                <a
                  href="https://github.com/j4melaF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                  style={{ color: '#f9a825', fontWeight: 'bold' }}
                  >
                  j4melaF
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="row no-gutters block-9">
          <div className="col-md-6 order-md-last d-flex">
            <form action="#" className="bg-light p-4 p-md-5 contact-form">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
              <div className="form-group">
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={7}
                  className="form-control"
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  defaultValue="Send Message"
                  className="btn btn-primary py-3 px-5"
                />
              </div>
            </form>
          </div>
          <div className="col-md-6 d-flex">
            <div
              className="img"
              style={{ backgroundImage: "url(images/ictweek.jpg)" }}
            />
          </div>
        </div>
      </div>
    </section>
    <footer className="ftco-footer ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">About</h2>
              <p>
                “Every expert was once a beginner.” br
                <br />To become a reliable Project Manager who supports the team, keeps projects on track, and helps turn ideas into successful results.
              </p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li className="ftco-animate">
                  <a href="#">
                    <span className="icon-github" />
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="#">
                    <span className="icon-facebook" />
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="#">
                    <span className="icon-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Links</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2" />
                    Home
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2" />
                    About
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2" />
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2" />
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2" />
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon icon-map-marker" />
                    <span className="text">
                      Apalit, Pampanga
                    </span>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon icon-phone" />
                      <span className="text">09292026889</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
</>
  )
}

export default App;