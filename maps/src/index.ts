import { Map } from "./Map";
import { User } from "./User";
import { Company } from "./Company";

const mapOptions: google.maps.MapOptions = {
  center: {
    lat: 0,
    lng: 0,
  },
  zoom: 1,
};

const map = new Map("map", mapOptions);
const user = new User();
const company = new Company();

map.addMarker(user);
map.addMarker(company);
