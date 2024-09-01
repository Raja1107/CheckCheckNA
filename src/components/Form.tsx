import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { FormProps } from "../types";
import styles from "../../styles/styles";
import Ionicons from "@expo/vector-icons/Ionicons";

const Form = ({ addToDo }: FormProps) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (title.trim() !== "") {
      addToDo(title);
    }
    setTitle("");
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={[styles.input, { backgroundColor: "white" }]}
        value={title}
        onChangeText={setTitle}
        placeholder="Add a new Task"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Ionicons style={styles.button} name="add-circle" size={32}></Ionicons>
      </TouchableOpacity>
    </View>
  );
};
export default Form;
