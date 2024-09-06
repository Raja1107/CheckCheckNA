import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Session } from "@supabase/supabase-js";
import { supabase } from "./src/components/Supabase";
import ToDoList from "./src/components/ToDoList";
import Login from "./src/components/Login";
import styles from "./styles/styles";

export default function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      {!session ? (
        <Login onLogin={() => {}} />
      ) : (
        <View style={styles.innerContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>INBOX</Text>
            <TouchableOpacity
              onPress={handleLogout}
              style={styles.logoutButton}
            >
              <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
          </View>
          <ToDoList />
        </View>
      )}
    </SafeAreaView>
  );
}
