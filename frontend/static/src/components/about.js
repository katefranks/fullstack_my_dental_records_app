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

// <div className="container card-container mt-2">
//   <Card className="mb-2" bg="dark" text="white" style={{ width: '18rem', textAlign:"center" }}>
//     <Card.Img variant="top" src={about_kate} alt="about Kate" />
//     <Card.Body>
//       <Card.Title>Kate Franks</Card.Title>
//       <Card.Text>&lt; software developer /&gt;</Card.Text>
//     </Card.Body>
//     <Card.Body>
//     <Card.Text><p><a href="http://www.kateloves2code.com" target="_blank">
//     <FaGlobeAmericas/> kateloves2code.com</a></p></Card.Text>
//     <Card.Text><p><a href="http://linkedin.com/in/kateloves2code" target="_blank">
//     <FaLinkedin/> linkedin.com/in/kateloves2code</a></p></Card.Text>
//     <Card.Text><p><a href="http://github.com/katefranks" target="_blank">
//     <FaGithub/> github.com/katefranks</a></p></Card.Text>
//     <Card.Text><p><a href="http://www.instagram.com/kateloves2code/" target="_blank">
//     <FaInstagram/> instagram.com/kateloves2code</a></p></Card.Text>
//     </Card.Body>
//   </Card>
// </div>
//
// <div className="container card-container mt-2">
//   <Card className="mb-2" bg="dark" text="white" style={{ width: '18rem', textAlign:"center" }}>
//     <Card.Img variant="top" src={about_kate} alt="about Kate" />
//     <Card.Body>
//       <Card.Title>Kate Franks</Card.Title>
//       <Card.Text>&lt; software developer /&gt;</Card.Text>
//     </Card.Body>
//     <ListGroup className="list-group-flush ">
//       <ListGroupItem className="bg-dark"><p><a href="http://www.kateloves2code.com" target="_blank">
//       <FaGlobeAmericas/> kateloves2code.com</a></p></ListGroupItem>
//       <ListGroupItem className="bg-dark"><p><a href="http://linkedin.com/in/kateloves2code" target="_blank">
//       <FaLinkedin/> linkedin.com/in/kateloves2code</a></p></ListGroupItem>
//       <ListGroupItem className="bg-dark"><p><a href="https://www.instagram.com/kateloves2code/" target="_blank">
//       <FaInstagram/> instagram.com/kateloves2code</a></p></ListGroupItem>
//     </ListGroup>
//   </Card>
// </div>




//
// `< software developer />`

// <div id="about-container">
// <h2>Kate Franks</h2>
// <p>Software Developer</p>
// <p><a style={{color:"black"}} href="http://www.kateloves2code.com" target="_blank">
// <FaGlobeAmericas/> www.kateloves2code.com</a></p>
//
// <p><a style={{color:"black"}} href="http://linkedin.com/in/kateloves2code" target="_blank">
// <FaLinkedin/> linkedin.com/in/kateloves2code</a></p>
//
// <p><a style={{color:"black"}} href="https://www.instagram.com/kateloves2code/" target="_blank">
// <FaInstagram/>instagram.com/kateloves2code</a></p>
// </div>


// <ListGroup className="list-group-flush ">
//   <ListGroupItem className="bg-dark"><p><a href="http://www.kateloves2code.com" target="_blank">
//   <FaGlobeAmericas/> kateloves2code.com</a></p></ListGroupItem>
//
//   <ListGroupItem className="bg-dark"><p><a href="http://linkedin.com/in/kateloves2code" target="_blank">
//   <FaLinkedin/> linkedin.com/in/kateloves2code</a></p></ListGroupItem>
//
//   <ListGroupItem className="bg-dark"><p><a href="http://github.com/katefranks" target="_blank">
//   <FaGithub/> github.com/katefranks</a></p></ListGroupItem>
// </ListGroup>
