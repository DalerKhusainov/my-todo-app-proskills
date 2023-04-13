export default function formatDate(date) {
  const fullDate = date;
  const year = fullDate.slice(0, 4);
  const month = fullDate.slice(5, 7);
  const day = fullDate.slice(-2);
  const newformatedDate = `${day}.${month}.${year}`;
  return newformatedDate;
}