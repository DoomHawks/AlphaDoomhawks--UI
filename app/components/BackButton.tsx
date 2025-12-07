import { COLORS } from "@/theme/colors";
import { radius } from "@/theme/theme";
import { BackButtonProps } from "@/types";
import { verticalScale } from "@/utils/styles";
import { useRouter } from "expo-router";
import { CaretLeftIcon } from "phosphor-react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const BackButton = ({ style, iconSize = 24 }: BackButtonProps) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.back()}
      style={[
        {
          borderRadius: radius._6,
          borderCurve: "continuous",
          padding: 2,
        },
        style,
      ]}
      className="self-start bg-neutral600 border rounded-lg"
    >
      <CaretLeftIcon
        size={verticalScale(iconSize)}
        color={COLORS.doomhawks}
        weight="bold"
      />
    </TouchableOpacity>
  );
};

export default BackButton;
