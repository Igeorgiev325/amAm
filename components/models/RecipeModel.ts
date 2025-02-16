import StepModel from './StepsModel'

interface RecipeModel {
    name: string,
    category: string,
    picture: string[],
    ingredients: string[],
    steps: StepModel[],
    time: string
  }

  export default RecipeModel