import { Dimensions, ScrollView, StyleSheet } from "react-native";
import React, { useState, useRef, useMemo } from "react";
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

const { width, height } = Dimensions.get("window");

const Recipe = () => {
  const scrollOffsetValue = useSharedValue<number>(0);
  const progress = useSharedValue<number>(0);
  const ref = useRef<ICarouselInstance>(null);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  const [recipe, setRecipe] = useState<RecipeModel>({
    name: "",
    category: "",
    picture: [""],
    ingredients: [""],
    steps: [
      {
        name: "",
        description: "",
        isChecked: false,
      },
    ],
    time: "",
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

  const handleChange = (val: string, field: keyof RecipeModel) => {
    setRecipe((prev) => ({ ...prev, [field]: val }));
  };

  const addNewField = () => {
    setRecipe((r) => ({ ...r, ingredients: [...r.ingredients, ""] }));
  };

  const handleIngredientChange = (text: string, index: number) => {
    setRecipe((prev) => {
      let ingredients = [...prev.ingredients];
      ingredients[index] = text;
      return { ...prev, ingredients };
    });
  };

  const updateStepField = (text: string, val: "name" | "description") => {
    setRecipe((prev) => {
      let updatedSteps = [...prev.steps];
      updatedSteps[currentStepIndex] = {
        ...updatedSteps[currentStepIndex],
        [val]: text,
      };
      return { ...prev, steps: updatedSteps };
    });
  };

  const toggleSwitch = () => {
    setRecipe((prev) => {
      let updatedSteps = [...prev.steps];
      updatedSteps[currentStepIndex] = {
        ...updatedSteps[currentStepIndex],
        isChecked: !updatedSteps[currentStepIndex].isChecked,
      };

      return { ...prev, steps: updatedSteps };
    });
  };

  const addStepField = () => {
    let canCreate = true 
    recipe.steps.forEach(s => {
      if (s.name !== '' && s.description !== '') {
        console.log("Create new step")
      } else {
        canCreate = false
      }
    })

    canCreate ?
    setRecipe((prev) => {
      const newSteps = [
        ...prev.steps,
        { name: "", description: "", isChecked: false },
      ];
      // Update currentStepIndex to point to the newly added step.
      setCurrentStepIndex(newSteps.length - 1);
      return { ...prev, steps: newSteps };
    })
    : ''
  };

  const logRecipe = () => {
    console.log("Recipe: ", recipe);
  };

  const goToPage = () => {
    ref.current?.scrollTo({
      count: 1,
      animated: true,
    });
  };

  const carouselData = useMemo(
    () => [
      <DetailsStep
        key="details"
        name={recipe}
        handleChange={handleChange}
        goToPage={goToPage}
      />,
      <IngredientsStep
        key="ingredients"
        fields={recipe.ingredients}
        addNewField={addNewField}
        handleChange={handleIngredientChange}
        goToPage={goToPage}
      />,
      <StepsStep
        key="steps"
        steps={recipe.steps}
        currentStepIndex={currentStepIndex}
        setCurrentStepIndex={setCurrentStepIndex}
        updateStepField={updateStepField}
        toggleSwitch={toggleSwitch}
        addStepField={addStepField}
        goToPage={goToPage}
      />,
      <CookingTimeStep
        key="cookingTime"
        timer={recipe.time}
        updateTimer={handleChange}
        logRecipe={logRecipe}
      />,
    ],
    [recipe, currentStepIndex]
  );

  return (
    <ThemedView style={{ flex: 1 }}>
      <Carousel
        ref={ref} // Attach the ref here
        testID={"xxx"}
        width={width}
        height={height - 150}
        data={carouselData}
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
            {carouselData[index]}
          </ScrollView>
        )}
      />

      <Pagination.Basic
        progress={progress}
        data={carouselData}
        dotStyle={{ backgroundColor: "#262626" }}
        activeDotStyle={{ backgroundColor: "#f1f1f1" }}
        containerStyle={{ gap: 5, marginBottom: 10 }}
        onPress={onPressPagination}
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({});

export default Recipe;
