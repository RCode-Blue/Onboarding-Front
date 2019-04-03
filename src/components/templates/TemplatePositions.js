import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTemplatePositions } from '../../actions';


class TemplateTasks extends Component {
  componentDidMount(){
    // console.log("props: " + this.props);
    // console.log("State: " + this.state);
    console.log("this.props.positions: " + this.props.positions);
    // this.props.getTemplateTasks(this.props.id);
    // console.log("this.props.id: " + this.props.id);
  }

  renderTemplateTasks(){
    return (
      <div>
        <h2>Template Tasks</h2>
      </div>
    )
  }


  render(){
    return(
      <div>
        {this.renderTemplateTasks()}
      </div>
    );
  }



}

function mapStateToProps({state, positions}){
  return { positions };
}

export default connect(mapStateToProps, { getTemplatePositions })(TemplateTasks);

