import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React from "react";
import {
  Button,
  FormInputField,
  LoggedInContainer,
  Logo,
  Nav,
  RoundedImage
} from "../components";
import { blackColor, primaryColor, whiteColor } from "../assets/colors";
import { lato } from "../fonts";
import { useNavigation } from "@react-navigation/native";
import { AngleRight } from "../assets/icons";

const InputButton = ({
  label,
  value,
  placeholder,
  tag,
  name,
  inputStyle,
  labelStyle
}) => {
  if (!placeholder) {
    placeholder = "Input";
  }
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      onPres={() => {
        navigate(name);
      }}
      style={{
        gap: 20
      }}
    >
      <Text
        style={{
          fontFamily: lato.regular.default,
          ...labelStyle
        }}
      >
        {label}
      </Text>

      <View
        style={{
          paddingVertical: 15,
          paddingHorizontal: 15,
          borderRadius: 15,
          flexDirection: "row",
          justifyContent: "space-between",

          borderWidth: 1,
          borderColor: blackColor.opacity200,
          ...inputStyle
        }}
      >
        <Text
          style={{
            color: value ? blackColor.default : blackColor.opacity300
          }}
        >
          {value ? value : placeholder}
        </Text>

        <View
          style={{
            flexDirection: "row",
            gap: 5
          }}
        >
          {tag}
          <AngleRight color={blackColor.opacity300} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const EditProfile = () => {
  const { navigate } = useNavigation();
  return (
    <LoggedInContainer
      showBackFunction
      containerStyle={{
        paddingVertical: 20
      }}
    >
      <View
        style={{
          flex: 1
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            gap: 40
          }}
        >
          <RoundedImage
            size={80}
            style={{
              alignSelf: "center"
            }}
          />
          <FormInputField
            placeholder="First Name"
            label="First Name"
            labelStyle={{
              ...styles.labelStyle
            }}
            inputStyle={{
              ...styles.inputStyle
            }}
          />
          <FormInputField
            placeholder="Last Name"
            label="Last Name"
            labelStyle={{
              ...styles.labelStyle
            }}
            inputStyle={{
              ...styles.inputStyle
            }}
          />
          <InputButton
            label="Phone Number"
            placeholder="+(XXX) XXX-XXX XXXX"
            labelStyle={{
              ...styles.labelStyle
            }}
            inputStyle={{
              ...styles.inputStyle
            }}
          />
          <InputButton
            label="Email"
            placeholder="example@example.com"
            labelStyle={{
              ...styles.labelStyle
            }}
            inputStyle={{
              ...styles.inputStyle
            }}
          />
        </ScrollView>
      </View>

      <Button
        style={{
          marginTop: 20
        }}
      >
        <Text
          style={{
            color: whiteColor.default
          }}
        >
          Save
        </Text>
      </Button>
    </LoggedInContainer>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderRadius: 0
  },
  labelStyle: {
    color: blackColor.opacity600,
    fontSize: 13
  }
});
