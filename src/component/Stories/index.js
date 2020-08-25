import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Story from '../Story'

const data = [
    {
        id: 1,
        imageUri: 'https://cdn.idntimes.com/content-images/community/2019/10/1570055614033-instasave-b58e06413ecd31b1e0932e6374245076.jpg',
        name: 'Alwi Assegaff'
    },
    {
        id: 2,
        imageUri: 'https://idsb.tmgrup.com.tr/2015/04/28/GenelBuyuk/1430251914251_rs.jpg',
        name: 'Maher zain'
    },
    {
        id: 3,
        imageUri: 'https://cdn1-production-images-kly.akamaized.net/TV8bjwcNyaFT1Pw1ZLmkTVzWu28=/640x640/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2256440/original/045826600_1529642454-nissa_sabyan.JPG',
        name: 'Nisa Sabyan'
    },
    {
        id: 4,
        imageUri: 'https://eliechan12.files.wordpress.com/2010/01/m_kholidi_asadil_alam-20090720-001-wawan.jpg?w=584',
        name: 'Abdullah Khoirul azzam'
    },
    {
        id: 5,
        imageUri: 'https://cdns.klimg.com/dream.co.id/resized/640x480/news/2020/07/07/141169/selamat-oki-setiana-dewi-hamil-anak-keempat-2007072.jpg',
        name: 'Oki Setiana Dewi'
    }
]

const Stories = () => {
    return (
        <View style={styles.container}>
            {/* <Story imageUri={data[0].imageUri} name={data[0].name}/>
            <Story imageUri={data[1].imageUri} name={data[1].name}/>
            <Story imageUri={data[2].imageUri} name={data[2].name}/>
            <Story imageUri={data[3].imageUri} name={data[3].name}/> */}
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
             keyExtractor={({id})=> id}
                data={data}
                renderItem={({ item }) => <Story imageUri={item.imageUri} name={item.name} />}
            />
        </View>
    )
}

export default Stories

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    }
})
