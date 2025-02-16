
import { Button, ButtonGroup, Input } from "@rneui/themed"

import { ThemedView } from "@/components/ThemedView"

type InfoProps = {
  name: Recipe,
  handleChange: (val: string, name: string) => void
  goToPage: () => void
}

type Recipe = {
  name: string,
  category: string,
  picture: string[],
  ingredients: string[],
  steps: Steps[],
  time: number
}

type Steps = {
  name: string,
  description: string,
  picture: string
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