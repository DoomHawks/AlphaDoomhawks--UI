import { COLORS } from "@/theme/colors";
import { spacingX } from "@/theme/theme";
import { InputProps } from "@/types";
import { verticalScale } from "@/utils/styles";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const Input = ({
  icon,
  containerStyle,
  inputStyle,
  inputRef,
  className,
  ...textInputProps // ⬅️ filters out unwanted props (fixes DatePicker crash)
}: InputProps) => {
  return (
    <View
      className={`flex-row items-center ${className ?? ""}`}
      style={[styles.container, containerStyle]}
    >
      {icon}
      <TextInput
        ref={inputRef}
        style={[styles.input, inputStyle]}
        placeholderTextColor={COLORS.neutral400}
        {...textInputProps} // ⬅️ ONLY valid TextInput props are passed
      />
    </View>
  )
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: verticalScale(54),
    //borderRadius: radius._12,
    borderColor: COLORS.neutral300,
    backgroundColor: COLORS.neutral700,
    borderCurve: "continuous",
    alignItems: "center",
    justifyContent: "flex-start",
    color: COLORS.doomhawks,
    borderWidth: 1,
    paddingHorizontal: spacingX._15,
    gap: spacingX._7,
  },
  input: {
    flex: 1,
    fontSize: verticalScale(18),
    color: COLORS.white,
  },
});
