import { Button, Input } from "@rneui/themed";
import { useState } from "react";
import { Switch, StyleSheet } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "../ThemedText";
import StepModel from "../models/StepsModel";

type StepProps = {
  steps: StepModel[]
  currentStepIndex: number
  setCurrentStepIndex: (i: number) => void
  updateStepField: (text: string, val: "name" | "description") => void
  toggleSwitch: () => void
  addStepField: () => void
  goToPage: () => void;
};


export default function StepsStep({ steps, currentStepIndex, setCurrentStepIndex, updateStepField, toggleSwitch, addStepField, goToPage }: StepProps) {

  return (
    <ThemedView style={{ gap: 40 }}>
      <ThemedView style={{ flexDirection: 'row', gap: 10 }}>
        {steps.map((_, i) => (
        <Button key={i} title={`step ${i}`} onPress={() => setCurrentStepIndex(i)} buttonStyle={i === currentStepIndex && styles.activeStep} style={{ width: 50 }} />
      ))}
      </ThemedView>
      <ThemedView>
        <Input
          label="Име"
          placeholder="Име на стъпката"
          value={steps[currentStepIndex].name}
          onChangeText={(text) => updateStepField(text, "name")}
          inputStyle={{ color: "white" }}
        />
        <Input
          label="Описание"
          placeholder="Описание на стъпката"
          value={steps[currentStepIndex].description}
          onChangeText={(text) => updateStepField(text, "description")}
          inputStyle={{ color: "white" }}
        />
        <Switch
          value={steps[currentStepIndex].isChecked}
          onValueChange={toggleSwitch}
        />
      </ThemedView>

      <Button title="Добави стъпка" onPress={() => addStepField()} />
      <Button title="Запазване" onPress={() => goToPage()} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  activeStep: {
    backgroundColor: 'green'
  }
})