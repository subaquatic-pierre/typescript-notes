// Objects
const profile = {
  userName: 'Paul',
  age: 21,
  alive: true,
  coords: {
    lat: 10,
    lng: 15,
  },
  setAlive(status: boolean): void {
    this.alive = status;
  },
};

// Object destructuring
const { userName, age }: { userName: string; age: number } = profile;

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
