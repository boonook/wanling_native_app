import * as React from 'react';
import Routers from '@/Routers';
import { Provider } from 'mobx-react'
import appState from '@/store/index';
function App() {
    return (
        <Provider {...appState}>
            <Routers/>
        </Provider>
    );
}

export default App;
