import { Dimensions } from "react-native";
import {
  CarIcon,
  ChatIcon,
  Dashboard,
  Menu,
  NavigationIcon,
  Settings,
  StarIcon,
  TripsIcon,
  UserIcon,
  Wallet
} from "../assets/icons";
import CountryListJson from "./all_country.json";
import { Bike, Car, Truck, Van } from "../assets/images";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const NavNames = {
  GettingStarted: {
    name: "GettingStarted",
    label: "Getting Started",
    navShown: false,
    Icon: Menu
  },
  GettingStarted2: {
    name: "GettingStarted2",
    label: "Getting Started",
    navShown: false,
    Icon: Menu
  },
  Signup: {
    name: "SignUp",
    label: "Sign Up",
    navShown: false,
    Icon: Menu
  },
  DrivingPreference: {
    name: "DrivingPreference",
    label: "Driving Preference",
    navShown: false,
    Icon: Menu
  },

  Login: {
    name: "Login",
    label: "Login",
    navShown: false,
    Icon: Menu
  },

  Register: {
    name: "Register",
    label: "Register",
    navShown: false,
    Icon: Menu
  },
  OTP: {
    name: "OTP",
    label: "OTP",
    navShown: false,
    Icon: Menu
  },
  AddProfilePicture: {
    name: "AddProfilePicture",
    label: "Add Profile Picture",
    navShown: false,
    Icon: Menu
  },
  ChooseVehicle: {
    name: "ChooseVehicle",
    label: "Choose Vehicle",
    navShown: false,
    Icon: Menu
  },
  VehicleDetails: {
    name: "VehicleDetails",
    label: "Vehicle Details",
    navShown: false,
    Icon: Menu
  },
  Navigation: {
    name: "Navigation",
    label: "Navigation",
    navShown: true,
    Icon: Dashboard
  },
  Earnings: {
    name: "Earnings",
    label: "Earnings",
    navShown: true,
    Icon: Wallet
  },

  History: {
    name: "History",
    label: "History",
    navShown: true,
    Icon: TripsIcon
  },

  Chat: {
    name: "Chat",
    label: "Chat",
    navShown: false,
    Icon: ChatIcon
  },
  // Settings: {
  //   name: "Settings",
  //   label: "Settings",
  //   navShown: true,
  //   Icon: Settings
  // },

  ChatDetails: {
    name: "ChatDetails",
    label: "Chat Details",
    navShown: false,
    Icon: ChatIcon
  },
  Wallet: {
    name: "Wallet",
    label: "Wallet",
    navShown: false,
    Icon: Wallet
  },
  Withdraw: {
    name: "Withdraw",
    label: "Withdraw",
    navShown: false,
    Icon: Wallet
  },
  NewBank: {
    name: "NewBank",
    label: "Add Bank",
    navShown: false,
    Icon: Wallet
  },
  Rating: {
    name: "Rating",
    label: "Rating",
    navShown: false,
    Icon: CarIcon
  },

  Profile: {
    name: "Profile",
    label: "Profile",
    navShown: true,
    Icon: Settings
  },
  RatingDetails: {
    name: "RatingDetails",
    label: "Rating Details",
    navShown: false,
    Icon: StarIcon
  },
  ExtraRatingDetails: {
    name: "ExtraRatingDetails",
    label: "Extra Rating Details",
    navShown: false,
    Icon: StarIcon
  },
  TripDetails: {
    name: "TripDetails",
    label: "TripDetails",
    navShown: false,
    Icon: StarIcon
  },
  EditProfile: {
    name: "EditProfile",
    label: "Edit Profile",
    profileLink: true,
    navShown: false,
    Icon: StarIcon
  }
};

export const countryData = CountryListJson.map(country => ({
    name: country.name.common,
    mobileCode: country.idd.root,
    countryCode: country.cca2,
    flag: country.flags.png
  })),
  vehicleType = [
    {
      name: "Bike",
      image: Bike,
      center: true
    },
    {
      name: "Car",
      image: Car,
      center: false
    },
    {
      name: "Van",
      image: Van,
      center: false
    },
    {
      name: "Truck",
      image: Truck,
      center: false
    }
  ];

export const allNav = Object.keys(NavNames).map(nav => NavNames[nav]);
export const screenNav = allNav.filter(nav => nav.navShown),
  profileLinks = allNav.filter(nav => nav.profileLink),
  measurements = {
    windowWidth,
    windowHeight
  };

export const padding = 15;
