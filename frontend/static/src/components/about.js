import {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { Button , Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  FaGlobeAmericas, FaLinkedin, FaInstagram, FaInstagramSquare } from 'react-icons/fa';

class About extends Component{
  render(){
    return(
      <div className="container" >
      <div id="about-container">
      <h2>Kate Franks</h2>
      <p>Software Developer</p>
      <p><a style={{color:"black"}} href="http://www.kateloves2code.com" target="_blank">
      <FaGlobeAmericas/> www.kateloves2code.com</a></p>

      <p><a style={{color:"black"}} href="http://linkedin.com/in/kateloves2code" target="_blank">
      <FaLinkedin/> linkedin.com/in/kateloves2code</a></p>

      <p><a style={{color:"black"}} href="https://www.instagram.com/kateloves2code/" target="_blank">
      <FaInstagram/>instagram.com/kateloves2code</a></p>

      </div>
      </div>
    )
  }
}

export default About;
