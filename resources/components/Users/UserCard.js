import { Card, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const UserCard = ({ user: { avatar_url, login } }) => {
  let history = useHistory();

  const getUserDetails = (login) => {
    history.push(`/users/${login}`);
  }

  return (
    <Col>
      <Card className="m-3 text-center shadow">
        <Card.Img variant="top" src={avatar_url} className="avatar" />
        <Card.Body>
          <Card.Title>{login}</Card.Title>
          <Button className="btn btn-primary mt-3" onClick={() => getUserDetails(login)}>Go To Profile</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default UserCard;