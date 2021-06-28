import { Provider } from "react-redux";
import store from "./store/index";
import TaskContainer from './components/Task/TaskContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <TaskContainer />
    </div>
    </Provider>
  );
}

export default App;
