import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {StakNavigator} from './src/navigator/StackNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <StakNavigator />
    </NavigationContainer>
  );
};

export default App;
