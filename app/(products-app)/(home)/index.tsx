import { View } from "react-native";
import React from "react";
import { ThemedText } from "@/presentation/auth/theme/components/ThemedText";
import { useThemeColor } from "@/presentation/auth/theme/hooks/useThemeColor";

const Home = () => {
  const primary = useThemeColor({}, "primary");

  return (
    <View style={{ paddingTop: 100, paddingHorizontal: 20 }}>
      <ThemedText style={{ fontFamily: "KanitBold", color: primary }}>
        Home
      </ThemedText>
      <ThemedText style={{ fontFamily: "KanitRegular" }}>Home</ThemedText>
      <ThemedText style={{ fontFamily: "KanitThin" }}>Home</ThemedText>
      <ThemedText>Home</ThemedText>
    </View>
  );
};

export default Home;
