import './project.scss'
import { Link } from "react-router-dom";



export default function Capstone() {
  return (
    <div className='intro'>
      <div className="text">
        <div className="title">
        Drum Robot Project
        </div>
        <br></br>
        This is a project that I am currently working on. The current plan is to build a device that can listen
        to a given song. Use Digital Signal Processing done on an Texas Instruments MSP430 to isolate the drum 
        parts from the audio signal. It will then control an a drum.
        <br/><br/>
        If you want to check in on the current progress of this project feel free reach out to me on
        <Link to="/contact" style={{ textDecoration: 'underline', fontSize: '20px', color: 'white' }}> the contact page.</Link>
        <br/><br/>
        <div className="subTitle">Picture</div>
        <img src="/assets/fun3front.pngd" alt=""/>
 

      </div>

    </div>
  );
}