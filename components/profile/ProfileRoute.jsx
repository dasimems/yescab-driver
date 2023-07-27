import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AngleRight, UserVerified } from "../../assets/icons";
import { lato } from "../../fonts";
import { blackColor } from "../../assets/colors";
import { useNavigation } from "@react-navigation/native";

const ProfileRoute = ({ label, description, name }) => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigate(name);
      }}
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10
        }}
      >
        <UserVerified />

        <View
          style={{
            gap: 6
          }}
        >
          <Text
            style={{
              fontFamily: lato.bold.default,
              color: blackColor.opacity700
            }}
          >
            {label}
          </Text>
        </View>
      </View>

      <AngleRight />
    </TouchableOpacity>
  );
};

export default ProfileRoute;

const styles = StyleSheet.create({});
