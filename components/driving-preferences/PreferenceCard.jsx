import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { lato } from "../../fonts";
import { blackColor, primaryColor, whiteColor } from "../../assets/colors";

const PreferenceCard = ({ title, active, Icon }) => {
  return (
    <View
      style={{
        alignItems: "center",
        gap: 5,
        padding: 25,
        paddingHorizontal: 30,
        backgroundColor: whiteColor.default,
        borderRadius: 15
      }}
    >
      {Icon && typeof Icon !== "string" && <Icon />}
      <Text
        style={{
          fontFamily: lato.bold.default,
          color: blackColor.opacity600
        }}
      >
        {title}
      </Text>
      {active &&
        <View
          style={{
            width: "50%",
            height: 4,
            backgroundColor: primaryColor.default,
            borderRadius: 10
          }}
        />}
    </View>
  );
};

export default PreferenceCard;

const styles = StyleSheet.create({});
