import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Skills.css';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import AppsIcon from '@mui/icons-material/Apps';

export const Skills = () => {
    const [listMode, setListMode] = useState(false);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn relative">
                            <h2>Tools & Technologies</h2>
                            <p>
                                Technologies and stacks I have utilized and am comfortable and familiar working with.                         
                            </p>

                            <button onClick={() => setListMode(!listMode)} className="toggle-btn">
                                {!listMode ? <AppsIcon /> : <ViewCarouselIcon />}
                            </button>
                            <div className={listMode ? "skill-slider hide" : "skill-slider"}>
                                <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme">
                                    <div className="item">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5 Logo" />
                                        <h5>HTML5</h5>
                                    </div>
                                    <div className="item">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3 Logo" />
                                        <h5>CSS3</h5>
                                    </div>
                                    <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                                        <h5>Tailwind</h5>
                                    </div>
                                    <div className="item">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
                                    <h5>BootStrap</h5>
                                    </div>
                                    <div className="item">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript Logo" />
                                        <h5>JavaScript</h5>
                                    </div>
                                    <div className="item">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python Logo" />
                                        <h5>Python</h5>
                                    </div>
                                    <div className='item'>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" alt="PHP Logo" />
                                        <h5>PHP</h5>
                                    </div>
                                    <div className="item">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React Logo" />
                                        <h5>React</h5>
                                    </div>
                                    <div className="item">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js Logo" />
                                        <h5>Node.js</h5>
                                    </div>
                                    <div className="item">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="Express Logo" />
                                        <h5>Express</h5>
                                    </div>
                                    <div className="item">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" alt="Flask Logo" />
                                        <h5>Flask</h5>
                                    </div>
                                    <div className='item'>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
                                    <h5>MySQL</h5>
                                    </div>
                                    <div className="item">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB Logo" />
                                        <h5>MongoDB</h5>
                                    </div>
               
                                    <div className="item">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" alt="Firebase Logo" />
                                        <h5>Firebase</h5>
                                    </div>
                                </Carousel>
                            </div>
                            <div className={listMode ? "list-skills" : "list-skills hide"}>
                                <ul>
                                    <li>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5 Logo" />
                                        <span>HTML5</span>
                                    </li>
                                    <li>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3 Logo" />
                                        <span>CSS3</span>
                                    </li>
                                    <li>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                                        <span>Tailwind</span>
                                    </li>
                                    <li>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
                                        <span>BootStrap</span>
                                    </li>
                                    <li>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript Logo" />
                                        <span>JavaScript</span>
                                    </li>
                                    <li>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python Logo" />
                                        <span>Python</span>
                                    </li>
                                    <li>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" alt="PHP Logo" />
                                        <span>PHP</span>
                                    </li>
                                    <li>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React Logo" />
                                        <span>React</span>
                                    </li>
                                    <li>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js Logo" />
                                        <span>Node.js</span>
                                    </li>
                                    <li>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="Express Logo" />
                                        <span>Express</span>
                                    </li>
                                    <li>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" alt="Flask Logo" />
                                        <span>Flask</span>
                                    </li>
                                    <li>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
                                        <span>MySQL</span>
                                    </li>
                                    <li>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB Logo" />
                                        <span>MongoDB</span>
                                    </li>
                                    <li>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" alt="Firebase Logo" />
                                        <span>Firebase</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
