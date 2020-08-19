import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'shards-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';

import './index.css';

import Chat from 'chat/Chat';

const App = () => (
  <Container>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
      maiores, mollitia exercitationem tempora cupiditate ab dolor, consequatur
      deserunt libero quae placeat. Ex explicabo, quae earum eius ut iste nam
      cupiditate eveniet similique temporibus laborum voluptas accusantium odit
      provident saepe sunt recusandae in amet? Possimus odio, enim dolores
      aspernatur ipsa debitis?
    </p>
    <h1>Chat!</h1>
    <Chat />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iste,
      officiis optio laborum facere deserunt totam omnis vel aliquid quas ipsam
      fuga laboriosam, repellendus obcaecati, consequuntur iusto sed similique
      praesentium dolores! Expedita, sit, officiis at iure in aut necessitatibus
      atque rerum odit repellendus ipsum. Impedit ratione iusto nobis cumque
      quae.
    </p>
  </Container>
);

ReactDOM.render(<App />, document.getElementById('app'));
