//////////////////////////////////////////////////////////////////////
///// THIS FUNCTION CONVERTS THE DATE FROM DatePicker COMPONENT
///// IT'S BEING USED IN ContentArea.jsx COMPONENT (2 places)
export function formatDate(date) {
  const fullDate = date;
  const year = fullDate.slice(0, 4);
  const month = fullDate.slice(5, 7);
  const day = fullDate.slice(-2);
  const newformatedDate = `${day}.${month}.${year}`;
  return newformatedDate;
}

///// THIS FUNCTION CONVERTS THE DATE TO OPPOSITE formatDate FUNCTION
///// IT'S BEING USED IN DatePickerEdit.jsx COMPONENT  (1 place)
export function deFormatDate(date) {
  const fullDate = date;
  const year = fullDate.slice(-4);
  const month = fullDate.slice(3, 5);
  const day = fullDate.slice(0, 2);
  const newDeFormatedDate = `${year}-${month}-${day}`;
  return newDeFormatedDate;
}

///// THIS FUNCTION CONVERT A DIGIT FORMAT MONTH TO LETTERS
///// IT'S BEING USED IN Todo.jsx COMPONENT (1 place)
export function convertMonths(date) {
  const day = date.slice(0, 2);
  const month = date.slice(3, 5);
  const year = date.slice(-4);
  if (month === "01") return `${day} Jan ${year}`;
  if (month === "02") return `${day} Feb ${year}`;
  if (month === "03") return `${day} Mar ${year}`;
  if (month === "04") return `${day} Apr ${year}`;
  if (month === "05") return `${day} May ${year}`;
  if (month === "06") return `${day} Jun ${year}`;
  if (month === "07") return `${day} Jul ${year}`;
  if (month === "08") return `${day} Aug ${year}`;
  if (month === "09") return `${day} Sep ${year}`;
  if (month === "10") return `${day} Oct ${year}`;
  if (month === "11") return `${day} Nov ${year}`;
  if (month === "12") return `${day} Dec ${year}`;
}

export function initialMessage(text) {
  alert(text);
}
