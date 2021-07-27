import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyles } from './GlobalStyles.js'
import Header from './components/Header'
import Section1 from './components/Section1'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <GlobalStyles />
      <div className="App">
        <Header />
        <Section1 />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
