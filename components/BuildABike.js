import React, { useState, useEffect } from "react";
import { View, Text, Button, Alert, Image } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useWindowDimensions } from "react-native";

const BikeOrderForm = () => {
  const [colors, setColors] = useState([]);
  const [componentTypes, setComponentTypes] = useState([]);
  const [cycleTypes, setCycleTypes] = useState([]);
  const [propulsionTypes, setPropulsionTypes] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedComponentType, setSelectedComponentType] = useState(null);
  const [selectedCycleType, setSelectedCycleType] = useState(null);
  const [selectedPropulsionType, setSelectedPropulsionType] = useState(null);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const colorsResponse = await fetch(
        "https://bikeindex.org/api/v3/selections/colors"
      );
      const colorsData = await colorsResponse.json();
      setColors(colorsData.colors);

      const componentTypesResponse = await fetch(
        "https://bikeindex.org/api/v3/selections/component_types"
      );
      const componentTypesData = await componentTypesResponse.json();
      setComponentTypes(componentTypesData.component_types);

      const cycleTypesResponse = await fetch(
        "https://bikeindex.org/api/v3/selections/cycle_types"
      );
      const cycleTypesData = await cycleTypesResponse.json();
      setCycleTypes(cycleTypesData.cycle_types);

      const propulsionTypesResponse = await fetch(
        "https://bikeindex.org/api/v3/selections/propulsion_types"
      );
      const propulsionTypesData = await propulsionTypesResponse.json();
      setPropulsionTypes(propulsionTypesData.propulsion_types);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = () => {
    const message = `You've selected:\nColor: ${selectedColor}\nComponent Type: ${selectedComponentType}\nCycle Type: ${selectedCycleType}\nPropulsion Type: ${selectedPropulsionType}\n\nHere's your bike - expect delivery between 7 - 14 working days.`;

    Alert.alert("Bike Order Confirmation", message);
    console.log("Form submitted");
  };

  return (
    <View>
      <Text>Select Color:</Text>
      <Picker
        selectedValue={selectedColor}
        onValueChange={(itemValue, itemIndex) => setSelectedColor(itemValue)}
      >
        {colors.map((color) => (
          <Picker.Item key={color.id} label={color.name} value={color.slug} />
        ))}
      </Picker>

      <Text>Select Component Type:</Text>
      <Picker
        selectedValue={selectedComponentType}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedComponentType(itemValue)
        }
      >
        {componentTypes.map((componentType) => (
          <Picker.Item
            key={componentType.id}
            label={componentType.name}
            value={componentType.slug}
          />
        ))}
      </Picker>

      <Text>Select Cycle Type:</Text>
      <Picker
        selectedValue={selectedCycleType}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedCycleType(itemValue)
        }
      >
        {cycleTypes.map((cycleType) => (
          <Picker.Item
            key={cycleType.id}
            label={cycleType.name}
            value={cycleType.slug}
          />
        ))}
      </Picker>

      <Text>Select Propulsion Type:</Text>
      <Picker
        selectedValue={selectedPropulsionType}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedPropulsionType(itemValue)
        }
      >
        {propulsionTypes.map((propulsionType) => (
          <Picker.Item
            key={propulsionType.id}
            label={propulsionType.name}
            value={propulsionType.slug}
          />
        ))}
      </Picker>

      <Button title="Submit" onPress={handleSubmit} color="#33b249" />
      <View>
        <Image
          source={{
            uri: "https://www.yellowjersey.co.uk/wp-content/uploads/2020/01/C20_SuperSixEVO-Neo_Beauty_3282-e1578502655627.jpg",
          }}
          style={{ width: "100%", height: "65.7%" }}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default BikeOrderForm;
