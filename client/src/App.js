import './App.css';
import LoginPage from './LoginPage';
import {Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <Switch>
       <Route exact path="/">
          <LoginPage />
       </Route>
     </Switch>
    </div>
  );
}

export default App;
