import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import NavSearchBar from './components/navSearchBar';
import InfoPanel from './components/infoPanel';
import NavFooter from './components/navFooter';



const useStyles = makeStyles((theme) => ({
  root: {
    margin: 10
  },
  paper: {
    height: 'auto',
    width: 350,
    margin: '0 auto',
    marginTop: 25,
    textAlign: 'center',
    padding: 15
  },
  input: {
    width: '90%',
  }
}));

function App() {
  const screenConfig = useState(0);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavSearchBar />
      <InfoPanel currentScreen={screenConfig[0]} />
      <NavFooter screenConfig={screenConfig} />
    </div>
  );
}

export default App;
