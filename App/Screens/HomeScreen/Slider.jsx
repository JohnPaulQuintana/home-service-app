import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import moment from "moment-timezone";
import GlobalApi from "../../Utils/GlobalApi";
import Colors from "../../Utils/Colors/Colors";
import Heading from "../../Components/Heading";

export default function Slider() {
  const [slider, setSlider] = useState([]);
  useEffect(() => {
    getSlider();
  }, []);

  const getSlider = () => {
    GlobalApi.getSlider().then((res) => {
      console.log(res.sliders);
      setSlider(res?.sliders);
    });
  };

  const formatDate = (date) => {
    // console.log(date)
    // Convert to a specific timezone, for example 'America/New_York'
    const formattedDate = moment(date)
      .tz("America/New_York")
      .format("YYYY-MM-DD");

    return formattedDate;
  };
  return (
    <View>
      <Heading text={"Best Offer's For You"} />
      <FlatList
        data={slider}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 20 }}>
            <Image
              source={{ uri: item?.image?.url }}
              style={styles.sliderImage}
            />
            <View style={styles.label}>
              <Text style={{ fontSize: 16, fontFamily: "outfit" }}>
                {item.name}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "outfit",
                  padding: 3,
                  color: Colors.WHITE,
                  backgroundColor: Colors.PRIMARYA,
                  borderRadius: 3,
                  alignSelf: "flex-start",
                }}
              >
                {formatDate(item.createdAt)}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontFamily: "outfit",
    marginBottom: 10,
  },
  sliderImage: {
    width: 270,
    height: 150,
    borderRadius: 20,
    objectFit: "contain",
  },
  label: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    padding: 5,
  },
});
