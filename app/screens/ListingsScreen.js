import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";

const listings = [
  {
    id: 1,
    description:"· 16MP X-Trans CMOS II sensor · EXR Processor II · Weather-resistant body · ISO 200-6400, plus 100 - 51200 expanded (JPEG only)",
    title: "Fujifilm X-T1",
    price: 220,
    image: require("../assets/fuji.jpg")
  },
  {
    id: 2,
    description:"camera for sell",
    title: "Canon Rebel T3i",
    price: 150,
    image: require("../assets/canon.jpg"),
  },
  {
    id: 3,
    description:"camera for sell",
    title: "Fujifilm XT1",
    price: 220,
    image: require("../assets/fuji.jpg"),
  },
  {
    id: 4,
    title: "Canon Rebel T3i",
    price: 150,
    image: require("../assets/canon.jpg"),
  }
];

function ListingsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"£" + item.price}
            image={item.image}
            description={item.description}
            onPress={() => navigation.navigate("ListingDetails", item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
