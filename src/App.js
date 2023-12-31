import './App.scss';
import Button from './Components/Buttons.js';
import Card from './Components/Card.js';
import Container from './Components/layout/Container.js';

function App() {
  return (
    <div id="app">
      <Container>
        <Card
          title="title"
          text="blablabla"
          image="https://the-artifice.com/wp-content/uploads/2023/03/signalis-scene.jpg"
          actions={
            <>
              <Button variant="success" text="Primary" />
              <Button variant="danger" text="Danger" />
            </>
          }
        />
      </Container>
    </div>
  );
}

export default App;
