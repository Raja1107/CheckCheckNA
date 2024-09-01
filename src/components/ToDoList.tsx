import { useEffect, useState } from "react";
import Form from "./Form";
import { supabase } from "./Supabase";
import Todo from "./Todo";
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
  RefreshControl,
} from "react-native";
import styles from "../../styles/styles";
import { ToDo } from "../types";

const ToDoList = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  async function fetchData(isRefreshing = false) {
    try {
      if (!isRefreshing) {
        setLoading(true);
      }
      const { data, error } = await supabase.from("ToDo_Table").select("*");
      if (error) {
        throw new Error("Error fetching ToDos: " + error.message);
      }

      if (!data) {
        throw new Error("No data received when fetching ToDos");
      }

      setTodos(data as ToDo[]);
    } catch (error) {
      console.error("Failed to fetch ToDos: " + error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log("Todos updated:", todos);
  }, [todos]);

  const onRefresh = () => {
    setRefreshing(true);
    fetchData();
  };

  const addToDo = async (title: string) => {
    try {
      const { data, error } = await supabase
        .from("ToDo_Table")
        .insert([{ title, is_complete: false }])
        .select("*");

      if (error) {
        throw new Error("Error adding ToDo: ${error.message}");
      }
      if (!data) {
        throw new Error("No data received when adding ToDo");
      }
      console.log("Newly added todo data:", data);
      setTodos((prevTodos) => [...prevTodos, ...data]);
    } catch (error) {
      console.error("Failed to add ToDo:", error);
    }
  };

  const updateToDo = async (todo: ToDo) => {
    try {
      // Attempt to update the todo in the database by id
      const { data, error } = (await supabase
        .from("ToDo_Table")
        .update(todo)
        .eq("id", todo.id)
        .select("*")) as { data: ToDo[] | null; error: Error | null };

      if (error) {
        throw new Error(
          "Error updating ToDo (ID: ${todo.id}): ${error.message}"
        );
      }

      // Ensure data is properly typed and not empty
      if (!data || data.length === 0) {
        throw new Error(`No data received when updating ToDo (ID: ${todo.id})`);
      }

      // Update the state with the updated todo
      setTodos((prevTodos) =>
        prevTodos.map((t) => (t.id === todo.id ? data[0] : t))
      );
    } catch (error) {
      console.error("Failed to update ToDo (ID: ${todo.id}):", error);
    }
  };

  const deleteToDo = async (id: number) => {
    try {
      const { data, error } = await supabase
        .from("ToDo_Table")
        .delete()
        .eq("id", id)
        .select("*");

      if (error) {
        throw new Error("Error deleting ToDo (ID: ${id}): ${error.message}");
      }

      if (!data) {
        throw new Error("No data received when deleting ToDo (ID: ${id})");
      }

      // Remove the deleted todo from the state
      setTodos((prevTodos) => prevTodos.filter((t) => t.id !== id));
    } catch (error) {
      console.log("Failed to delete ToDo (ID: ${id}:", error);
    }
  };

  return (
    <SafeAreaView>
      <Form addToDo={addToDo} />
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007BFF" />
        </View>
      ) : (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {todos.map((todo) => (
            <View key={todo.id} style={[styles.todoItem]}>
              <Text
                style={[
                  styles.todoText,
                  todo.is_complete && styles.todoItemComplete,
                ]}
              >
                {todo.title}
              </Text>
              <Todo onUpdate={updateToDo} onDelete={deleteToDo} todo={todo} />
            </View>
          ))}
          <Text style={styles.footerText}>
            You have {todos.length} {todos.length > 1 ? "Things" : "Thing"} to
            complete!
          </Text>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};
export default ToDoList;
