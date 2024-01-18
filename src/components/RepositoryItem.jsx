import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginBottom: 5,
  },
  containerDescription: {
    flexDirection: 'row',
    flexGrow: 1,
    gap: 20,
    padding: 10,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  description: {
    fontSize: theme.fontSizes.body,
    padding: 5,
    marginRight: 5,
  },
  language: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    padding: 5,
    marginTop: 5,
    alignSelf: 'flex-start',
    borderRadius: 5,
  },
  containerCounts: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-around',
    padding: 5,
  },
  alignCounts: {
    alignItems: 'center',
  },
  fontBold: {
    fontWeight: theme.fontWeights.bold,
  },
});

const RepositoryItem = ({ item }) => {
  const valorArredondado = Math.round();
  return (
    <View style={styles.container} testID="repositoryItem">
      <View style={styles.containerDescription}>
        <Image style={styles.img} source={{ uri: `${item.ownerAvatarUrl}` }} />
        <View>
          <Text style={styles.fontBold}>{item.fullName}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.language}>{item.language}</Text>
        </View>
      </View>

      <View style={styles.containerCounts}>
        <View style={styles.alignCounts}>
          <Text style={styles.fontBold}>
            {Math.round((Number(item.stargazersCount) / 1000) * 10) / 10}K
          </Text>
          <Text>Star</Text>
        </View>

        <View style={styles.alignCounts}>
          <Text style={styles.fontBold}>
            {Math.round((Number(item.forksCount) / 1000) * 10) / 10}K
          </Text>
          <Text>Forks</Text>
        </View>

        <View style={styles.alignCounts}>
          <Text style={styles.fontBold}>{item.reviewCount}</Text>
          <Text>Reviews</Text>
        </View>

        <View style={styles.alignCounts}>
          <Text style={styles.fontBold}>{item.ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
