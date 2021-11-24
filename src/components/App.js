import '../App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './Navbar';
import Home from './Home';
import Instruments from './Instruments';
import Instrument from './Instrument';
import InstrumentForm from './InstrumentForm';
import InstrumentEditForm from './InstrumentEditForm';
import Brands from './Brands';
import Brand from './Brand';
import BrandForm from './BrandForm';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/instruments' element={<Instruments/>}/>
        <Route exact path='/brands' element={<Brands/>}/>
        <Route path='/instruments/:id' element={<Instrument/>}/>
        <Route path='/brands/:id' element={<Brand/>}/>
        <Route path="/brands/:brand_id/instruments/new" element={<InstrumentForm/>}/>
        <Route exact path="/brands/new" element={<BrandForm/>}/>
        <Route path="/instruments/:id/edit" element={<InstrumentEditForm/>}/>
        <Route path="/brands/:id/instruments/:id" element={<Instrument/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
