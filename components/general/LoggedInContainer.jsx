import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Nav from "./Nav";
import { whiteColor } from "../../assets/colors";
import { padding } from "../../data/general";
import { AngleLeft, ArrowLeft } from "../../assets/icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { lato } from "../../fonts";
import { SafeAreaView } from "react-native-safe-area-context";


const Contents = ({children, header, headerText, headerTextStyle, headerStyle, showBackFunction, navHidden, headerHidden, containerStyle}) => {

    const {name: screenName} = useRoute();
    const {goBack} = useNavigation();
  return(

    <>

      
      {!headerHidden && <View>

          {header? header : <>
          
              <View style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingVertical: 10,
                  paddingHorizontal: padding,
                  ...headerStyle
              }}>

                  <View style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 5
                      
                  }}>

                      {showBackFunction && <TouchableOpacity onPress={goBack}>

                          <ArrowLeft size={20} />

                      </TouchableOpacity>}

                      <Text style={{
                          fontFamily: lato.black.default,
                          fontSize: 15,
                          ...headerTextStyle
                      }}>{headerText? headerText : screenName}</Text>
                  </View>



              </View>
          
          </>}

      </View>}
      <View
        style={{
          flex: 1,
          paddingHorizontal: padding,
          ...containerStyle
        }}
      >
        {children}
      </View>

        {!navHidden && <Nav />}

    </>

  )
}

const LoggedInContainer = ({children, removeSafeView, header, headerText, headerTextStyle, headerStyle, showBackFunction, navHidden, headerHidden, style, containerStyle}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: whiteColor.default,
        ...style
      }}
    >

    {!removeSafeView? <SafeAreaView style={{
      
        flex: 1,
        backgroundColor: whiteColor.default,
        ...style
    }}>

      <Contents {...{children, header, headerText, headerTextStyle, headerStyle, showBackFunction, navHidden, headerHidden, style, containerStyle}} />

    </SafeAreaView>: <View style={{
      
        flex: 1,
        backgroundColor: whiteColor.default,
        ...style
    }}>

      <Contents {...{children, header, headerText, headerTextStyle, headerStyle, showBackFunction, navHidden, headerHidden, style, containerStyle}} />

    </View>}

    </View>
  );
};

export default LoggedInContainer;

const styles = StyleSheet.create({});
