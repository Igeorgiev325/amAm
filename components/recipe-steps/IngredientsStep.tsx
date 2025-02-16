import { StyleSheet } from "react-native"
import { useState } from 'react'

import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { Button, Input } from "@rneui/themed"

type IngredientsProps = {
  goToPage: (index: number) => void
}

type Field = {
  id: number,
  ingredient: string
}

export default function RecipeIngredients({ goToPage }: IngredientsProps) {
  const [fields, setField] = useState<string[]>([''])

  const addNewField = () => {
    setField(e => [...e, ''])
  }

  const handleChange = (text: string, ind: any) => {
    const newField = [...fields]
    newField[ind] = text
    setField(newField)
  }

  const handlePress = (ind: any) => {
    const newerField = fields.filter((_, i) => i !== ind) 
    setField(newerField)
  }

  return (
    <ThemedView style={{ height: '100%', justifyContent: 'space-evenly' }}>
      <ThemedView style={{ gap: 20 }}>
        {fields.map((field, ind) => (
          <ThemedView key={ind} style={{ flexDirection: 'row', alignItems: 'center'}}>
            <Input
              placeholder={`Съставка №${ind + 1}`}
              value={field}
              onChangeText={(text: string) => handleChange(text, ind)}
              inputStyle={{ color: 'white' }}
            />
            <ThemedText onPress={() => handlePress(ind)}>X</ThemedText>
          </ ThemedView>
        ))}
      </ThemedView>

      <Button title="Нова съставка" onPress={() => addNewField()} />

      <Button title="Стъпки" onPress={() => goToPage(2)} />
    </ThemedView>
  )
}

const styles = StyleSheet.create({

})
