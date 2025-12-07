import { COLORS } from "@/theme/colors";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import Typo from "../components/Typo";

const ForgotPassword = () => {
  return (
    <ScreenWrapper>
      <Typo size={18} fontWeight={700} color={COLORS.doomhawks}>
        Forgot Password
      </Typo>
    </ScreenWrapper>
  );
};

export default ForgotPassword;
