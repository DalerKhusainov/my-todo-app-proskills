//////////////////////////////////////////////////////////////////////
///// THIS FUNCTION IS CONVERTING THE DATE FROM DatePicker COMPONENT
///// USING IN ContentArea.jsx COMPONENT (2 places)
export function formatDate(date) {
  const fullDate = date;
  const year = fullDate.slice(0, 4);
  const month = fullDate.slice(5, 7);
  const day = fullDate.slice(-2);
  const newformatedDate = `${day}.${month}.${year}`;
  return newformatedDate;
}

///// THIS FUNCTION IS CONVERTING THE DATE TO OPPOSITE formatDate FUNCTION
///// USING IN DatePickerEdit.jsx COMPONENT  (1 place)
export function deFormatDate(date) {
  const fullDate = date;
  const year = fullDate.slice(-4);
  const month = fullDate.slice(3, 5);
  const day = fullDate.slice(0, 2);
  const newDeFormatedDate = `${year}-${month}-${day}`;
  return newDeFormatedDate;
}
