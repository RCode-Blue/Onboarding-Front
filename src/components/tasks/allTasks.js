import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAllTasks } from '../../actions';

import CurrentTask from './currentTask';
// import Select from 'react-select';


class AllTasks extends Component {
  
  componentDidMount(){
    // console.log(this.props.tasks);
    this.props.getAllTasks();
  }

  state = {
    isEdit: false,
    description: ''
  }


  handleClick = (thisId) => {
    console.log(thisId);
  }


  toggleEdit = () => {
    console.log();
    this.setState({
      isEdit: !this.state.isEdit
    })
  }

  // renderTask(task){
  //   // console.log(this);
  //   return(
  //     <div key={task.id}>
  //       <div className="card-content green lighten-5 row"
  //         style={{"marginBottom": "3px"}}>
  //           <div className="col s12">
  //             <table>
  //               <tbody>
  //                 <tr>
  //                   <td>
  //                     {task.description}
  //                   </td>
  //                   <td width="60">
  //                   <button
  //                   id = {task.id}
  //                   type = 'button'
  //                   onClick={
  //                     (
  //                       (e) => this.handleClick(task.description)
  //                     )
  //                   }>
  //                     Edit
  //                   </button>
  //                   </td>
  //                 </tr>
  //               </tbody>
  //             </table>
  //           </div>
  //       </div>
  //     </div>
  //   )
  // }

  renderHeader(){
    return(
      <div>
        <div className="card-content light-green lighten-4 row col s12">
          <table>
            <thead>
              <tr>
                <td width="350">
                  Description
                </td>
                <td width="100">Instructor</td>
                <td width="50">Actions</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    )
  }

  renderSingleTask(task){
    return(
      <div>
        <CurrentTask task={task}/>
      </div>
    );
  }

  renderTasks(tasks){
    return tasks.tasks.map((task) => {
      return(
        <div key={task.id}>
          {this.renderSingleTask(task)}
        </div>
      )
    });
  }

 

  render(){
    const { tasks } = this.props;
    // console.log(this.props);
    // console.log(this.state);
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
        {this.renderHeader()}        
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