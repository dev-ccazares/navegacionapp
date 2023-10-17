import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';

export const Pagina2Screen = () => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: 'Hola mundo',
      headerBackTitle: 'Atras',
    });
  }, [navigator]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina2Screen</Text>
      <Button
        title="Ir a pagina 2"
        onPress={() => navigator.navigate('Pagina3Screen')}
      />
    </View>
  );
};
