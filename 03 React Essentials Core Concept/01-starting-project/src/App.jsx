import CoreConcepts from './components/CoreConcepts'
import Examples from './components/Examples'

import Header from './components/Header/Header.jsx';

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts></CoreConcepts>
        <Examples></Examples>

      </main>
    </div>
  );
}

export default App;