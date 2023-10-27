import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import FormAddTask from './components/form_add_task';
import ListTask from './components/list_task';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <div className="wrapper">
                    <h1 className="text-center">TODO LIST APP</h1>
                    <FormAddTask />
                    <ListTask />
                </div>
            </div>
        </Provider>
    );
}

export default App;
