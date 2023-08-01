import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import {
  ClockIcon,
  HeartIcon,
  MapPinIcon,
  SunIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../theme";

const DestinationScreen = (props) => {
  // console.log("item -> ", props.route.params);
  const item = props.route.params;
  const navigation = useNavigation();
  const [isFavourite, toggleFavourite] = useState(false);

  return (
    <View className="bg-white flex-1">
      {/* Destination image */}
      <Image source={item.image} style={{ width: wp(100), height: hp(55) }} />
      <StatusBar style={"light"} />

      {/* back button */}
      <SafeAreaView className="flex-row justify-between items-center w-full absolute">
        <TouchableOpacity
          className="p-2 rounded-full ml-4"
          style={{ backgroundColor: "rgba(255,255,255, 0.5)" }}
          onPress={() => navigation.goBack()}
        >
          <ChevronLeftIcon size={wp(7)} color={"#ffff"} strokeWidth={4} />
        </TouchableOpacity>

        {/* Favourite button */}
        <TouchableOpacity
          onPress={() => toggleFavourite(!isFavourite)}
          style={{ backgroundColor: "rgba(255,255,255, 0.5)" }}
          className="p-2 rounded-full mr-4"
        >
          <HeartIcon size={wp(7)} color={isFavourite ? "red" : "white"} />
        </TouchableOpacity>
      </SafeAreaView>

      {/* title & description & booking button */}
      <View
        style={{ borderTopRightRadius: 40, borderTopLeftRadius: 40 }}
        className="px-5 flex flex-1 justify-between bg-white pt-8 -mt-10"
      >
        <ScrollView showsVerticalScrollIndicator={false} className="space-y-5 ">
          <View className="flex-row justify-between items-center">
            <Text
              style={{ fontSize: wp(7) }}
              className="font-bold flex-1 text-neutral-700 "
            >
              {item?.title}
            </Text>
            <Text
              style={{ fontSize: wp(7), color: theme.text }}
              className="font-semibold"
            >
              $ {item?.price}
            </Text>
          </View>
          <Text
            className="text-neutral-700 tracking-wide mb-2"
            style={{ fontSize: wp(3.7) }}
          >
            {item.longDescription}
          </Text>
          <View className="flex-row justify-between mx-1">
            {/* duration */}
            <View className="flex-row space-x-2 items-start">
              <ClockIcon size={wp(7)} color={"sktblue"} />
              <View className="flex space-y-2">
                <Text
                  className="font-bold text-neutral-700"
                  style={{ fontSize: wp(4.5) }}
                >
                  {item.duration}
                </Text>
                <Text className="text-neutral-600 tracking-wide">Duration</Text>
              </View>
            </View>

            {/* distance */}
            <View className="flex-row space-x-2 items-start">
              <MapPinIcon size={wp(7)} color={"#f87171"} />
              <View className="flex space-y-2">
                <Text
                  className="font-bold text-neutral-700"
                  style={{ fontSize: wp(4.5) }}
                >
                  {item.distance}
                </Text>
                <Text className="text-neutral-600 tracking-wide">Distanc</Text>
              </View>
            </View>

            {/* weather */}
            <View className="flex-row space-x-2 items-start">
              <SunIcon size={wp(7)} color={"orange"} />
              <View className="flex space-y-2">
                <Text
                  className="font-bold text-neutral-700"
                  style={{ fontSize: wp(4.5) }}
                >
                  {item.weather}
                </Text>
                <Text className="text-neutral-600 tracking-wide">sunny</Text>
              </View>
            </View>
          </View>
        </ScrollView>

        {/*  */}
        <TouchableOpacity
          style={{
            backgroundColor: theme.bg(0.7),
            width: wp(50),
            height: wp(15),
          }}
          className="mb-6 mx-auto justify-center items-center rounded-full"
          onPress={() => Alert.alert(`You Booked ${item?.title} 🧳`)}
        >
          <Text className="text-white font-bold" style={{ fontSize: wp(5.5) }}>
            Book Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DestinationScreen;
