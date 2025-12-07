import { COLORS } from "@/theme/colors";
import React from "react";
import { ActivityIndicator, ActivityIndicatorProps, View } from "react-native";

const Loading = ({
  size = "large",
  color = COLORS.doomhawks,
}: ActivityIndicatorProps) => {
  return <View className="flex-1 justify-center items-center">
    <ActivityIndicator size={size} color={color} />
  </View>;
};

export default Loading;
