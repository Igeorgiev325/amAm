import { Dimensions, ScrollView, StyleSheet } from "react-native";
import React, { useState, useRef } from "react";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";
import { useSharedValue } from "react-native-reanimated";

import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import DetailsStep from "../../../components/recipe-steps/DetailsStep";
import IngredientsStep from "../../../components/recipe-steps/IngredientsStep";
import StepsStep from "../../../components/recipe-steps/StepsStep";
import CookingTimeStep from "../../../components/recipe-steps/CookingTimeStep";
import RecipeModel from "@/components/models/RecipeModel";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Recipe = () => {
  const scrollOffsetValue = useSharedValue<number>(0);
  const progress = useSharedValue<number>(0);
  const ref = useRef<ICarouselInstance>(null);
  const [recipe, setRecipe] = useState<RecipeModel>({
    name: "",
    category: "",
    picture: [""],
    ingredients: [""],
    steps: [
      {
        name: "",
        description: "",
        picture: "",
      },
    ],
    time: 0,
  });

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };

  const handleChange = (val: string, name: string) => {
    setRecipe({ ...recipe, [name]: val });
  };

  const addNewField = () => {
    setRecipe((r) => ({ ...r, ingredients: [...r.ingredients, ""] }));
  };

  const handleIngredientChange = (text: string, ind: any) => {
    let ingredients = [...recipe.ingredients]
    ingredients[ind] = text
    setRecipe((r) => ({ ...r, ingredients }))
  };

  const logRecipe = () => {
    console.log("Recipe: ", recipe)
  }

  const goToPage = () => {
    ref.current?.scrollTo({
      count: 1,
      animated: true,
    });
  };

  const data = [
    <DetailsStep
      name={recipe}
      handleChange={handleChange}
      goToPage={goToPage}
    />,
    <IngredientsStep
      fields={recipe.ingredients}
      addNewField={addNewField}
      handleChange={handleIngredientChange}
      goToPage={goToPage}
    />,
    <StepsStep goToPage={goToPage} />,
    <CookingTimeStep
      logRecipe={logRecipe}
    />,
  ];

  return (
    <ThemedView style={{ flex: 1 }}>
      <Carousel
        ref={ref} // Attach the ref here
        testID={"xxx"}
        width={width}
        height={height - 150}
        data={data}
        loop={false}
        defaultScrollOffsetValue={scrollOffsetValue}
        style={{ width: "100%" }}
        onSnapToItem={(index: number) => console.log("current index:", index)}
        onProgressChange={progress}
        renderItem={({ index }) => (
          <ScrollView
            contentContainerStyle={{
              paddingHorizontal: 40,
              justifyContent: "center",
              height: "100%",
            }}
          >
            {data[index]}
          </ScrollView>
        )}
      />

      <Pagination.Basic
        progress={progress}
        data={data}
        dotStyle={{ backgroundColor: "#262626" }}
        activeDotStyle={{ backgroundColor: "#f1f1f1" }}
        containerStyle={{ gap: 5, marginBottom: 10 }}
        onPress={onPressPagination}
      />
    </ThemedView>
  );

  // const [recipe, setRecipe] = useState<RecipeModel>({
  //   name: '',
  //   category: '',
  //   picture: [''],
  //   ingredients: [''],
  //   steps: [{
  //     name: '',
  //     description: '',
  //     picture: ''
  //   }],
  //   time: 0
  // })

  // const handleChange = (val: string, name: string) => {
  //   console.log(val)
  //   setRecipe({ ...recipe, [name]: val })
  // }

  // const goToPage = (pageIndex: number) => {
  //   console.log(pageIndex)
  // }

  // return (
  //   <ThemedView style={styles.container}>
  //     <ScrollView horizontal>
  //       <ThemedView style={ styles.viewWindow }>
  //         <RecipeInfo
  //           name={recipe}
  //           handleChange={handleChange}
  //           goToPage={goToPage}
  //         />
  //       </ThemedView>
  //       <ThemedView style={ styles.viewWindow }>
  //         <RecipeIngredients goToPage={goToPage} />
  //       </ThemedView>
  //       <ThemedView style={ styles.viewWindow }>
  //         <RecipeSteps goToPage={goToPage} />
  //       </ThemedView>
  //       <ThemedView style={ styles.viewWindow }>
  //         <RecipeSave />
  //       </ThemedView>
  //     </ScrollView>
  //   </ThemedView>
  // )
};

const styles = StyleSheet.create({});

export default Recipe;
