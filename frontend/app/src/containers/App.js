import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import CreateHotelForm from './structure/CreateHotelForm';

const Main = () => (
    <MuiThemeProvider>
        <CreateHotelForm />
    </MuiThemeProvider>
);

export default Main;