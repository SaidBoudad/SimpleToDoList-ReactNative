import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/Header";
import ToDoItem from "./components/ToDoItem";
import AddToDo from "./components/AddToDo";

export default function App() {
  const [toDos, setToDos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an pp", key: "2" },
    { text: "play", key: "3" },
  ]);

  const pressHandler = (key) => {
    setToDos((prevList) => {
      return prevList.filter((item) => item.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setToDos((prevList) => {
        return [{ text: text, key: Math.random() * 100 }, ...prevList];
      });
    } else
      Alert.alert("not allowed", "the added to do is less than 3 carachters", [
        { text: "understood" },
      ]);
  };

  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss()
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddToDo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={toDos}
              renderItem={({ item }) => (
                <ToDoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex:1,
    padding: 40,
    
  },
  list: {
    flex:1,
    marginTop: 5,
    
  },
});
