import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import TemplateList from './templates/CurrentTemplate';
import SetsList from './sets/Sets';
import CurrentSequence from './sequences/CurrentSequence';

const TemplateNew = () => <h2>TemplateNew</h2>;


class App extends Component {

  componentDidMount() {
    // console.log(this.props);
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
            <Route exact path = "/tasklists" component={SetsList} />
            <Route path = "/tasklist/:id" component={CurrentSequence}></Route>
            <Route path="/templates/new" component={TemplateNew}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions)(App);