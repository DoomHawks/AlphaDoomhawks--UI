import { COLORS } from "@/theme/colors";
import { radius } from "@/theme/theme";
import { CustomButtonProps } from "@/types";
import { verticalScale } from "@/utils/styles";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Loading from "./Loading";

const Button = ({
  style,
  onPress,
  loading = false,
  children,
}: CustomButtonProps) => {
  if (loading) {
    return (
      <View className="items-center justify-center border border-rounded-lg  bg-transparent"
      style={{
        borderCurve: "continuous",
        height: verticalScale(52),
        borderRadius: radius._17,       
        ...style,
      }}>
       <Loading/>
      </View>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      // className="items-center justify-center rounded-lg border"
      className="items-center justify-center"
      style={{
        borderCurve: "continuous",
        height: verticalScale(52),
       // borderRadius: radius._17,
        backgroundColor: COLORS.doomhawks,
        ...style,
      }}
    >
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
