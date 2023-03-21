import insta from './Icons/insta.png'
import linkedin from './Icons/linkedin.png'
import vector from './Icons/Vector.png'
import logo from './Synergy SIddharth IAS Logo Original.jpg'
import ima from './undraw_under_construction_46pa 1.png'
import './App.css';

function App() {
  return (
    <div className="container">
    <div className='logo'><img src={logo} className='logo_i'/>
    <text >SYNERGY SIDDHARTH IAS ACADEMY </text></div>
    <div className='hero'>
      <text >
      This website is getting crafted with Love
      </text>
      <img src={ima} className='hero_i'></img>
    </div>
    <div className='text_m'>
      From Melospiza
    </div>
    <div className='socialsbox'>
    <div className='socials'>
      <a href='https://twitter.com/Melospiza_?t=bszFGoTTi0Cqa6ENZTtXTw&s=09'>
      <img src={vector}/>
      </a>
      <a href='https://www.instagram.com/melospiza.team/'>
      <img src={insta}/>
      </a>
      <a href='https://www.linkedin.com/company/melospiza/'>
      <img src={linkedin}/>
      </a>
    </div>
    </div>
    </div>
    
  );
}

export default App;
