interface Reportable {
  summary(): string;
}

interface Car {
  name: string;
  year: number;
  broken: false;
}

const toyota = {
  name: 'Prado',
  year: 2000,
  broken: false,
  summary() {
    return `Car name is ${this.name}`;
  },
};

const drink = {
  color: 'Blue',
  sugar: 20,
  carbonated: false,
  summary() {
    return `Car name is ${this.name}`;
  },
};

const printItem = (item: Reportable) => {
  console.log(item.summary());
};

printItem(toyota);
