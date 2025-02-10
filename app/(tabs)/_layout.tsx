import { router, Tabs } from "expo-router";
import { Icon } from '@rneui/themed'

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Button, color } from "@rneui/base";


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarLabelPosition: 'beside-icon',
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <Icon name='home' size={28} color={color} />
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color }) => <Icon name="search" size={28} color={color} />
        }}
      />
      <Tabs.Screen
        name="feed"
        options={{
          tabBarIcon: ({ color }) => <Icon name="rowing" size={28} color={color} />,
          headerShown: true,
          headerRight: () => <Button onPress={() => router.push('../(recipes)/recipe')} title="Add" />
        }}
      />
      <Tabs.Screen
        name="(recipes)/recipe"
        options={{
          href: null, headerShown: true, headerTitle: "Recipe", headerTitleAlign: 'center', headerTitleStyle: { fontWeight: 'bold' },
          // headerRight: () => <Button type="outline" icon={{
          //   name: 'home',
          //   type: 'font-awesome',
          //   size: 15,
          //   color: 'white',
          // }} />
        }}
      />
      <Tabs.Screen
        name="(recipes)/recipe-info"
        options={{ href: null }}
      />
      <Tabs.Screen
        name="(recipes)/recipe-ingredients"
        options={{ href: null }}
      />
      <Tabs.Screen
        name="(recipes)/recipe-steps"
        options={{ href: null }}
      />
      <Tabs.Screen
        name="(recipes)/recipe-save"
        options={{ href: null }}
      />
    </Tabs>
  )
}