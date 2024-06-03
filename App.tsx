import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import MapView, { MapMarker } from "react-native-maps";

import places from "./places";

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 36.2048,
          longitude: 138.2529,
          latitudeDelta: 8,
          longitudeDelta: 8,
        }}
      >
        {places.map((place) => {
          return place.lines.map((line) => (
            <MapMarker
              key={line.id}
              title={line.name.en ?? ""}
              coordinate={{ latitude: line.lat, longitude: line.lng }}
            />
          ));
        })}
      </MapView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
