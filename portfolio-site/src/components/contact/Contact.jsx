import "./contact.scss"
//import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { LinkedIn, Email, Phone, GitHub } from '@mui/icons-material/';
export default function Contact() {
    return (
        <div className='intro'>
          <div className="text">
            <div className="title">
              Contact me here
            </div>
            <br/>
            I look forward to hearing from you!
            <br/><br/>
            <div className="icon"><div className="linkedIn"><LinkedIn size="large"/></div></div>
            <a href="http://www.linkedin.com/in/max-mccullough-264baa1b5"><div className="link">linkedIn.com</div></a><br/>
            <div className="icon"><div className="email"><Email/></div></div> 
            <a href="max.mccullough.va@gmail.com"><div className="link">max.mccullough.va@gmail.com</div></a><br/>
            <div className="icon"><div className="phone"><Phone/></div></div>
            (571) 447-8476<br/>
            <div className="icon"><div className="github"><GitHub/></div></div>
            <a href="https://github.com/MaxMccullough"><div className="link">github.com</div></a><br/>


            
            
    
          </div>
    
        </div>
      );
}