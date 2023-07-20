import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { bauhs93, lato } from './fonts';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppContainer, CameraContainer, Modal, Providers, ScreenContainer } from './components';
import { AddProfilePicture, ChatDetails, Chats, ChooseVehicle, Earnings, ExtraRateDetails, GettingStarted, GettingStartedTwo, History, Login, Navigation, NewBank, OTP, Profile, Rating, RatingDetails, Register,  TripDetails,  VehicleDetails, Wallet, Withdraw } from './screens';
import { NavNames } from './data/general';


const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    [lato.regular.default]: require("./fonts/Lato-Regular.ttf"),
    [lato.regular.italic]: require("./fonts/Lato-Italic.ttf"),
    [lato.black.default]: require("./fonts/Lato-Black.ttf"),
    [lato.black.italic]: require("./fonts/Lato-BlackItalic.ttf"),
    [lato.bold.default]: require("./fonts/Lato-Bold.ttf"),
    [lato.bold.italic]: require("./fonts/Lato-BoldItalic.ttf"),
    [bauhs93]: require("./fonts/BAUHS93.ttf"),
  });

  return (
    <>

      {fontsLoaded && <Providers>

        <Modal />

        <AppContainer>

          <NavigationContainer >
            <Stack.Navigator initialRouteName={NavNames.GettingStarted.name}>
              <Stack.Group screenOptions={{
                  animation:"slide_from_right",
                  headerShown: false

                }}>

                <Stack.Screen name={NavNames.GettingStarted.name} component={GettingStarted} />
                <Stack.Screen name={NavNames.GettingStarted2.name} component={GettingStartedTwo} />
                <Stack.Screen name={NavNames.Earnings.name} component={Earnings} />
                <Stack.Screen name={NavNames.Withdraw.name} component={Withdraw} />
                <Stack.Screen name={NavNames.NewBank.name} component={NewBank} />
                <Stack.Screen name={NavNames.Wallet.name} component={Wallet} />
                <Stack.Screen name={NavNames.Register.name} component={Register} />
                <Stack.Screen name={NavNames.ChooseVehicle.name} component={ChooseVehicle} />
                <Stack.Screen name={NavNames.VehicleDetails.name} component={VehicleDetails} />
                <Stack.Screen name={NavNames.Navigation.name} component={Navigation} />
                <Stack.Screen name={NavNames.AddProfilePicture.name} component={AddProfilePicture} />
                <Stack.Screen name={NavNames.Login.name} component={Login} />
                <Stack.Screen name={NavNames.OTP.name} component={OTP} />
                <Stack.Screen name={NavNames.History.name} component={History} />
                <Stack.Screen name={NavNames.Rating.name} component={Rating} />
                <Stack.Screen name={NavNames.TripDetails.name} component={TripDetails} />
                <Stack.Screen name={NavNames.Profile.name} component={Profile} />
                <Stack.Screen name={NavNames.RatingDetails.name} component={RatingDetails} />
                <Stack.Screen name={NavNames.Chat.name} component={Chats} />
                <Stack.Screen name={NavNames.ExtraRatingDetails.name} component={ExtraRateDetails} />
                <Stack.Screen name={NavNames.ChatDetails.name} component={ChatDetails} />

              </Stack.Group>
            </Stack.Navigator>
          </NavigationContainer>

        </AppContainer>

        

          <CameraContainer />

        
        
        </Providers>}
    
    </>
  );
}

const styles = StyleSheet.create({});
