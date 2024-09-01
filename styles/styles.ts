import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#18181b",
    height: "100%",
  },
  innerContainer: {
    backgroundColor: "#0c4a6e",
    borderRadius: 8,
    top: 16,
    padding: 16,
    color: "#f0f9ff",
    marginBottom: 16,
  },
  title: {
    fontSize: 30,
    lineHeight: 30,
    fontWeight: "bold",
    textAlign: "center",
    padding: 8,
    color: "#f0f9ff",
  },
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#38bdf8",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },
  input: {
    flex: 1,
    justifyContent: "space-between",
    fontSize: 20,
    borderRadius: 10,
    padding: 3,
    color: "#4B5563",
  },
  button: {
    marginLeft: 8,
    color: "#18181b",
  },
  todocontainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  todobutton: {
    marginLeft: 10,
  },
  loadingContainer: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#0369a1",
    borderRadius: 10,
  },
  todoItemComplete: {
    textDecorationLine: "line-through",
    color: "gray",
  },
  todoText: {
    flex: 1,
    color: "#FFFFFF",
  },
  footerText: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 16,
    color: "#f0f9ff",
  },
});

export default styles;
