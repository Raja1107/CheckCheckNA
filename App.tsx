import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import ToDoList from "./src/components/ToDoList";
import styles from "./styles/styles";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>INBOX</Text>
        <ToDoList />
      </View>
    </SafeAreaView>
  );
}
