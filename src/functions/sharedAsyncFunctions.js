import axios from 'axios'

export const fetchInstructorDetails = async(id) => {
  console.log(id);
  // console.log(this.props.instructor.given_name + " " + this.props.instructor.family_name)
  let instructor = await axios.get('/api/user/'+id)
  
  return instructor;
}
