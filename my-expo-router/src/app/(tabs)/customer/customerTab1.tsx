import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const customerTab1 = () => {
  return (
    <View>
      <Text>customerTab1</Text>
      <Link href="/" style={styles.link}>
        <Text>Home</Text>
      </Link>
    </View>
  )
}

export default customerTab1
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    link:{
        padding: 10,
        bordercolor: 'black',
        borderwidth: 1,
        margin: 5,
        color: 'black',
        backgroundColor: 'lightgrey',
        width: 200

    }
}