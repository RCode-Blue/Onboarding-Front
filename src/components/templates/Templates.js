import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { getTemplates, selectTemplate } from '../../actions';


// #region
class TemplateList extends Component {   

  componentDidMount(){
    this.props.getTemplates();
  }

  renderTemplates(){
    // console.log(this.props.templates);
    return this.props.templates.map(template => {
      // console.log(template);
      return(
        <div 
          className="card-darken-1" 
          key={template.id}>
          <div>
            
            <p 
              // onClick={() => {
              //   this.setState({
              //     template_id: template.id
              //   });
              //   this.props.history.push(`/dashboard/templates/${template.id}/tasks`)
              // }
              // }

              onClick = {() => this.props.clickTemplate(template)}

              className="card-title">{template.template_name}
            </p>

            <p className="card-content">
              {template.description}
            </p>
            
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


function mapStateToProps({templates}){
  // console.log(state);
  return { templates };
}


function mapDispatchToProps(dispatch){
  return bindActionCreators(
    { clickTemplate: selectTemplate }, dispatch
  );
}

//                                                                action          component
//                                                                  |                 |
// export default connect(mapStateToProps, mapDispatchToProps, { getTemplates })(TemplateList);
export default connect(mapStateToProps, { getTemplates })(TemplateList);
// #endregion



// #region
