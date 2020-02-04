import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoggedOut from '../screens/LoggedOut';
import logIn from '../screens/LogIn';
import ForgotPassword from '../screens/ForgotPassword';
import TurnOnNotifications from '../screens/TurnOnNotifications';
import LoggedInTabNavigation from './LoggedInTabNavigator';

const LoggedOutStack = createStackNavigator({
    LoggedOut: { screen: LoggedOut },
    LogIn: { screen: LogIn },
    ForgotPassword: { screen: ForgotPassword }
});

export default createAppContainer(createSwitchNavigator({
    LoggedOut: LoggedOutStack,
    LoggedIn: {
        screen: LoggedInTabNavigation,
        navigationOptions: {
            header: null,
            gesturesEnables: false
        }
    },
    TurnOnNotifications: { screen: TurnOnNotifications }
},
    {
        initialRouteName: "LoggedOut"
    }
)
);
