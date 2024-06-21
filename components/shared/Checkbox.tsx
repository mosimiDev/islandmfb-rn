import React, {useState} from 'react';
import { View, Text, StyleSheet } from "react-native";
import { CheckBox } from "react-native-btr";

const Checkbox = ({ label }: { label: string }) => {
 const [checked, setChecked] = useState(false);

 const handleCheckBoxToggle = () => {
  setChecked(!checked);
 };

 
 return (
  <View style={styles.row}>
   <CheckBox
    checked={checked}
    onPress={handleCheckBoxToggle}
    
   />
   <Text>{label}</Text>
  </View>
 );
};
const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: "center",
 },
 row: {
  flexDirection: "row",
  backgroundColor: "#fff",
  alignItems: "center",
  padding: 16,
 },
 label: {
  flex: 1,
  paddingHorizontal: 16,
 },
});



export default Checkbox;