import { StyleSheet, Text, View, VirtualizedList } from 'react-native'
import React from 'react';
import HeightSpacer from '../Reusable/HeightSpacer';
import { SIZES, TEXT } from '../../constants/theme';
import Country from '../Tiles/Country/Country';

const Places = () => {
    const countries = [
     {
      _id: "64c62bfc65af9f8c969a8d04",
      country: "USA",
      description:
        "The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.",
      imageUrl:
        "https://assets.enuygun.com/media/lib/570x400/uploads/image/4081.jpeg",
      region: "North America, USA",
    },
    {
      _id: "64cf2c565d14628d0ac0a2b7",
      country: "Türkiye",
      description:
        "Turkey is a country that bridges two continents, Europe and Asia, and is known for its unique blend of cultures, rich history, and stunning natural beauty. It shares borders with Greece, Bulgaria, Georgia, Armenia, Iran, Iraq, and Syria. From the bustling streets of Istanbul, where ancient mosques stand alongside modern skyscrapers, to the serene beaches of the Mediterranean and the fairy-tale landscapes of Cappadocia, Turkey offers a diverse range of experiences. The country boasts a remarkable heritage, being home to historical sites such as Troy, Ephesus, and Göbekli Tepe — one of the oldest temples in the world. Turkish cuisine, with its flavorful kebabs, mezes, and desserts like baklava, is loved around the globe. With its warm hospitality, vibrant bazaars, and lively festivals, Turkey leaves a lasting impression on every visitor.",
      imageUrl:
        "https://media.istockphoto.com/id/1499025854/tr/foto%C4%9Fraf/touristic-sightseeing-ships-in-istanbul-city-turkey.jpg?s=612x612&w=0&k=20&c=DACaBiPteLi0jkW2ODo7ehYWNhIs178w4XZhD0UODVc=",
      region: "Middle East ,Türkiye",
    },
    {
      _id: "64cf2c935d14628d0ac0a2b9",
      country: "India",
      description:
        "India is a vast and diverse country in South Asia. It is known for its cultural heritage, historical landmarks, and geographical variety. The country boasts a rich history that dates back thousands of years, with influences from various civilizations. India's landscape ranges from the snowy peaks of the Himalayas to the lush greenery of Kerala's backwaters. The Taj Mahal, Jaipur's palaces, and the ancient temples of Varanasi are just a few of the country's iconic landmarks. Indian cuisine is famous worldwide, offering a symphony of flavors and spices. With its bustling cities, serene villages, and colorful festivals, India presents a kaleidoscope of experiences for travelers.",
      imageUrl:
        "https://static7.depositphotos.com/1066611/793/i/450/depositphotos_7932088-stock-photo-taj-mahal-in-india.jpg",
      region: "South Asia, India",
    },
    {
      _id: "64cf2d095d14628d0ac0a2bd",
      country: "England",
      description:
        "England, a country within the United Kingdom, is steeped in history and culture. Its capital, London, is a bustling metropolis known for its iconic landmarks, including the Tower Bridge, Buckingham Palace, and the British Museum. England's countryside is picturesque, with rolling hills, charming villages, and historical sites such as Stonehenge. The country has a rich literary heritage, with famous authors like William Shakespeare, Jane Austen, and Charles Dickens hailing from its shores. English pubs, afternoon tea, and traditional events like Wimbledon and the Changing of the Guard add to its unique charm. England's influence on politics, literature, and sport has made it a global powerhouse with a lasting legacy.",
      imageUrl:
        "https://t4.ftcdn.net/jpg/02/84/88/03/360_F_284880344_drcRa7TAow6riwp3pXdlJUlcmI5vvbbP.jpg",
      region: "Europe, England",
    },
    {
      _id: "64cf2d4d5d14628d0ac0a2bf",
      country: "China",
      description:
        "China, the world's most populous country, is located in East Asia. With a history spanning over 5,000 years, it is one of the oldest continuous civilizations. China is known for its diverse landscapes, from the majestic Great Wall winding through mountains to the breathtaking karst scenery in Guilin. Its bustling cities, like Beijing and Shanghai, showcase a unique blend of ancient traditions and modern innovations. Chinese culture is rich in art, music, and philosophy, with iconic elements such as calligraphy, tea ceremonies, and traditional Chinese medicine. The country's cuisine, including dim sum, Peking duck, and Sichuan hotpot, is celebrated globally. China's contributions to science, technology, and literature have had a profound impact on the world, making it a global powerhouse in various fields.",
      imageUrl:
        "https://t4.ftcdn.net/jpg/01/88/97/67/360_F_188976775_naafg0BY2uOus4snBVbqiHVs7nuRQ1P3.jpg",
      region: "East Asia, China",
    },
]
  return (
    <View>
      <HeightSpacer height={20}/>
      <VirtualizedList
      data={countries} 
      horizontal
      keyExtractor={(item) => item._id}
      showsHorizontalScrollIndicator= {false}
      getItemCount={(data)=> data.length}
      getItem={(data,index)=>data[index]}
      renderItem={({item,index}) => (
        <View style = {{marginRight : SIZES.medium}}>
            <Country item ={item}/>
        </View>
      )

      }

      />
    </View>
  )
}

export default Places

const styles = StyleSheet.create({})