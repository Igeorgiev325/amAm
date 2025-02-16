import StepsModel from './StepsModel'

interface RecipeModel {
    name: string,
    category: string,
    picture: string[],
    ingredients: string[],
    steps: StepsModel[],
    time: number
  }

  export default RecipeModel