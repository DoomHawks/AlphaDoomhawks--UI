import { ScreenWrapperProps } from "@/types";
import React from "react";
import { Dimensions, Platform, StatusBar, View } from "react-native";
const height = Dimensions.get("window").height;

const ScreenWrapper = ({ style, children }: ScreenWrapperProps) => {
  const paddingTop = Platform.OS === "ios" ? height * 0.06 :30;
  return (
    <View className="flex-1 bg-neutral900" style={[{ paddingTop }, style]}>
      <StatusBar barStyle="light-content"></StatusBar>
      {children}
    </View>
  );
};

export default ScreenWrapper;
