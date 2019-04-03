import React from 'react';
import TemplateList from './templates/Templates';


const Dashboard = (props) => {
  // console.log(props)
  return(
    <div>
      <TemplateList {...props} />
    </div>
  );
};



export default Dashboard;