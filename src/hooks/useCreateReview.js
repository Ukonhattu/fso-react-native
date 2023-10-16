import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = (onCompleted) => {
  const [mutate, result] = useMutation(CREATE_REVIEW, {
    onCompleted,
  });

  const createReview = async ({ repositoryName, ownerName, rating, text }) => {
    const { data } = await mutate({
      variables: {
        review: {
          repositoryName,
          ownerName,
          rating: Number(rating),
          text,
        },
      },
    });

    return data.createReview;
  };

  return [createReview, result];
};

export default useCreateReview;
