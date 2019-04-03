import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import TemplateList from './templates/TemplatePositions';


const TemplateNew = () => <h2>TemplateNew</h2>;

const TempComp = (props) => console.log(props) || <h2>Template tasks</h2>

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return(
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path = "/dashboard" component={Dashboard} />
            <Route exact path = "/dashboard/templates/:id/tasks" component={TemplateList} />
            <Route path="/templates/new" component={TemplateNew}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions)(App);