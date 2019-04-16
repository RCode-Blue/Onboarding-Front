import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTemplatePositions } from '../../actions';



class TemplateTasks extends Component {
  componentDidMount(){
    // console.log("id: " + this.props.match.params.id);
    this.props.getTemplatePositions(this.props.match.params.id);
  }

  renderTemplateInfo(){
    // console.log(this.props);
    return (
      <div className="card-title">
        <div className="row deep-orange darken-4">
            <div style={{color: "white"}}>
              <h5>{this.props.currentTemplate.description}</h5>
            </div>
        </div>
      </div>
    )
  }

  renderTemplateTasks(){
    console.log(this.props);

    return this.props.currentTemplate.positions.map((position) => {
      return (
        <div key={position.position_id}
        className="card-stacked">
          <div className="card-content">
            <div className="row green lighten-5">
              <div className="col s12">
                <ul> {position.position_no}.   {position.task_description} </ul>
              </div>
            </div>
          </div>
        </div>
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
      );
    }

    return(
      <div>
        <div>
          {this.renderTemplateInfo()}
        </div>
        <div>
          {this.renderTemplateTasks()}
        </div>
      </div>
    );
  }

}


function mapStateToProps(state){
  // console.log({currentTemplate});
  return { currentTemplate: state.currentTemplate };
}

export default connect(mapStateToProps, { getTemplatePositions })(TemplateTasks);

