import React, { useEffect, useState } from "react";
import { Image, Button, View, StyleSheet, Text, Alert } from "react-native";
import { Calendar, CalendarList } from "react-native-calendars";
import { useWindowDimensions } from "react-native";

const BookAService = () => {
  const [selected, setSelected] = useState("");
  const { height, width } = useWindowDimensions();
  const bookService = () => {
    if (!selected) {
      Alert.alert("Please select a day to book the service.");
      return;
    }

    Alert.alert(
      "Book Service",
      `Do you want to book a service for ${selected}?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            const bookingDetails = {
              status: "booked",
              day: selected,
            };

            console.log("Booking details:", bookingDetails);
            Alert.alert(
              `Service ${bookingDetails.status} 
              Date: ${bookingDetails.day}`
            );
          },
        },
      ]
    );
  };

  return (
    <View>
      <Calendar
        onDayPress={(day) => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: "orange",
          },
        }}
      />
      <Button title="Book Service" onPress={bookService} />
      <View>
        <Image
          source={{
            uri: "https://hammer-sport.co.uk/wp-content/uploads/2023/01/Cristal-green-scaled-1.jpg",
          }}
          style={{ width: "100%", height: "58%" }}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default BookAService;
