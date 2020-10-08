import React, { Component } from 'react';
import Home from './HomeComponent';
import Specials from './SpecialsComponent'
import { View, Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import MenuInfo from './MenuInfoComponent';
import { MENU } from '../shared/menuinfo';
import About from './AboutComponent';
import ContactUs from './ContactUsComponent';

//const DirectoryNavigator = createStackNavigator (
    //{
       // Produce: { screen: Produce },
        //MenuInfo: { screen: MenuInfo }
   //},
    //{
        //initialRouteName: 'Produce',
        //navigationOptions: {
            //headerStyle: {
               // backgroundColor: '#07AD62'
            //},
           // headerTintColor: '#fff',
            //headerTitleStyle: {
                //color: '#FDDD5C',
               // fontWeight: 'bold',
            //}
       // }
   // }
//);

const SpecialsNavigator = createStackNavigator(
    {
        Specials: { screen: Specials }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#07AD62'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#FDDD5C',
                fontWeight: 'bold',
            }
        }
    }
);

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home },
        MenuInfo: { screen: MenuInfo }
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#07AD62'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#FDDD5C',
                fontWeight: 'bold',
            }
        }
    }
);

const ContactUsNavigator = createStackNavigator(
    {
        Contact: { screen: ContactUs }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#07AD62'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#FDDD5C',
                fontWeight: 'bold',
            }
        }
    }
);

const AboutNavigator = createStackNavigator(
    {
        About: { screen: About }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#07AD62'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#FDDD5C',
                fontWeight: 'bold',
            }
        }
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Specials: { screen: SpecialsNavigator },
        Contact: { screen: ContactUsNavigator },
        About: { screen: AboutNavigator }
    },
    {
        drawerBackgroundColor: '#CEC8FF'
    }
);

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          menu : MENU,
          selectedItem: null
        };
    }

    onItemSelect(itemId) {
        this.setState({selectedItem: itemId});
    }

    render() {
        return(
            <View style={{
                flex: 1,
                paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
                }}>
                <MainNavigator />
            </View>
        );
    }
}

export default Main;