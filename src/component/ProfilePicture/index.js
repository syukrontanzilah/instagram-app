import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const ProfilePicture = ({uri}) => {
    return (
        <View style={styles.container}>
            <Image
                source={{uri:uri}}
                style={styles.image} />
        </View>
    )
}

export default ProfilePicture

const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: 85,
        width: 85,
        borderColor: 'violet',
        borderWidth: 3,
        borderRadius: 85 / 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 80 / 2,
    },
})
