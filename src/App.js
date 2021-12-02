import logo from './logo.svg';
import './App.css';
import SideBar from './Components/SideBar/SideBar';
import Components from './Components/Components';
import 'bootstrap/dist/css/bootstrap.min.css';
import ParticleBackground from './Components/ParticleBackground';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className='app'>
      <ParticleBackground></ParticleBackground>
      <SideBar></SideBar>
      <Components></Components>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
