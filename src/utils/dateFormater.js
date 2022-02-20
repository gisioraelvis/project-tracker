//Given a date string return time in 2017-06-01 format
export const formatDate = (date) => {
  let d = new Date(date);
  let month = d.getMonth() + 1;
  let day = d.getDate();
  let year = d.getFullYear();

  return `${year}-${month < 10 ? `0${month}` : month}-${
    day < 10 ? `0${day}` : day
  }`;
};
