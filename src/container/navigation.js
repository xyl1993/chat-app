import {
  StackNavigator,
} from 'react-navigation';
import LoginComponent from '../page/login';
export default class App{
    return(){
        const App = StackNavigator({
            Home: {screen: LoginComponent}
        });
    }
}