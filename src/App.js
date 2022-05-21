import Header from './sections/header';
import Home from './sections/home';
import Projects from './sections/projects';
import Skills from './sections/skills';

function App() {
  return (
    <div>
      <div className='bg-gradient-to-r from-blue-400 to-emerald-400'>
      <Home />
      </div>
      <div className='bg-gray-900'>
      <Skills />
      <Projects />
      </div>
    </div>
  );
}

export default App;
