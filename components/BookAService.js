import React, { useEffect, useState } from "react";
import { Button, View, StyleSheet, Text, Alert } from "react-native";
import { Calendar, CalendarList } from "react-native-calendars";

const BookAService = () => {
  const [selected, setSelected] = useState("");

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
    </View>
  );
};

export default BookAService;
