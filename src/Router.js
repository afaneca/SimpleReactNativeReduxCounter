import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Counter from './screens/Counter';


const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root">
                <Scene key="counter" component={Counter} title="Redux Counter" initial />
                
            </Stack>

        </Router>
    );
};

export default RouterComponent;