import { BrowserRouter } from 'react-router-dom';
import{About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from './components';

const App=()=> {


  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
          <div
          class="absolute inset-0 bg-black bg-opacity-80"
          ></div>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        {/* <Feedbacks/> */}
        <div className='relative z-0'>
          <Contact/>
          <StarsCanvas/>
        </div>
        
      </div>
    </BrowserRouter>
  )
}

export default App;

//npm install --legacy-peer-deps@react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom