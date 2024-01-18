import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateAReview = () => {
  const [mute, result] = useMutation(CREATE_REVIEW);

  const createAReview = async ({ ownerName, repositoryName, rating, text }) => {
    const { data } = await mutate({
      variables: {
        review: { ownerName, repositoryName, rating: Number(rating), text },
      },
    });

    return { data };
  };
  return [createAReview, result];
};

export default useCreateAReview;
