import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  Button,
  LoggedInContainer,
  Logo,
  Nav,
  PreferenceCard
} from "../components";
import { blackColor, primaryColor, whiteColor } from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CarIcon, TruckIcon } from "../assets/icons";

const DrivingPreferences = () => {
  const selectOptions = [
    { label: "Open to all trips", value: ["car", "delivery"] },
    { label: "Car Ride Only", value: ["car"] }
  ];
  const { navigate } = useNavigation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(selectOptions);
  console.log(value);
  return (
    <LoggedInContainer
      style={{
        backgroundColor: "#f5f5f5"
      }}
      showBackFunction
      containerStyle={{
        paddingVertical: 20
      }}
    >
      <View
        style={{
          flex: 1,
          gap: 40
        }}
      >
        <DropDownPicker
          open={open}
          dropDownContainerStyle={{
            borderWidth: 0,
            zIndex: 9,
            elevation: 8
          }}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={{
            borderWidth: 0
          }}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: open ? 50 : 0
          }}
        >
          <PreferenceCard
            Icon={CarIcon}
            title="Car Ride"
            active={value && Array.isArray(value) && value.includes("car")}
          />
          <PreferenceCard
            Icon={TruckIcon}
            title="Delivery"
            active={value && Array.isArray(value) && value.includes("delivery")}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          gap: 20
        }}
      >
        <Button style={{ flex: 1 / 2, backgroundColor: blackColor.opacity100 }}>
          <Text
            style={{
              fontFamily: lato.bold.default,
              color: blackColor.opacity600
            }}
          >
            Reset
          </Text>
        </Button>
        <Button style={{ flex: 1 / 2 }}>
          <Text
            style={{
              fontFamily: lato.bold.default,
              color: whiteColor.default
            }}
          >
            Save
          </Text>
        </Button>
      </View>
    </LoggedInContainer>
  );
};

export default DrivingPreferences;

const styles = StyleSheet.create({});
