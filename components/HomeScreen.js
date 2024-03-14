import React from "react";
import { Image, View, StyleSheet, Text, ScrollView } from "react-native";
import Header from "./Header";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="BikeMaster" />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, styles.text]}>
            Welcome to BikeMaster!
          </Text>
          <Text style={[styles.sectionText, styles.text]}>
            BikeMaster is your ultimate destination for all things biking.
            Whether you need to book a service or order a brand new bike, we've
            got you covered.
          </Text>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: "https://dqh479dn9vg99.cloudfront.net/wp-content/uploads/sites/9/2018/04/03062107/specialized_allez_sprint_review_01.jpg",
              }}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, styles.text]}>Book a Service</Text>
          <Text style={[styles.sectionText, styles.text]}>
            Is your bike in need of some TLC? With our intuitive booking system,
            scheduling a service has never been easier. Simply select your
            preferred date on the calendar, and our expert technicians will take
            care of the rest. We offer a range of services to keep your bike
            running smoothly, from tune-ups to repairs.
          </Text>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: "https://cdn.mos.cms.futurecdn.net/GegSkpojHghrW8rZY4yBw5.jpg",
              }}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, styles.text]}>Order a Bike</Text>
          <Text style={[styles.sectionText, styles.text]}>
            Looking to upgrade your ride? Browse our extensive collection of
            bikes and customize your order to suit your preferences. Choose from
            a variety of colors, component types, cycle types, and propulsion
            types to create the perfect bike for your needs. With fast delivery
            and top-notch customer service, getting your dream bike has never
            been simpler.
          </Text>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: "https://www.cyclesuk.com/content/news/guide-to-road-bike-gears.jpg",
              }}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, styles.text]}>
            Why BikeMaster?
          </Text>
          <Text style={[styles.sectionText, styles.text]}>
            - Convenience: Book services and order bikes from the comfort of
            your home.{"\n"}- Quality: Trust our experienced technicians to
            provide top-quality service and maintenance.{"\n"}- Variety: Explore
            a wide range of bikes and customization options to find the perfect
            fit for you.{"\n"}- Reliability: Count on us for fast delivery and
            excellent customer support every step of the way.{"\n"}
            Join the BikeMaster community today and take your biking experience
            to the next level!
          </Text>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: "https://lifecyclesleeds.co.uk/cdn/shop/products/bh-bikes-rs1-50-aero-road-bike-with-ultegra-di2-12-speed-wireless-914347_2048x.jpg?v=1659455018",
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  sectionText: {
    fontSize: 16,
    textAlign: "center",
  },
  text: {
    color: "#fff",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
  },
});

export default HomeScreen;
