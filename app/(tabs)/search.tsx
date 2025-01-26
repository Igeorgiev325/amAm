import { useState } from "react";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { SearchBar } from "@rneui/themed";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

export default function Search() {
  const [text , setText] = useState('')

  const handleChange = (e: string) => {
    console.log(e)
    setText(e)
  }

  return (
    <ParallaxScrollView>
      <SearchBar placeholder="Search" onChangeText={handleChange} value={text} />
    </ParallaxScrollView>
  )
}