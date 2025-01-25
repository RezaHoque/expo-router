import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _tablayout = () => {
  return (
    <Stack>
        <Stack.Screen name="customer" options={{headerShown:false}}/>
        <Stack.Screen name="accounts" options={{headerShown:false}}/>
    </Stack>
  )
}

export default _tablayout