export const dateFormatter = (value: any) => {
  const date = new Date(value);
  // Get the year, month, and day
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2); // Months are zero based
  const day = ("0" + date.getDate()).slice(-2);

  const formattedDate = `${day}-${month}-${year}`;
  return formattedDate;
};
