import { ScrollView, StyleSheet } from "react-native"
import React, { useState, useRef } from "react"

import { ThemedView } from "@/components/ThemedView"
import { ThemedText } from "@/components/ThemedText"
import RecipeInfo from "./recipe-info"
import RecipeIngredients from "./recipe-ingredients"
import RecipeSteps from "./recipe-steps"
import RecipeSave from "./recipe-save"

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

const Recipe = () => {
  const [recipe, setRecipe] = useState<Recipe>({
    name: '',
    category: '',
    picture: [''],
    ingredients: [''],
    steps: [{
      name: '',
      description: '',
      picture: ''
    }],
    time: 0
  })


  const handleChange = (val: string, name: string) => {
    console.log(val)
    setRecipe({ ...recipe, [name]: val })
  }

  const goToPage = (pageIndex: number) => {
    console.log(pageIndex)
  }

  return (
    <ThemedView style={styles.container}>
      <ScrollView horizontal>
        <ThemedView style={ styles.viewWindow }>
          <RecipeInfo
            name={recipe}
            handleChange={handleChange}
            goToPage={goToPage}
          />
        </ThemedView>
        <ThemedView style={ styles.viewWindow }>
          <RecipeIngredients goToPage={goToPage} />
        </ThemedView>
        <ThemedView style={ styles.viewWindow }>
          <RecipeSteps goToPage={goToPage} />
        </ThemedView>
        <ThemedView style={ styles.viewWindow }>
          <RecipeSave />
        </ThemedView>
      </ScrollView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewWindow: {
    width: 375,
    paddingHorizontal: 40,
  }
});

export default Recipe