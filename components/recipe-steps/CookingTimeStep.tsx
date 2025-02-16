import { Button, Input } from "@rneui/themed";

import { ThemedView } from "@/components/ThemedView";

interface CookingTimeStepProps {
  logRecipe: () => void
}

export default function CookingTimeStep({ logRecipe }: CookingTimeStepProps) {
  return (
    <ThemedView>
      <Input 
        label="Време"
        placeholder="Време за приготвяне"
        inputMode="numeric"
      />
      <Button title="Log the recipe" onPress={logRecipe}/>
    </ThemedView>
  )
}