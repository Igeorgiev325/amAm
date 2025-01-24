import { Image, ImageBackground, ScrollView, StyleSheet } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import PillButton from "@/components/PillButton";

export default function Index() {
  return (
    <ParallaxScrollView>
      {/* Pills */}
      <ThemedView style={styles.btnContainer}>
        <PillButton title='Любими' />
        <PillButton title='Открий' />
        <PillButton title='Последвани' />
      </ThemedView>

      {/* Carousel */}
      <ThemedView style={styles.carouselContainer}>
        <ImageBackground
          source={require('@/assets/images/fruits.png')}
          style={{ width: '100%', height: 100 }}
        >
          <ThemedText style={styles.carouselText}>Вкусни Предложения</ThemedText>
        </ImageBackground>
      </ThemedView>

      {/*Categories */}
      <ThemedView>
        <ThemedText type="subtitle" style={styles.subtitleText}>Категории</ThemedText>
        <ScrollView horizontal={true}>
          <ThemedView style={styles.categoriesContainer}>
            <ThemedView>
              <Image
                source={require('@/assets/images/qstiq.png')}
                style={{ width: 60, height: 60, borderRadius: 30 }}
              />
              <ThemedText style={styles.categoriesText}>Ястия</ThemedText>
            </ThemedView>
            <ThemedView>
              <Image
                source={require('@/assets/images/supi.png')}
                style={{ width: 60, height: 60, borderRadius: 30 }}
              />
              <ThemedText style={styles.categoriesText}>Супи</ThemedText>
            </ThemedView>
            <ThemedView>
              <Image
                source={require('@/assets/images/deserti.png')}
                style={{ width: 60, height: 60, borderRadius: 30 }}
              />
              <ThemedText style={styles.categoriesText}>Десерти</ThemedText>
            </ThemedView>
          </ThemedView>
        </ScrollView>
      </ThemedView>

      {/*Recipes */}
      <ThemedView>
        <ThemedText type="subtitle" style={styles.subtitleText}>Рецепти</ThemedText>
        <ScrollView horizontal={true}>
          <ThemedView style={styles.recipesContainer}>
            <ThemedView>
              <Image
                source={require('@/assets/images/musaka.png')}
                style={{ width: 115, height: 85, borderRadius: 5 }}
              />
              <ThemedText type="faint">Ястия</ThemedText>
              <ThemedText>Мусака</ThemedText>
            </ThemedView>
            <ThemedView>
              <Image
                source={require('@/assets/images/gyuvech.png')}
                style={{ width: 115, height: 85, borderRadius: 5 }}
              />
              <ThemedText type="faint">Ястия</ThemedText>
              <ThemedText>Гювеч</ThemedText>
            </ThemedView>
            <ThemedView>
              <Image
                source={require('@/assets/images/pileskasupa.png')}
                style={{ width: 115, height: 85, borderRadius: 5 }}
              />
              <ThemedText type="faint">Супи</ThemedText>
              <ThemedText>Пилешка супа</ThemedText>
            </ThemedView>
            <ThemedView>
              <Image
                source={require('@/assets/images/brauni.png')}
                style={{ width: 115, height: 85, borderRadius: 5 }}
              />
              <ThemedText type="faint">Десерти</ThemedText>
              <ThemedText>Шоколадово брауни</ThemedText>
            </ThemedView>
          </ThemedView>
        </ScrollView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  carouselContainer: {

  },
  carouselText: {
    width: '40%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 20
  },
  subtitleText: {
    paddingBottom: 10,
  },
  categoriesContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  categoriesText: {
    textAlign: 'center'
  },
  recipesContainer: {
    flexDirection: 'row',
    gap: 20,
  }
})
