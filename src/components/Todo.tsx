import { ToDoItemProps } from "../types";
import styles from "../../styles/styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity, View } from "react-native";

const Todo = ({ todo, onUpdate, onDelete }: ToDoItemProps) => {
  const handleUpdate = () => {
    onUpdate({ ...todo, is_complete: !todo.is_complete });
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <View style={styles.todocontainer}>
      <TouchableOpacity onPress={handleUpdate} style={styles.todobutton}>
        <Ionicons
          name="checkmark"
          size={24}
          color={todo.is_complete ? "gray" : "#FFFFFF"}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDelete} style={styles.todobutton}>
        <Ionicons
          name="trash"
          size={24}
          color={todo.is_complete ? "gray" : "#FFFFFF"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Todo;
