import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState, useRef } from "react";
import { Dimensions, Image, TouchableOpacity } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";

interface Recipe {
  name: string;
  description: string;
  images: string[];
}

const recipe: Recipe[] = [
  {
    name: "Lorem",
    description: "lorLorem ipsum dolor sit amet consectetur adipisicing elit",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Desserts.jpg/220px-Desserts.jpg",
      "https://images.immediate.co.uk/production/volatile/sites/30/2013/05/dinner-party-dessert-pie-ae803a7.jpg?quality=90&resize=556,505",
      "https://c.ndtvimg.com/2020-04/chd4rs3g_dessert_625x300_07_April_20.jpg",
    ],
  },
  {
    name: "Minus",
    description: "Minus consequatur explicabo repudiandae odit at",
    images: [
      "https://images.immediate.co.uk/production/volatile/sites/30/2022/05/Chocolate-sandwich-cupcakes-4b30ada.jpg?quality=90&resize=556,505",
      "https://www.fifteenspatulas.com/wp-content/uploads/2015/12/Oreo-Truffles-Easy-Dessert-Recipes-Fifteen-Spatulas-2.jpg",
    ],
  },
  {
    name: "deserunt",
    description: "deserunt harum ducimus amet laborum id",
    images: [
      "https://www.brit.co/media-library/3-ingredient-dessert-recipes.jpg?id=23305200&width=400&height=493",
      "https://www.howtocookthat.net/public_html/wp-content/uploads/2015/08/IMG_9167-550x413.jpg",
    ],
  },
];

const width = Dimensions.get("window").width;

export default function FeedScreen() {
  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);
  
  const [stepIndex, setStepIndex] = useState<number>(0)

  const alaBala = () =>
    recipe[stepIndex].images.map((image, i) => (
      <ThemedView key={i}>
        <ThemedText>Step {stepIndex + 1}</ThemedText>
        <ThemedText>{recipe[stepIndex].name}</ThemedText>
        <ThemedText>{recipe[stepIndex].description}</ThemedText>
        <Image source={{ uri: image }} style={{ width: 250, height: 250 }} />
      </ThemedView>
    ));

  const data = alaBala();
  console.log(data);

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

  const goNext = () => {
    if (stepIndex + 1 <= recipe.length - 1) {
      setStepIndex(s => s + 1)
      ref.current?.scrollTo({
        count: 0,
        animated: false,
      });
    } else {
      console.log("disable button")
    }
  };

  const goPrev = () => {
    if (stepIndex > 0) {
      setStepIndex(s => s - 1)
      ref.current?.scrollTo({
        count: 0,
        animated: false,
      });
    } else {
      console.log("disable button")
    }

  };

  return (
    <ThemedView style={{ flex: 1 }}>
      <Carousel
        ref={ref}
        width={width}
        height={width / 2}
        data={data}
        onProgressChange={progress}
        // autoPlayInterval={10000}
        // autoPlay
        loop={false}
        enabled={true}
        renderItem={({ index }) => data[index]}
      />

      <Pagination.Basic
        progress={progress}
        data={data}
        dotStyle={{
          backgroundColor: "rgba(243, 243, 243, 0.2)",
          borderRadius: 50,
        }}
        containerStyle={{ gap: 5, marginTop: 10 }}
        onPress={onPressPagination}
      />
      <ThemedView style={{ flexDirection: "row", marginTop: 20 }}>
        <TouchableOpacity onPress={goPrev} style={styles.button}>
          <ThemedText>◀ Prev</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity onPress={goNext} style={styles.button}>
          <ThemedText>Next ▶</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
}

const styles = {
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
  },
  text: { fontSize: 24 },
  button: {
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: "tomato",
    borderRadius: 5,
  },
};
