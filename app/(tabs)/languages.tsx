import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, FlatList, RefreshControl, View } from 'react-native';
import LanguageItem from '../LanguageItem';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';

export default function TabTwoScreen() {
  const languages = [
    {
      id: '1',
      name: 'Java Script',
      experience: '3 года',
      logo: 'https://brandlogos.net/wp-content/uploads/2015/07/javascript-logo-vector-download-400x400.jpg',
    },
    {
      id: '2',
      name: 'Python',
      experience: '4 года',
      logo: 'https://brandlogos.net/wp-content/uploads/2020/12/python-logo-768x768.png',
    },
    {
      id: '3',
      name: 'Java',
      experience: '1 год',
      logo: 'https://brandlogos.net/wp-content/uploads/2021/11/java-logo-768x768.png',
    },
  ];

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const renderItem = ({ item }: any) => (
    <LanguageItem name={item.name} experience={item.experience} logo={item.logo} />
  );

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Язки программировани</ThemedText>
      </ThemedView>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.contentContainer}
        data={languages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ width: 20 }} />} // Изменено на width для горизонтального разделителя
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        horizontal // Добавлено для горизонтального списка
      />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 20,
    display: "flex",
    flexDirection: "row",
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  list: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  contentContainer: {
    justifyContent: "center", // Центрирование элементов по горизонтали
  }
});
