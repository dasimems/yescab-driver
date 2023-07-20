import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { padding } from "../../data/general";
import { blackColor, primaryColor, whiteColor } from "../../assets/colors";
import { lato } from "../../fonts";
import { CarIcon, Wallet } from "../../assets/icons";

const TripSummary = () => {
  return (
    <View
      style={{
        paddingVertical: 20,
        paddingHorizontal: padding,
      }}
    >
      <View
        style={{
          width: "100%",
          backgroundColor: whiteColor.default,
          padding: 15,
          paddingVertical: 35,
          borderRadius: 15,
          gap: 25,
        }}
      >
        <Text
          style={{
            fontFamily: lato.bold.default,
          }}
        >
          Today's Summary
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              gap: 6,
            }}
          >
            <Text
              style={{
                fontFamily: lato.regular.default,
                color: blackColor.opacity600,
              }}
            >
              Total Trips Today
            </Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
              }}
            >
              <CarIcon color={primaryColor.default} />
              <Text
                style={{
                  fontFamily: lato.bold.default,
                  color: primaryColor.default,
                }}
              >
                9 Trips
              </Text>
            </View>
          </View>
          <View
            style={{
              gap: 6,
            }}
          >
            <Text
              style={{
                fontFamily: lato.regular.default,
                color: blackColor.opacity700,
              }}
            >
              Todays's Earnings
            </Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
              }}
            >
              <Wallet color={primaryColor.default} />
              <Text
                style={{
                  fontFamily: lato.bold.default,
                  color: primaryColor.default,
                }}
              >
                $100
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TripSummary;

const styles = StyleSheet.create({});
