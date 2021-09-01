import { Chart } from '../Chart/Chart';

export const ExpenseChart = props => {
  console.log(props);
  const charDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Fed', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    charDataPoints[expenseMonth].value += expense.amount;
  }
  return <Chart dataPoints={charDataPoints} />;
  // return null;
};
