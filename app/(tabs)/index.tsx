import { Button, StyleSheet } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import PillButton from "@/components/PillButton";

export default function Index() {
  return (
    <ParallaxScrollView>
      <ThemedView style={styles.btnContainer}>
        <PillButton title='Любими'/>
        <PillButton title='Последвани'/>
        <PillButton title='Последвани'/>
      </ThemedView>

      {/* Carousel */}

      {/*Categories */}

      {/*Recipes */}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
