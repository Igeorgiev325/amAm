import { useState } from "react";
import { Button, ButtonGroup, Input } from "@rneui/themed";

import { ThemedView } from "@/components/ThemedView";
import StepModel from "../models/StepsModel";
import RecipeModel from "../models/RecipeModel";

type InfoProps = {
  name: RecipeModel;
  handleChange: (val: string, field: keyof RecipeModel) => void;
  goToPage: () => void;
};

interface DetailsValidation {
  nameV: string;
  categoryV: string;
}

export default function DetailsStep({
  name,
  handleChange,
  goToPage,
}: InfoProps) {
  const [errors, setErrors] = useState<DetailsValidation>({
    nameV: "",
    categoryV: "",
  });

  const handleNameValidation = () => {
    if (name.name === "") {
      setErrors((e) => ({ ...e, nameV: "Required" }));
    } else {
      setErrors((e) => ({...e, nameV: ''}))
    }
  };

  const handleCategoryValidation = () => {
    if (name.category === "") {
      setErrors((e) => ({ ...e, categoryV: "Required" }));
    } else {
      setErrors((e) => ({...e, categoryV: ''}))
    }
  };

  return (
    <ThemedView style={{ justifyContent: "space-evenly", height: "100%" }}>
      <ThemedView style={{}}>
        <Input
          label="Име"
          placeholder="Име на рецепта"
          inputStyle={{ color: "white" }}
          value={name.name}
          onChangeText={(val) => handleChange(val, "name")}
          onBlur={handleNameValidation}
          errorMessage={errors.nameV}
        />
        <Input
          label="Категория"
          placeholder="Категория"
          inputStyle={{ color: "white" }}
          value={name.category}
          onChangeText={(val) => handleChange(val, "category")}
          onBlur={handleCategoryValidation}
          errorMessage={errors.categoryV}
        />
        <Button title="Снимка" />
      </ThemedView>

      <Button title="Съставки" onPress={() => goToPage()} />
    </ThemedView>
  );
}
