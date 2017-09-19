import React from 'react';
import SideBar from './sidebar.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const SideBarContainer  = () => {
  return (
    <div>
      <MuiThemeProvider>
        <SideBar />
      </MuiThemeProvider>
    </div>
  );
};

export default SideBarContainer;
