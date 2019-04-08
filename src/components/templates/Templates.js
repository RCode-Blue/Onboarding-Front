import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTemplates, getTemplatePositions } from '../../actions';

// #region
class TemplateList extends Component {   

  componentDidMount(){
    this.props.getTemplates();
  }

  renderTemplates(){
    // console.log(this.props.templates);
    return this.props.templates.map(template => {
      // console.log(template);
      const templateUrl = `/dashboard/templates/${template.id}/tasks`;

      return(
        <div
        key={template.id}>
          <div className="card-content">
            <div className="row deep-orange lighten-5">
              <div className="col s12">
                
                <ul 
                className="card-title"
                onClick = {() => {
                  this.props.getTemplatePositions(template.id);
                  this.props.history.push(`/dashboard/templates/${template.id}/tasks`);
                }}>
                  {template.template_name}
                </ul>
                
                <div>
                  <p>
                  {template.description}
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
    <div>
      {this.renderTemplates()}
    </div>
    );
  }
}


function mapStateToProps(state){
  // console.log({templates});
  return { templates: state.templates };
}


export default connect(mapStateToProps, { getTemplates, getTemplatePositions })(TemplateList);

