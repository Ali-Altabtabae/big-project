import React, { Component } from "react";
import { Alert, AppRegistry, Button, StyleSheet, View } from "react-native";

export default class MyTeam extends Component {
  onPressButton() {
    Alert.alert("You clicked the button!");
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button onPress={this.onPressButton} title="Add Players" />
          </View>
          <View style={styles.buttonContainer}>  
          <Button onPress={this.onPressButton} title="Remove Players" />
          </View>
          <View style={styles.buttonContainer}>  

          <Button onPress={this.onPressButton} title="Challenge other teams" />
        </View>
        <View style={styles.buttonContainer}></View>
        <View style={styles.multiButtonContainer}>
          <Button onPress={this.onPressButton} title="Back" disabled={true} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer: {
    margin: 10,
  },
  multiButtonContainer: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
