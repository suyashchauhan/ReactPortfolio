import React from 'react';
//import logo from './logo.svg';
import Hero from './image3.jpg';
import './App.css';
import { TweenLite, Power2 } from 'gsap/all';

// for the image credit goes to
//import 'home' from '../public/home';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.myTween = null;
        this.myHeadline = null;
        this.mynav = null;
        this.myslider = null;

    }
    componentDidMount() {
        this.myTween = TweenLite.fromTo(this.mynav, 1.2, { y: '-100%' }, { y: '0%', ease: Power2.easeInOut })
        this.myTween = TweenLite.fromTo(this.myslider, 1.8, { x: '-100%' }, { x: '0%', ease: Power2.easeInOut })
        this.myTween = TweenLite.fromTo(this.myHeadline, 2, { opacity: 0 }, { opacity: 1 })
    }
    render() {
        return (
            <div className="App">
                <header>
                    <img src={Hero} alt="" />
                    <nav>
                        <h1 ref={headline => this.mynav = headline}>David</h1>
                        <ul>
                            <li><a href="#header">Home </a></li>
                            <li><a href="#work">Work</a></li>
                            <li> <a href="#about">About</a></li>
                        </ul>
                    </nav>
                    <section className="home">
                        <div className="hero" ref={hero => this.myHeadline = hero}>

                            <h1> Hey , I am David MiddleTon<br /><span>
                                I am a Professor at Harvard University</span></h1>
                        </div>
                    </section>
                </header>

                <div className="slider" ref={div => this.myslider = div}></div>

                <section className="about" id="about">
                    <div className="about-container">
                        <h1>About</h1>

                        <div className="about-child-container">
                            <div className="education">
                                <h2>Education</h2>
                                <div className="education-box">
                                    <i className="fa fa-graduation-cap"></i>
                                    <h4 className="title-of-education">Lorem Ipsum Dolor</h4>
                                    <p>2018 current<br />Btech Computer Engineering<br />Percentage </p>
                                </div>
                                <div className="education-box">
                                    <i className="fa fa-graduation-cap"></i>
                                    <h4 className="title-of-education">Lorem Ipsum Dolor</h4>
                                    <p>2018 current<br />Btech Computer Engineering<br />Percentage </p>
                                </div>
                                <div className="education-box">
                                    <i className="fa fa-graduation-cap"></i>
                                    <h4 className="title-of-education">Lorem Ipsum Dolor</h4>
                                    <p>2018 current<br />Btech Computer Engineering<br />Percentage </p>
                                </div>
                            </div>
                            <div className="experience">
                                <h2>Experience</h2>
                                <div className="education-box">
                                    <i className="fa fa-chevron-circle-right"></i>
                                    <h4 className="title-of-education">Lorem Ipsum Dolor</h4>
                                    <p>2018 current<br />Btech Computer Engineering<br />Percentage </p>
                                </div>
                                <div className="education-box">
                                    <i className="fa fa-chevron-circle-right"></i>
                                    <h4 className="title-of-education">Lorem Ipsum Dolor</h4>
                                    <p>2018 current<br />Btech Computer Engineering<br />Percentage </p>
                                </div>
                                <div className="education-box">
                                    <i className="fa fa-chevron-circle-right"></i>
                                    <h4 className="title-of-education">Lorem Ipsum Dolor</h4>
                                    <p>2018 current<br />Btech Computer Engineering<br />Percentage </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="work" id="work">

                    <div className="work-container">
                        <h1>Work</h1>
                        <div className="work-project">

                            <div className="work-hoverproject">
                                <div className="Iproject1">
                                    
                                    <h3 >Project1</h3>
                                    
                                    <p>Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Dicta eos quisquam
                            officia, aut laborum non ipsa?</p>
                                    <div className="hidden-box"></div>
                                </div>
                                <div className="work-onHover">
                                    <h3 className="work-onHover-text">View</h3>
                                </div>
                            </div>
                            <div className="work-hoverproject">
                                <div className="Iproject2">
                                    <h3>Project2</h3>
                                    <p>Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Dicta eos quisquam
                            officia, aut laborum non ipsa?</p>
                                    <div className="hidden-box"></div>
                                </div>
                                <div className="work-onHover">
                                    <h3 className="work-onHover-text">View</h3>
                                </div>
                            </div>
                            <div className="work-hoverproject">
                                <div className="Iproject3">
                                    <h3>Project3</h3>
                                    <p>Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Dicta eos quisquam
                            officia, aut laborum non ipsa?</p>
                                    <div className="hidden-box"></div>
                                </div>
                                <div className="work-onHover">
                                    <h3 className="work-onHover-text">View</h3>
                                </div>
                            </div>
                            <div className="work-hoverproject">
                                <div className="Iproject4">
                                    <h3>Project4</h3>
                                    <p>Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Dicta eos quisquam
                            officia, aut laborum non ipsa?</p>
                                    <div className="hidden-box"></div>
                                </div>
                                <div className="work-onHover">
                                    <h3 className="work-onHover-text">View</h3>
                                </div>
                            </div>
                            <div className="work-hoverproject">
                                <div className="Iproject5">
                                    <h3>Project5</h3>
                                    <p>Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Dicta eos quisquam
                            officia, aut laborum non ipsa?</p>
                                    <div className="hidden-box"></div>
                                </div>
                                <div className="work-onHover">
                                    <h3 className="work-onHover-text">View</h3>
                                </div>
                            </div>
                            <div className="work-hoverproject">
                                <div className="Iproject6">
                                    <h3>Project6</h3>
                                    <p>Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Dicta eos quisquam
                            officia, aut laborum non ipsa?</p>
                                    <div className="hidden-box"></div>
                                </div>
                                <div className="work-onHover">
                                    <h3 className="work-onHover-text">View</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <footer>
                    <div className="footer-container">
                        <div className="social-media">
                            <h3>Social Media</h3>
                            <a href={'https://twitter.com'}><i className="fa fa-twitter fa-2x"></i></a>
                            <a href={'https://instagram.com'}><i className="fa fa-instagram fa-2x"></i></a>
                            <a href={'https://facebook.com'}><i className="fa fa-facebook fa-2x"></i></a>
                        </div>
                        <div className="company-info">
                            <h3>Company Info</h3>
                            <ul>
                                <li>All Products</li>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                            </ul>

                        </div>
                        <div className="blog-posts">
                            <h3>Contact</h3>
                            <ul>
                                <li>Lorem Ipsum Dolor</li>
                                <li>Lorem Ipsum Dolor</li>
                                <li>Lorem Ipsum Dolor</li>
                                <li>Lorem Ipsum Dolor</li>
                                <li>Lorem Ipsum Dolor</li>
                            </ul>
                        </div>
                    </div>
                    <h4 className="copyright"><i className='fa fa-copyright'></i>2019 All Rights Reserved</h4>

                </footer>
            </div>
        )
    }
}
export default App;
