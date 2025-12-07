import { COLORS } from "@/theme/colors";
import { spacingX, spacingY } from "@/theme/theme";
import { router } from "expo-router";
import { EnvelopeIcon, LockIcon } from "phosphor-react-native";
import React, { useRef, useState } from "react";
import { Alert, Pressable, View } from "react-native";
import BackButton from "../components/BackButton";
import Button from "../components/Button";
import Input from "../components/Input";
import ScreenWrapper from "../components/ScreenWrapper";
import Typo from "../components/Typo";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const handleSubmit = async () => {
    if(!emailRef.current || !passwordRef.current){
      Alert.alert("Please fill all fields")
    }
    console.log(emailRef.current);
    console.log(passwordRef.current);
  };

  return (
    <ScreenWrapper>
      <View
        className="flex-1"
        style={{ paddingHorizontal: spacingX._15, gap: spacingY._20 }}
      >
        <BackButton />
        <View style={{ gap: 5, marginTop: spacingY._20 }}>
          <Typo size={30} fontWeight={800} color={COLORS.doomhawks}>
            Hey,
          </Typo>
          <Typo size={30} fontWeight={800} color={COLORS.doomhawks}>
            Welcome Back!
          </Typo>
        </View>

        <View style={{ gap: spacingY._20 }}>
          <Typo size={18} fontWeight={600} color={COLORS.textLighter}>
            Login now to track your finances
          </Typo>

          {/* Form */}
          <Input
            placeholder="Enter your Email"
            placeholderTextColor={COLORS.white}
            icon={
              <EnvelopeIcon size={20} color={COLORS.doomhawks} weight="fill" />
            }
            onChangeText={(value) => (emailRef.current = value)}
          />
          <Input
            placeholder="Enter your Password"
            placeholderTextColor={COLORS.white}
            secureTextEntry={true}
            icon={<LockIcon size={20} color={COLORS.doomhawks} weight="fill" />}
            onChangeText={(value) => (passwordRef.current = value)}
          />
          <Pressable onPress={() => router.push("/(auth)/forgot-password")}>
            <Typo
              size={17}
              fontWeight={300}
              style={{ alignSelf: "flex-end" }}
              color={COLORS.doomhawks}
            >
              Forgot Password?
            </Typo>
          </Pressable>

          <Button onPress={handleSubmit} loading={isLoading}>
            <Typo size={20} fontWeight={600} color={COLORS.black}>
              Login
            </Typo>
          </Button>
        </View>

        {/* Footer */}
        <View className="flex-row items-center justify-center space-x-2">
          <Typo size={17} fontWeight={300}>
            Don`t have an account?
          </Typo>
          <Pressable
            onPress={() => router.push("/(auth)/register")}
            className="ml-5"
          >
            <Typo size={17} fontWeight={300} color={COLORS.doomhawks}>
              Sign up
            </Typo>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Login;
