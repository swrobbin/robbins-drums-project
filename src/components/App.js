import '../App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './Navbar';
import Home from './Home';
import Instruments from './Instruments';
import Instrument from './Instrument';
import Contact from './Contact';
import InstrumentForm from './InstrumentForm';
import InstrumentEditForm from './InstrumentEditForm';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/instruments' element={<Instruments/>}/>
        <Route path='/instruments/:id' element={<Instrument/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path="/instruments/new" element={<InstrumentForm/>}/>
        <Route path="/instruments/:id/edit" element={<InstrumentEditForm/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
