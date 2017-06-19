import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const Main = () => (
    <MuiThemeProvider>
        <FloatingActionButton className="default" mini={true}>
            <ContentAdd />
        </FloatingActionButton>
    </MuiThemeProvider>
);

export default Main;