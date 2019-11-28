import moment from 'moment';


export const uuid4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}


// Formats date in the form the PostgreSQL accepts:
// "YYYY, MM, DD"
export const formatDate = (date) => {
  if(moment(date).isValid()){
    return moment(this.state.completionDate).format("YYYY, MM, DD")
  }
  return null;
};

// export { formatDate };