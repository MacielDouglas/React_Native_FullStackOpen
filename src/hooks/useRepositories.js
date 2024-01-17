// import { useState, useEffect } from 'react';
import { GET_REPOSITORIES } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const useRepositories = () => {
  // const [repositories, setRepositories] = useState();
  // const [loading, setLoading] = useState(false);
  const { loading, data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  // const fetchRepositories = async () => {
  //   setLoading(true);
  if (loading) return <div>Loading ...</div>;

  //   const response = await fetch('http://192.168.100.14:5000/api/repositories');
  //   const json = await response.json();

  //   setLoading(false);
  //   setRepositories(json);
  // };

  // useEffect(() => {
  //   fetchRepositories();
  // }, []);

  // return { repositories, loading, refetch: fetchRepositories };
  return { repositories: data?.repositories };
};

export default useRepositories;
