import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAllTasks } from '../../actions';

class AllTasks extends Component {
  componentDidMount(){
    // console.log(this.props.tasks);
    this.props.getAllTasks();
  }

  renderTasks(tasks){
    return tasks.tasks.map((task) => {
      const editTaskUrl = '';
      return(
        <div key={task.id}>
          <div className="card-content green lighten-5 row"
            style={{"marginBottom": "3px"}}>
              <div className="col s12">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        {task.description}
                      </td>
                      <td width="60">
                        Edit
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
          </div>
        </div>
      )
    });
  }

  render(){
    const { tasks } = this.props;
    // console.log(tasks);
    if(!tasks){
      return(
        <div>
          <i>Tasks loading...</i>
        </div>
      );
    }
    // console.log(tasks);
    return (
      <div>
        {this.renderTasks(tasks)};
      </div>
    );
  }
}

function mapStateToProps(state){
  // console.log(state);
  return {tasks: state.tasks };
}

export default connect(mapStateToProps, { getAllTasks }) (AllTasks);
// export default AllTasks;