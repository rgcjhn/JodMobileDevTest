import trainJSON from "./train.json";

export interface Lines {
  id: number;
  name: Name;
  lines: Line[];
}

export interface Line {
  id: number;
  name: Name;
  lat: number;
  lng: number;
  zoom: number;
  stations: Station[];
}

export interface Name {
  ja?: string;
  en?: string;
}

export interface Station {
  id: number;
  gid: number;
  name: Name;
  location: Location;
  lines: StationLine[];
}

export interface StationLine {
  id: number;
  name: Name;
}

export interface Location {
  lat: number;
  lng: number;
  countryCode: Name;
  postalCode: Name;
  administrativeArea1: Name;
  ward: Name;
  locality1: Name;
  sublocality1: Name;
  sublocality2: Name;
  sublocality3: Name;
  sublocality4: Name;
}

const places = trainJSON as Lines[];

export default places;
