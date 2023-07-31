import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { destinationData } from "../constants";
import DestinationCard from "../components/DestinationCard";

const Destinations = () => {
  return (
    <View className="mx-4 flex-row justify-between flex-wrap">
      {destinationData.map((item, index) => {
        return <DestinationCard key={index} item={item} />;
      })}
    </View>
  );
};

export default Destinations;
