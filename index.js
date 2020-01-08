import React, { Component } from 'react';
import { render } from 'react-dom';
import TopBar from './components/TopBar'
import Mix from './pages/Mix'
import Statistics from './pages/Statistics'
import Status from './pages/Status'
import './style.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
 

class App extends Component {
  state = { values: { pg: '', vg: '', nic: '' } }

  constructor() {
    super();
  }

  handleSetValues = values => this.setState({ values })

  handleSubmit = () => {
    console.log('api call or some')
  }

  handleCancel = () => {
    console.log('aaaaaaaaaa')
    this.setState({ values: { pg: '', vg: '', nic: '' } })
  }

  render() {
    return (
      <Router>
        <nav>
          <TopBar />
        </nav>
        <main className="basic-container">
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/status">
              <Status
                values={this.state.values}
                onCancel={this.handleCancel} />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
            <Route path="/">
              <Mix
                values={this.state.values}
                onSetValues={this.handleSetValues}
                onSubmit={this.handleSubmit} />
            </Route>
          </Switch>
        </main>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
