import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';
import ReviewList from './ReviewList';

const OwnReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { loading, data } = useQuery(ME, {
    variables: { includeReviews: true },
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    if (data && data.me) {
      setReviews(data.me.reviews.edges.map((edge) => edge.node));
    }
  }, [data]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>My Reviews</h2>
      {reviews.length === 0 ? (
        <p>You haven&apos;t reviewed any repositories yet.</p>
      ) : (
        <ReviewList reviews={reviews} />
      )}
    </div>
  );
};

export default OwnReviews;
