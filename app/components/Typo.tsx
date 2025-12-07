import { COLORS } from "@/theme/colors";
import { TypoProps } from "@/types";
import { verticalScale } from "@/utils/styles";
import React from "react";
import { Text, View } from "react-native";

const Typo = ({
  size,
  color = COLORS.text,
  fontWeight = 400,
  children,
  style,
  textProps = {},
}: TypoProps) => {
  const textStyle = {
    fontSize: size ? verticalScale(size) : verticalScale(18),
    color,
    fontWeight,
  };
  

  return (
    <View>
      <Text style={[textStyle, style]} {...textProps}>
        {children}
      </Text>
    </View>
  );
};

export default Typo;
