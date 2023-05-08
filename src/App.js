import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import Comics from './components/comics';
import ComicsDetails from './components/ComicsDetails';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path="/" element={<Comics />} />
          <Route path="/details/:id" element={<ComicsDetails />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
