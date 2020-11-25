import {
  Fragment
} from "react";
import Card from "components/Card";

function AchievementsPage() {
  return (
    <Fragment>
      <div className="row">
        <div className="col">
          <h1>Leistungen</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Fragment>
  );
}

export default AchievementsPage;
