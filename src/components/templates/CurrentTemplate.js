import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTemplatePositions } from '../../actions';

// import { createStore } from 'redux';


class TemplateTasks extends Component {
  componentDidMount(){
    // console.log("id: " + this.props.match.params.id);
    this.props.getTemplatePositions(this.props.match.params.id);
  }


  renderTemplateTasks(){
    // console.log(this.props.currentTemplate);

    return this.props.currentTemplate.positions.map((position) => {
      return (
          <li key={position.position_id}>
            {position.task_description}
          </li>
      );
    });

  }


  render(){
    // console.log(this.props);
    const {currentTemplate} = this.props;

    if (!currentTemplate.positions){
      // console.log("loading");
      return(
        <div>Loading...</div>
      )
    }

    return(
      <div>
        {this.renderTemplateTasks()}
      </div>
    );
  }

}


function mapStateToProps(state){
  // console.log({currentTemplate});
  return { currentTemplate: state.currentTemplate };
}

export default connect(mapStateToProps, { getTemplatePositions })(TemplateTasks);

