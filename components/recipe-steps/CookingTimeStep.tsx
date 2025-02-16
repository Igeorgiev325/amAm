import { Button, Input } from "@rneui/themed";

import { ThemedView } from "@/components/ThemedView";
import RecipeModel from "../models/RecipeModel";

interface CookingTimeStepProps {
  timer: string,
  updateTimer: (val: string, field: keyof RecipeModel) => void
  logRecipe: () => void
}

export default function CookingTimeStep({ timer, updateTimer, logRecipe }: CookingTimeStepProps) {
  return (
    <ThemedView>
      <Input 
        label="Време"
        placeholder="Време за приготвяне"
        inputMode="numeric"
        value={timer}
        onChangeText={(text) => updateTimer(text, "time")}
        inputStyle={{ color: 'white' }}
      />
      <Button title="Log the recipe" onPress={logRecipe}/>
    </ThemedView>
  )
}