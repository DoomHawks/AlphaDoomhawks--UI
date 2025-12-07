import { COLORS } from "@/theme/colors";
import { spacingX, spacingY } from "@/theme/theme";
import { verticalScale } from "@/utils/styles";
import { router } from "expo-router";
import {
  CalendarBlankIcon,
  EnvelopeIcon,
  IdentificationBadgeIcon,
  LockIcon,
} from "phosphor-react-native";
import React, { useRef, useState } from "react";
import { Alert, Pressable, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import Modal from "react-native-modal";
import DatePicker from "react-native-modern-datepicker";
import BackButton from "../components/BackButton";
import Button from "../components/Button";
import Input from "../components/Input";
import ScreenWrapper from "../components/ScreenWrapper";
import Typo from "../components/Typo";

// Now you can use the 'de' locale object with date-fns functions

const Register = () => {
  const getFlag = (countryCode: string) => {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  };

  const [country, setCountry] = useState({
    id: null as number | null,
    name: "",
    code: "",
  });

  const countries = [
    { id: 1, name: "India", code: "IN" },
    { id: 2, name: "United States", code: "US" },
    { id: 5, name: "United Kingdom", code: "GB" },
  ];

  const [isLoading, setIsLoading] = useState(false);
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const handleSubmit = async () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert("Please fill all fields");
    }
    console.log(emailRef.current);
    console.log(passwordRef.current);
  };

  // const [dobPickerVisible, setDobPickerVisible] = useState(false);
  // const [dobValue, setDobValue] = useState("");

  // const formatDate = (date: Date) => {
  //   const d = date.getDate().toString().padStart(2, "0");
  //   const m = (date.getMonth() + 1).toString().padStart(2, "0");
  //   const y = date.getFullYear();
  //   return `${d}/${m}/${y}`;
  // };

  const [dobPickerVisible, setDobPickerVisible] = useState(false);
  const [dobValue, setDobValue] = useState("");

  const formatDate = (dateString: string) => {
    const [year, month, day] = dateString.split("/");
    return `${day}/${month}/${year}`;
  };

  const handleCalendarJob = (date: string) => {
    const formatted = formatDate(date);
    setDobValue(formatted);
    setDobPickerVisible(false);
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
            Let`s
          </Typo>
          <Typo size={30} fontWeight={800} color={COLORS.doomhawks}>
            Get Started !!
          </Typo>
        </View>

        <View style={{ gap: spacingY._20 }}>
          <Typo size={18} fontWeight={600} color={COLORS.textLighter}>
            Create an account to track your finances
          </Typo>

          {/* Form */}
          <View className="flex-row gap-2">
            <Input
              className="flex-1"
              placeholder="First Name"
              placeholderTextColor={COLORS.white}
              icon={
                <IdentificationBadgeIcon
                  size={20}
                  color={COLORS.doomhawks}
                  weight="fill"
                />
              }
              onChangeText={(value) => (firstNameRef.current = value)}
            />

            <Input
              className="flex-1"
              placeholder="Last Name"
              placeholderTextColor={COLORS.white}
              icon={
                <IdentificationBadgeIcon
                  size={20}
                  color={COLORS.doomhawks}
                  weight="fill"
                />
              }
              onChangeText={(value) => (lastNameRef.current = value)}
            />
          </View>
          <Input
            placeholder="Enter your Email"
            placeholderTextColor={COLORS.white}
            icon={
              <EnvelopeIcon size={20} color={COLORS.doomhawks} weight="fill" />
            }
            onChangeText={(value) => (passwordRef.current = value)}
          />

          <Input
            placeholder="Enter your Password"
            placeholderTextColor={COLORS.white}
            secureTextEntry={true}
            icon={<LockIcon size={20} color={COLORS.doomhawks} weight="fill" />}
            onChangeText={(value) => (passwordRef.current = value)}
          />

          <Pressable onPress={() => setDobPickerVisible(true)}>
            <Input
              editable={false} // prevent keyboard
              value={dobValue} // show selected date
              placeholder="Date of Birth"
              placeholderTextColor={COLORS.white}
              icon={
                <CalendarBlankIcon
                  size={20}
                  color={COLORS.doomhawks}
                  weight="fill"
                />
              }
            />
          </Pressable>

          <Modal
            isVisible={dobPickerVisible}
            onBackdropPress={() => setDobPickerVisible(false)}
          >
            <View>
              <DatePicker
                mode="calendar"
                onSelectedChange={(date) => handleCalendarJob(date)}
                onDateChange={(date) => handleCalendarJob(date)}
                onMonthYearChange={() => {}} // ← fix crash
                // Android fallback
                isGregorian={true}
                locale="enUS"
                options={{
                  backgroundColor: COLORS.neutral700,
                  textHeaderColor: COLORS.doomhawks,
                  textDefaultColor: "#fff",
                  selectedTextColor: "#000",
                  mainColor: COLORS.doomhawks,
                  textSecondaryColor: "#fff",
                  borderColor: COLORS.doomhawks,
                }}
              />
            </View>
          </Modal>

          <Dropdown
            style={{
              height: verticalScale(55),
              // borderRadius: radius._12,
              borderColor: COLORS.neutral300,
              backgroundColor: COLORS.neutral700,
              borderWidth: 1,
              borderCurve: "continuous",
              paddingHorizontal: spacingX._15,
              gap: spacingX._10,
            }}
            placeholderStyle={{
              color: COLORS.white,
              fontWeight: 400,
              fontSize: 17,
            }}
            selectedTextStyle={{
              fontSize: verticalScale(18),
              color: COLORS.white,
            }}
            data={countries}
            labelField="name"
            valueField="id"
            placeholder="Select Country"
            value={country.id}
            /* SELECTED ITEM ICON */
            renderLeftIcon={() =>
              country.code ? (
                <Text style={{ fontSize: 18, marginRight: 10 }}>
                  {getFlag(country.code)}
                </Text>
              ) : null
            }
            /* LIST ITEM ICONS */
            renderItem={(item) => (
              <View
                style={{
                  flexDirection: "row",
                  paddingVertical: 10,
                  paddingHorizontal: spacingX._15,
                  alignItems: "center",
                  backgroundColor: COLORS.neutral700,
                  borderColor: COLORS.neutral50,
                  borderWidth: 0.5,
                }}
              >
                <Text
                  style={{ fontSize: 20, fontWeight: "400", marginRight: 10 }}
                >
                  {getFlag(item.code)}
                </Text>
                <Text
                  style={{ color: COLORS.white, fontWeight: 400, fontSize: 17 }}
                >
                  {item.name}
                </Text>
              </View>
            )}
            onChange={(item) => {
              setCountry({
                id: item.id,
                name: item.name,
                code: item.code,
              });
            }}
            maxHeight={200}
          />

          <Button onPress={handleSubmit} loading={isLoading}>
            <Typo size={20} fontWeight={600} color={COLORS.black}>
              Register
            </Typo>
          </Button>
        </View>

        {/* Footer */}
        <View className="flex-row items-center justify-center space-x-2">
          <Typo size={17} fontWeight={300}>
            Already have an account?
          </Typo>
          <Pressable
            onPress={() => router.push("/(auth)/login")}
            className="ml-5"
          >
            <Typo size={17} fontWeight={300} color={COLORS.doomhawks}>
              Sign in
            </Typo>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Register;
