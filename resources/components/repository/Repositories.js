import { useState } from 'react';
import { Button } from 'react-bootstrap';
import RepositoryCard from './RepositoryCard';

const Repositories = ({ repository }) => {
  const [count, setCount] = useState(5);

  const loadMore = () => {
    setCount(count + 5);
  }

  return (
    <>
      {repository.slice(0, count).map(repo => <RepositoryCard repository={repo} key={repo.id}></RepositoryCard>)}

      {count < repository.length && <Button onClick={loadMore} variant="outline-primary">Load More</Button>}

    </>
  );
};

export default Repositories;