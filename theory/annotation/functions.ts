const add = (a: number, b: number): number => {
  return a + b;
};

function multiply(a: number, b: number): number {
  return a * b;
}

const divide = function (a: number, b: number): number {
  return a / b;
};

// Destructuring
const todaysWeather = {
  date: new Date(),
  forecast: 'sunny',
};

const logWeather = ({
  date,
  forecast,
}: {
  date: Date;
  forecast: string;
}): void => {
  console.log(date.toISOString());
  console.log(forecast);
};

logWeather(todaysWeather);
