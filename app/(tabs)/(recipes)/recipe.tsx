import { StyleSheet } from "react-native"
import PagerView from "react-native-pager-view"
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

  const pagerRef = useRef<PagerView>(null) // Create reference

  const handleChange = (val: string, name: string) => {
    console.log([name])
    setRecipe({...recipe, [name]: val})
  }
  const goToPage = (pageIndex: number) => {
    pagerRef.current?.setPageWithoutAnimation(pageIndex)
  }

  return (
    <ThemedView style={styles.container}>
      <PagerView style={styles.container} initialPage={0} ref={pagerRef}>
        <ThemedView key="1">
          <RecipeInfo 
            name={recipe}
            handleChange={handleChange}
            goToPage={goToPage} 
          />
        </ThemedView>
        <ThemedView key="2">
          <RecipeIngredients goToPage={goToPage} />
        </ThemedView>
        <ThemedView key="3">
          <RecipeSteps goToPage={goToPage} />
        </ThemedView>
        <ThemedView key="4">
          <RecipeSave />
        </ThemedView>
      </PagerView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Recipe