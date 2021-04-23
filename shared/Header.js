import React from "react";
import { Stylesheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={style.header}>
      {/* icon for the menu */}

      <View>
        <Text style={style.headerText}></Text>
      </View>
    </View>
  );
}

const style = Stylesheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  headerText: {
    fontWeight: "blod",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
});
