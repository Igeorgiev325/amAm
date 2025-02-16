
import { Button, ButtonGroup, Input } from "@rneui/themed"

import { ThemedView } from "@/components/ThemedView"
import StepModel from "../models/StepsModel"
import RecipeModel from "../models/RecipeModel"

type InfoProps = {
  name: RecipeModel,
  handleChange: (val: string, field: keyof RecipeModel) => void
  goToPage: () => void
}

export default function DetailsStep({ name, handleChange, goToPage }: InfoProps) {
  return (
    <ThemedView style={{ justifyContent: 'space-evenly', height: '100%'}}>
      <ThemedView style={{ }}>
        <Input
          label="Име"
          placeholder="Име на рецепта"
          inputStyle={{ color: 'white'}}
          value={name.name}
          onChangeText={(val) => handleChange(val, 'name')}
        />
        <Input
          label="Категория"
          placeholder="Категория"
          inputStyle={{ color: 'white'}}
          value={name.category}
          onChangeText={(val) => handleChange(val, 'category')}
        />
        <Button title="Снимка" />
      </ThemedView>

      <Button title="Съставки" onPress={() => goToPage()} />
    </ThemedView>
  )
}