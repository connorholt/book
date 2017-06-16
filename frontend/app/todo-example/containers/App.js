import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = ({todos, actions}) => (
    <MuiThemeProvider>
        <div>
            <Header addTodo={actions.addTodo} />
            <MainSection todos={todos} actions={actions} />
        </div>
    </MuiThemeProvider>
);

App.propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)