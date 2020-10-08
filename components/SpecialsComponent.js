import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Specials extends Component {

    static navigationOptions = {
        headerTitleStyle: {
            textAlign: 'center',
            flex: 1
        },
        title: 'Specials at Varela Farms'
    }

    render() {
        return (
            <View>
                <Text>Coming Soon</Text>
            </View>
        );
    }
}

export default Specials;