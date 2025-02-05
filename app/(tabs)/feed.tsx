import { Button } from "@rneui/themed";
import { router } from "expo-router";

export default function FeedScreen() {
  return (
    <Button title="Add recipe" onPress={() => router.push('../(recipes)/recipe')}/>
  )
}