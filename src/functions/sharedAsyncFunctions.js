import axios from 'axios'

export const fetchInstructorDetails = async(id) => {
  console.log(id);
  // console.log(this.props.instructor.given_name + " " + this.props.instructor.family_name)
  let instructor = await axios.get('/api/user/'+id)
  // let instructor = await axios.get('https://onb0ardingapp.azurewebsites.net/api/user/'+id)
  // let instructor = await axios.get('https://localhost:5000/api/user/'+id)
  
  return instructor;
}
