import { COLORS } from "@/theme/colors";
import { spacingX } from "@/theme/theme";
import { verticalScale } from "@/utils/styles";
import React, { useEffect } from "react";
import { Image, TouchableOpacity, View } from "react-native";

import { router } from "expo-router";
import Animated, {
  FadeInDown,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import Button from "./components/Button";
import ScreenWrapper from "./components/ScreenWrapper";
import Typo from "./components/Typo";

const Home = () => {
  const opacity = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  useEffect(() => {
    // Delay 500ms, then fade opacity from 0 → 1 over 800ms (you can adjust)
    opacity.value = withDelay(500, withTiming(1, { duration: 1500 }));
  }, []);

  return (
    <ScreenWrapper>
      <View
        className="flex-1 justify-between"
        
      >
        <View>
          <TouchableOpacity style={{ marginRight: spacingX._20 }}  onPress={() => router.push(`/(auth)/login`)}>
            <View className="flex-row items-center gap-3 ml-3">
              <Image
                source={require("../assets/images/doomhawk-icon.png")}
                resizeMode="contain"
                className="w-10 h-10 bg-doomhawks rounded-xl"
              />

              <View className="flex-1 flex-row justify-between">
                <Typo
                  fontWeight="600"
                  color={COLORS.doomhawks}
                  textProps={{ className: "self-start" }}
                >
                  ALPHA DOOMHAWKS
                </Typo>
                <Typo
                  fontWeight="600"
                  color={COLORS.doomhawks}
                  textProps={{ className: "self-end" }}               
                >
                  Sign in
                </Typo>
              </View>
            </View>
            <Animated.Image
              style={[
                { height: verticalScale(300), marginTop: verticalScale(100) },
                animatedStyle,
              ]}
              source={require("../assets/images/home.png")}
              resizeMode="contain"
              className="w-full self-center" // optional extra classes
            />
          </TouchableOpacity>
        </View>

        {/* footer */}

        <View
          className="px-5"
          style={{
            backgroundColor: COLORS.neutral900,
            //alignItems:"center",
            shadowColor: COLORS.white,
            // background is important for shadow to show
            // for iOS
            shadowOffset: { width: 0, height: -20 },
            shadowOpacity: 0.15,
            shadowRadius: 5,
            elevation: 40, // for Android
            paddingTop: verticalScale(15),
            paddingBottom: verticalScale(30), // optional
            gap: spacingX._10,
            // overflow: 'visible',
            // other layout styles ...r
          }}
        >
          <Animated.View
            className="items-center"
            entering={FadeInDown.duration(500).springify().damping(20)}
          >
            <Typo
              size={34}
              fontWeight="700"
              textProps={{ className: "text-center" }}
            >
              Unlock & Get with
            </Typo>
            <Typo
              size={34}
              fontWeight="700"
              color={COLORS.doomhawks}
              textProps={{ className: "text-center" }}
            >
              $500 Bonus
            </Typo>
            <Typo
              size={34}
              fontWeight="700"
              textProps={{ className: "text-center" }}
            >
              on Alpha Accounts
            </Typo>
          </Animated.View>
          <Animated.View
            className="item-center justify-center mr-0.5 mt-3"
            entering={FadeInDown.duration(1000).delay(300)}
          >
            <Typo size={15} textProps={{ className: "text-center" }}>
              Experience next-gen banking with military-grade
            </Typo>
            <Typo size={15} textProps={{ className: "text-center" }}>
              security. Get up to $500 when you open your Alpha
            </Typo>
            <Typo size={15} textProps={{ className: "text-center" }}>
              Doomhawks account. Limited time offer.
            </Typo>
          </Animated.View>

          <Animated.View entering={FadeInDown.duration(1500).delay(600)}>
            <Button
              className="w-full"
              style={{
                marginTop: verticalScale(30),
                paddingHorizontal: spacingX._25,
              }}
              onPress={() => router.push(`/(auth)/register`)}
            >
              <Typo size={20} fontWeight="600" color={COLORS.black}>
                Launch Account Now
              </Typo>
            </Button>
          </Animated.View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Home;
