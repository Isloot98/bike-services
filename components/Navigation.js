import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import BookAService from "./BookAService";
import BikeOrderForm from "./BuildABike";

const Tab = createBottomTabNavigator();

const Navigation = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Book A Service" component={BookAService} />
    <Tab.Screen name="Build A Bike" component={BikeOrderForm} />
  </Tab.Navigator>
);

export default Navigation;
