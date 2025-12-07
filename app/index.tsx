import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, View } from "react-native";

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/home");
      //console.log("Welcome to DoomHawks UI!");
    }, 3000);
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-neutral900">
      <Image
        source={require("../assets/images/splash-icon.png")}
        resizeMode="contain"
        className="" // optional extra classes
        style={{ width: 150, height: 150 }}
      />
    </View>
  );
};

export default Index;
