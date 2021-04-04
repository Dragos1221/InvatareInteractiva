import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loginpage from './pages/LoginPage';

export interface AppProps {
  
}
 
export interface AppState {
  
}
 
class App extends React.Component<AppProps, AppState> {
  render() { 
    return(
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Loginpage/>
          </Route>
          <Route exact path="/narwhal">
          <div>Ana</div>
          </Route>
          <Route exact path="/whale">
          <div>Maria</div>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
    
  )}
}
 
export default App;