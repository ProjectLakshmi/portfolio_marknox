
import './App.scss';
import {Route,Routes,useLocation} from 'react-router-dom'
import About from './containers/about';
import Home from './containers/home';
import Contact from './containers/contact';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Navbar from './components/navbar';
import Particles  from 'react-tsparticles';
import {loadFull} from 'tsparticles';
import particles from './utils/particles';

function App() {
  const location=useLocation();
  console.log(location)

  const handleInit= async (main)=>{
    await loadFull(main)
  }
  const renderParticlesHomepage=location.pathname==='/';

  return (
    <div className="App">
      {
        renderParticlesHomepage && <Particles  id='particles' options={particles} init={handleInit}/>
      }
      
      <Navbar />
      <div className='App__main-page-content'>
      <Routes>
        <Route index path='/' element={<Home/>} />
        <Route index path='/about' element={<About/>} />
        <Route index path='/contact' element={<Contact/>} />
        <Route index path='/portfolio' element={<Portfolio/>} />
        <Route index path='/skills' element={<Skills/>} />
        <Route index path='/resume' element={<Resume/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
