import './project.scss'
//import Image from 'mui-image'


export default function F1tenth() {
  return (
    <div className='intro'>
      <div className="text">
        <div className="title">
        F1tenth
        </div>
        <br></br>
        In this project I worked with a small team to develop code in ROS to drive a 1/10th scale RC 
        car drive autonomously. This involved processing and filtering data from a Lidar sensor and using 
        that input to make decions on steering and velocity output.
        <div className="imageContainer">
            <img src="/assets/car.jpg" alt=""/>
        </div>

      </div>

    </div>
  );
}