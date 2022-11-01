import { Radio, Typography, Button, Avatar } from 'alice-component-library';
import 'alice-component-library/dist/index.css';
import React from 'react';

const App = () => {
  return (
    <div style={{ padding: 20 }}>
      {/* <div style={{ marginBottom: 20 }}>
        <Button onClick={() => {}}>Alice Component Library</Button>
      </div>
      <div>
        <Button variant='primaryGhost' onClick={() => {}}>
          Tailwind Setup Starter
        </Button>
      </div> */}
      <Typography color="primary" variant="h1">
        test
      </Typography>
      <Typography color="secondary" variant="h2">
        test
      </Typography>
      <Typography color="success" variant="h3">
        test
      </Typography>
      <Typography color="warning" variant="h4">
        test
      </Typography>
      <Typography color="danger" variant="h5">
        test
      </Typography>
      <Button
        onClick={() => {
          console.info('type 1 pressed');
        }}
        variant="contained">
        test the button
      </Button>
      <Button
        onClick={() => {
          console.info('type 2 pressed');
        }}
        variant="outlined"
        color="success">
        test the button
      </Button>
      <Button
        onClick={() => console.log('pressed')}
        variant="outlined"
        size="medium"
        color="onSurface">
        test the button
      </Button>
      <Avatar alt={''} src={'https://avatars.githubusercontent.com/u/75943412?v=4'} />
      <div className="radios">
        <Radio id="name" name="my-radios" title='Name' onChange={() => {}} />
        <Radio id="last-name" name="my-radios" title='Last Name' onChange={() => {}} />
      </div>
    </div>
  );
};

export default App;
