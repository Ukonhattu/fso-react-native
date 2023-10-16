import React from 'react';
import { render } from '@testing-library/react-native';
import RepositoryItem from '../components/RepositoryItem';

const formatNumber = (number) => {
  if (number >= 1000) {
    return `${(number / 1000).toFixed(1)}K`;
  }
  return number.toString();
};

describe('RepositoryItem', () => {
  const repository = {
    id: 'jaredpalmer.formik',
    fullName: 'jaredpalmer/formik',
    description: 'Build forms in React, without the tears',
    language: 'TypeScript',
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
  };

  it('renders repository information correctly', () => {
    const { getByTestId } = render(<RepositoryItem item={repository} index={0} />);
    expect(getByTestId('repositoryItemContainer')).toBeDefined();
    expect(getByTestId('repositoryItemImageContainer')).toBeDefined();
    expect(getByTestId('repositoryItemImage')).toBeDefined();
    expect(getByTestId('repositoryItemTextContainer')).toBeDefined();
    expect(getByTestId('repositoryItemNameContainer')).toBeDefined();
    expect(getByTestId('repositoryItemFullName')).toHaveTextContent(repository.fullName);
    expect(getByTestId('repositoryItemDescriptionContainer')).toBeDefined();
    expect(getByTestId('repositoryItemDescription')).toHaveTextContent(repository.description);
    expect(getByTestId('repositoryItemLanguageContainer')).toBeDefined();
    expect(getByTestId('repositoryItemLanguage')).toHaveTextContent(repository.language);
    expect(getByTestId('repositoryItemStatsContainer')).toBeDefined();
    expect(getByTestId('repositoryItemStars')).toHaveTextContent(formatNumber(repository.stargazersCount));
    expect(getByTestId('repositoryItemForks')).toHaveTextContent(formatNumber(repository.forksCount));
    expect(getByTestId('repositoryItemReviews')).toHaveTextContent(formatNumber(repository.reviewCount));
    expect(getByTestId('repositoryItemRating')).toHaveTextContent(formatNumber(repository.ratingAverage));
  });
});