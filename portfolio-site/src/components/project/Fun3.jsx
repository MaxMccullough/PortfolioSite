import { Subtitles } from '@mui/icons-material';
import './project.scss'
//import Image from 'mui-image'


export default function Fun3() {
  return (
    <div className='intro'>
      <div className="text">
        <div className="title">
        Electrocardiogram Project
        </div>
        <br></br>
        For this project a group of two classmates and I designed, built and tested an Electrocardiogram.
        <br/><br/>
        To achieve this the problem had to be broken down into different parts so they could be addressed individually. The main parts included a power supply to provide the correct amount of voltage to the rest of the subsystems, an Instrumentation Amplifier to measure the difference between the two input signals, an Antialiasing Filter to get  rid of the unwanted frequencies, and Finally an Isolator to product the rest of the circuit from other signals.
        <br/><br/>
        Please consider taking a look at the complete documentation of this project to learn more about the experience that I have.
        <br/><br/>
        <div className="subTitle">Front of Board</div>
        <img src="/assets/fun3front.png" alt=""/>
        <div className="subTitle">Back of Board</div>
        <img src="/assets/fun3back.png" alt=""/>
        <div className="subTitle">Circuit Schematic</div>
        <img src="/assets/fun3schem.png" alt=""/>

      </div>

    </div>
  );
}