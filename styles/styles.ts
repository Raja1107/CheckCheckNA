import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#18181b",
    height: "100%",
  },
  innerContainer: {
    backgroundColor: "#082f49",
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
  evenPair: {
    backgroundColor: "#0369a1",
  },
  oddPair: {
    backgroundColor: "#0284C7",
  },
  footerText: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 16,
    color: "#f0f9ff",
  },
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#18181b",
  },
  loginFormContainer: {
    width: "80%",
    backgroundColor: "#0c4a6e",
    padding: 20,
    borderRadius: 10,
  },
  loginTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#f0f9ff",
    textAlign: "center",
    marginBottom: 20,
  },
  loginInput: {
    backgroundColor: "#0369a1",
    borderColor: "#0284c7",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    color: "#f0f9ff",
  },
  loginButton: {
    backgroundColor: "#0284c7",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  loginButtonText: {
    color: "#f0f9ff",
    fontWeight: "bold",
  },
  inputLabel: {
    color: "#f0f9ff",
    fontSize: 14,
    marginBottom: 8,
  },
  errorText: {
    color: "#ef4444",
    marginBottom: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  logoutButton: {
    position: "absolute",
    right: 0,
    top: 0,
    backgroundColor: "#ef4444",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  logoutButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default styles;
