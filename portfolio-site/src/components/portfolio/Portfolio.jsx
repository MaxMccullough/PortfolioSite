import './portfolio.scss'
import { Link } from "react-router-dom";


export default function Portfolio() {
  return (
    <div className='intro'>
      <div className="text">
        <div className="title">
          Now here is the fun stuff
        </div>
        I've provided a list of some of the projects tat I have worked on, sorted by field, so you can get more a sense of 
        what I am like as an engineer. Some of these were made a school other in my free time. 
        <div className='subTitle'><br/>
          Hardware Projects
        </div><br/>
        <div className='subTitle'><br/>
          Software Projects
        </div><br/>
        <p><Link to="/projects/thisSite" style={{ textDecoration: 'none', fontSize: '20px', color: 'white', fontWeight: '300' }}>This Website&ensp;</Link></p>
        <p><Link to="/projects/f1tenth" style={{ textDecoration: 'none', fontSize: '20px', color: 'white', fontWeight: '300' }}>F1tenth&ensp;</Link></p>

      </div>

    </div>
  );
}
