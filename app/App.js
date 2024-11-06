import React, { useState } from 'react';
import { FlatList, StyleSheet, RefreshControl, View } from 'react-native';
import LanguageItem from './LanguageItem';

export default function App() {
  const languages = [
    {
      id: '1',
      name: 'GO',
      experience: '3 года',
      logo: 'https://brandlogos.net/wp-content/uploads/2021/12/go_language-brandlogo.net_-768x768.png',
    },
    {
      id: '2',
      name: 'Python',
      experience: '2 года',
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

  const renderItem = ({ item }) => (
    <LanguageItem name={item.name} experience={item.experience} logo={item.logo} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={languages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{height: 20}} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 20
  },
  list: {
    height: "min-content",
    display: "flex",
    flexDirection: "column",
  }
});
