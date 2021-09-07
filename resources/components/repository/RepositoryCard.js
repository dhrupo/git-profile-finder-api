import { Card } from 'react-bootstrap';
import { FaLaptopCode } from 'react-icons/fa';
import { BiGitRepoForked } from 'react-icons/bi';
import { FiEye } from 'react-icons/fi';

const RepositoryCard = ({ repository }) => {
  const { name, html_url, language, stargazers_count, watchers_count } = repository;

  return (
    <Card className="mb-3 repository_card">
      <Card.Body>
        <a className="h5" href={html_url}>{name}</a>
        <div className="d-flex">
          <Card.Text className="m-2"><FaLaptopCode></FaLaptopCode> <span>{language}</span></Card.Text>
          <Card.Text className="m-2"><FiEye></FiEye> <span>{watchers_count}</span></Card.Text>
          <Card.Text className="m-2"><BiGitRepoForked></BiGitRepoForked> <span>{stargazers_count}</span></Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default RepositoryCard;