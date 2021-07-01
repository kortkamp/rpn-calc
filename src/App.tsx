import {Display } from './components/Display'
import { Keyboard } from './components/Keyboard'

import './styles/calc.scss'

function App() {
  return (
    <div className='calc'>

      <Display />
      <Keyboard />
      
    </div>
  );
}

export default App;
