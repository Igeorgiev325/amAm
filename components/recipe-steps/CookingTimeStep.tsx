import { Button, Input } from "@rneui/themed";

import { ThemedView } from "@/components/ThemedView";

export default function RecipeSave() {
  return (
    <ThemedView>
      <Input 
        label="Време"
        placeholder="Време за приготвяне"
        inputMode="numeric"
      />
      <Button title="Log the recipe"/>
    </ThemedView>
  )
}