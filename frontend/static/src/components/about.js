import {Component} from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  FaGlobeAmericas, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import about_kate from './about/about_kate1.JPG';

class About extends Component{
  render(){
    return(
      <div className="container card-container mt-2">
        <Card className="mb-2" bg="dark" text="white" style={{ width: '18rem', textAlign:"center" }}>
          <Card.Img variant="top" src={about_kate} alt="about Kate" />
          <Card.Body>
          <Card.Title>Kate Franks</Card.Title>
          <Card.Text>&lt;software developer/&gt;</Card.Text>
          <Card.Text><p><a href="http://linkedin.com/in/kateloves2code" target="_blank" rel="noreferrer">
          <FaLinkedin/> /in/kateloves2code</a></p></Card.Text>
          <Card.Text><p><a href="http://www.kateloves2code.com" target="_blank" rel="noreferrer">
          <FaGlobeAmericas/> kateloves2code.com</a></p></Card.Text>
          <Card.Text><p><a href="http://github.com/katefranks" target="_blank" rel="noreferrer">
          <FaGithub/> github.com/katefranks</a></p></Card.Text>
          <Card.Text ><p><a href="http://www.instagram.com/kateloves2code/" target="_blank" rel="noreferrer">
          <FaInstagram/> kateloves2code</a></p></Card.Text>
          </Card.Body>
        </Card>
      </div>

    )
  }
}

export default About;
