import React, { useState, useEffect } from "react";
import { View, TextInput, TouchableOpacity, Alert } from "react-native";
import { FormProps } from "../types";
import styles from "../../styles/styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Notifications from "expo-notifications";

const Form = ({ addToDo }: FormProps) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission not granted for notifications");
      }
    })();

    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
      }),
    });
  }, []);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (title.trim() !== "") {
      addToDo(title);
      try {
        await Notifications.scheduleNotificationAsync({
          content: {
            title: "New Task Added",
            body: `You've added a new task: ${title}`,
          },
          trigger: null,
        });
        console.log("Notification scheduled");
      } catch (error) {
        console.error("Error scheduling notification:", error);
      }
    }
    setTitle("");
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={[styles.input, { backgroundColor: "white" }]}
        value={title}
        onChangeText={setTitle}
        placeholder="Add a new task"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Ionicons style={styles.button} name="add-circle" size={32}></Ionicons>
      </TouchableOpacity>
    </View>
  );
};
export default Form;
