import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useState, useEffect } from 'react';
import useRepositories from '../hooks/useRepositories';
import { Picker } from '@react-native-picker/picker';
import { Searchbar } from 'react-native-paper';
import { useDebounce } from 'use-debounce';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

// const repositories = [
//   {
//     id: 'jaredpalmer.formik',
//     fullName: 'jaredpalmer/formik',
//     description: 'Build forms in React, without the tears',
//     language: 'TypeScript',
//     forksCount: 1589,
//     stargazersCount: 21553,
//     ratingAverage: 88,
//     reviewCount: 4,
//     ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
//   },
//   {
//     id: 'rails.rails',
//     fullName: 'rails/rails',
//     description: 'Ruby on Rails',
//     language: 'Ruby',
//     forksCount: 18349,
//     stargazersCount: 45377,
//     ratingAverage: 100,
//     reviewCount: 2,
//     ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
//   },
//   {
//     id: 'django.django',
//     fullName: 'django/django',
//     description: 'The Web framework for perfectionists with deadlines.',
//     language: 'Python',
//     forksCount: 21015,
//     stargazersCount: 48496,
//     ratingAverage: 73,
//     reviewCount: 5,
//     ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
//   },
//   {
//     id: 'reduxjs.redux',
//     fullName: 'reduxjs/redux',
//     description: 'Predictable state container for JavaScript apps',
//     language: 'TypeScript',
//     forksCount: 13902,
//     stargazersCount: 52869,
//     ratingAverage: 0,
//     reviewCount: 0,
//     ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
//   },
// ];

const ItemSeparator = () => <View style={styles.separator} />;
const keyExtractor = (item) => item.id;

export const RepositoryListContainer = ({
  repositories,
  order,
  setOrder,
  onEndReach,
}) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      keyExtractor={keyExtractor}
      renderItem={({ item }) => <RepositoryItem item={item} />}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => (
        <Picker
          style={styles.picker}
          selectedValue={order}
          onValueChange={(itemValue) => setOrder(itemValue)}
        >
          <Picker.Item label="Latest repositories" value="latest" />
          <Picker.Item label="Higest rated repositories" value="highestRated" />
          <Picker.Item label="Lowest rated repositories" value="lowestRated" />
        </Picker>
      )}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

const RepositoryList = () => {
  const [order, setOrder] = useState('latest');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchKeyword] = useDebounce(searchQuery, 1000);

  const onChangeSearch = (query) => setSearchQuery(query);

  let orderBy;
  let orderDirection;
  let first;

  switch (order) {
    case 'latest':
      orderBy = 'CREATED_AT';
      orderDirection = 'DESC';
      first = 4;
      break;

    case 'highestRated':
      orderBy = 'RATING_AVERAGE';
      orderDirection = 'DESC';
      first = 4;
      break;

    case 'lowestRated':
      orderBy = 'RATING_AVERAGE';
      orderDirection = 'ASC';
      first = 4;
      break;
  }

  const { repositories, fetchMore } = useRepositories(
    orderBy,
    orderDirection,
    searchKeyword,
    first,
  );

  console.log(
    'repositoryListFilter',
    orderBy,
    orderDirection,
    order,
    searchKeyword,
    first,
  );

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <RepositoryListContainer
        repositories={repositories}
        order={order}
        setOrder={setOrder}
        onEndReach={onEndReach}
      />
    </>
  );
};

export default RepositoryList;
