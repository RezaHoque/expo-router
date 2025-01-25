import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const _customTablayout = () => {
  return (
    <Tabs>
    <Tabs.Screen name="customerTab1"
      options={{
        title: 'tab1',
        headerShown: false,
        tabBarIcon:({color,size})=>(
          <Ionicons name="bag-add-outline" color={color} size={size} />
         )}}
    />
    <Tabs.Screen name="customerTab2"
       options={{
        title: 'tab2',
        headerShown: false,
        tabBarIcon:({color,size})=>(
          <Ionicons name="list-circle-outline" color={color} size={size} />
         )}}
   />
     <Tabs.Screen name="customerTab3"
       options={{
        title: 'tab3',
        headerShown: false,
        tabBarIcon:({color,size})=>(
          <Ionicons name="list-circle-outline" color={color} size={size} />
         )}}
   />
    <Tabs.Screen name="index" 
      options={{
        href:null,
      }}
      />
    
</Tabs>
  )
}

export default _customTablayout