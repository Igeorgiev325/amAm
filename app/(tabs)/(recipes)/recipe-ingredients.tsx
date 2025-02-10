import { TextInput, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { Button } from "@rneui/themed"

type IngredientsProps = {
  goToPage: (index: number) => void
}

export default function RecipeIngredients({ goToPage }: IngredientsProps) {
  return (
    <ThemedView>
      <Button title="Нова съставка" />

      <Button title="Стъпки" onPress={() => goToPage(2)} />
    </ThemedView>
  )
}

const styles = StyleSheet.create({

})
