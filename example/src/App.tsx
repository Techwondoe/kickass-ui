import {
  Radio,
  Typography,
  Button,
  Avatar,
  Toggles,
  Accordion,
  ListWithRadioOnRight,
  extendTheme,
  base,
  ThemeProvider,
} from 'react-tailwind-components';
import 'react-tailwind-components/dist/index.css';
import React from 'react';

const customTheme = extendTheme(base, {
  primary: 'pink',
  secondary: 'green',
  contrast: {
    ...base.contrast,
    primary: 'red',
  },
});

const App = () => {
  return (
    <ThemeProvider customTheme={customTheme}>
      <div style={{ padding: 20 }}>
        <Typography color="custom" variant="h1">
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
        <Toggles id={'test'} name={'test toggle'} />
        <Accordion
          accordoinData={[
            {
              title: 'Accordion 1',
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
            },
            {
              title: 'Accordion 2',
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
            },
          ]}
        />
        <ListWithRadioOnRight
          accounts={[
            { id: 'checking', name: 'Checking', description: 'CIBC ••••6610' },
            {
              id: 'savings',
              name: 'Savings',
              description: 'Bank of America ••••0149',
            },
            {
              id: 'mastercard',
              name: 'Mastercard',
              description: 'Capital One ••••7877',
            },
          ]}
          title={'List with radio'}
        />
        <div className="radios">
          <Radio id="name" name="my-radios" title="Name" onChange={() => {}} />
          <Radio id="last-name" name="my-radios" title="Last Name" onChange={() => {}} />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
