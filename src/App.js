
import Home from '../src/pages/Home/index'

import { Provider } from 'react-redux'
import { Store } from './redux-store/store'
function App() {
  return (
    <Provider store={Store}>
    
      <Home />
      <div style={{ textAlign: 'center', justifyContent: 'center', marginBottom: 30, marginTop:30, color: 'white' }}>
                
            </div>
    </Provider>
  );
}

export default App;
