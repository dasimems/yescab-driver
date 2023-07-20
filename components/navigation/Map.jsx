import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { blackColor, primaryColor, whiteColor } from "../../assets/colors";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import useNavigationContext from "../../context/navigationContext";
import AnimatedLottieView from "lottie-react-native";
import { LocationPin } from "../../assets/lotties";
import { lato } from "../../fonts";

const Map = () => {
  const { from, fetchLocation } = useNavigationContext();
  const mapRef = useRef(null);
  const [fitOnce, setFitOnce] = useState(false);

  const fitMap = (type) => {
    mapRef.current.fitToCoordinates(
      [{ latitude: from.latitude, longitude: from.longitude }],
      {
        edgePadding: {
          top: type === "from" ? 200 : 50,
          left: type === "from" ? 200 : 50,
          bottom: type === "from" ? 200 : 50,
          right: type === "from" ? 200 : 50,
        },
      }
    );
  };

  useEffect(() => {
    if (!from) {
      fetchLocation();
    }
  }, [from]);

  useEffect(() => {
    if (from && !fitOnce) {
      fitMap();

      setFitOnce(true);
    }
  }, [from, fitOnce]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: blackColor.opacity1000,
      }}
    >
      {from && (
        <MapView
          ref={mapRef}
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
          }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          followsUserLocation={true}
          showsCompass={true}
          showsTraffic={true}
          initialRegion={{
            latitude: from && from.latitude ? from?.latitude : 37.78825,
            longitude: from && from.longitude ? from?.longitude : -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {from && (
            <Marker
              coordinate={{
                latitude: from.latitude,
                longitude: from.longitude,
              }}
              title="Your present location"
              identifier="Present"
            />
          )}
        </MapView>
      )}

      {!from && (
        <View
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            backgroundColor: primaryColor.opacity100,
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 9,
          }}
        >
          <AnimatedLottieView
            source={LocationPin}
            autoPlay
            loop
            style={{
              width: 100,
              height: 100,
            }}
          />

          <Text
            style={{
              fontFamily: lato.bold.default,
              fontSize: 15,
              color: blackColor.default,
              textAlign: "center",
            }}
          >
            Getting location...
          </Text>
        </View>
      )}
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({});
