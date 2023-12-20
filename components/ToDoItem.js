import react from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function ToDoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <MaterialCommunityIcons name="delete" size={24} color="#333" /> 
        <Text style={styles.itemText}> {item.text} *** {item.key}</Text>
      </View>      
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 5,
    borderBlockColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: 'row'
  },
  itemText:{
    marginLeft:10,
  }
});
