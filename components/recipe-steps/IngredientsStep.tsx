import { StyleSheet } from "react-native";
import { useState } from "react";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Button, Input } from "@rneui/themed";

type IngredientsProps = {
  fields: string[];
  addNewField: () => void;
  handleChange: (text: string, ind: any) => void;
  goToPage: () => void;
};

export default function IngredientsStep({
  fields,
  addNewField,
  handleChange,
  goToPage,
}: IngredientsProps) {
  // const handlePress = (ind: any) => {
  //   const newerField = fields.filter((_, i) => i !== ind)
  //   setField(newerField)
  // }
  const [errors, setErrors] = useState<any>({fieldsV: ''});

  const handleIngredientsValidation = () => {
    if (fields[0] === '') {
      setErrors({fieldsV: 'Required'})
    }}
  

  return (
    <ThemedView style={{ height: "100%", justifyContent: "space-evenly" }}>
      <ThemedView style={{ gap: 20 }}>
        {fields.map((field, ind) => (
          <ThemedView
            key={ind}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Input
              placeholder={`Съставка №${ind + 1}`}
              value={field}
              onChangeText={(text: string) => handleChange(text, ind)}
              inputStyle={{ color: "white" }}
              onBlur={handleIngredientsValidation}
              errorMessage={errors.fieldsV}
            />
            {/* <ThemedText onPress={() => handlePress(ind)}>X</ThemedText> */}
          </ThemedView>
        ))}
        <Button title="Нова съставка" onPress={() => addNewField()} />
      </ThemedView>

      <Button title="Стъпки" onPress={() => goToPage()} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({});
