import { format } from 'date-fns';

const DateComponent = () => {
  const date = new Date(2025, 10, 27); // Month is 0-indexed
  const formattedDate = format(date, 'EEEE, MMMM dd, yyyy'); // Example: Sunday, November 27, 2025

  return <div>{formattedDate}</div>;
};

export default DateComponent;
