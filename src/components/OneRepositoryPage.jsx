import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ONE_REPOSITORY } from '../graphql/queries';
import RepositoryItem from './RepositoryItem';
import { useParams } from 'react-router-native';
import ReviewList from './ReviewList';

const OneRepositoryPage = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_ONE_REPOSITORY, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const repository = data.repository;
  const reviews = repository.reviews.edges.map(edge => edge.node);

  return (
    <div>
      <RepositoryItem item={repository} isLone/>
      <ReviewList reviews={reviews} />
    </div>
  );
};

export default OneRepositoryPage;
