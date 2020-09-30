export interface Mappable {
  name: string;
  makerContent(): string;
  location: {
    lat: number;
    lng: number;
  };
}

export class Map {
  googleMap: google.maps.Map;

  constructor(elementID: string, options: google.maps.MapOptions) {
    this.googleMap = new google.maps.Map(
      document.getElementById(elementID),
      options
    );
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
      title: mappable.name,
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.makerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
