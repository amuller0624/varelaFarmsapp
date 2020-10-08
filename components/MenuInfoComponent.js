import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { MENU } from '../shared/menuinfo';

function RenderMenu({menu}) {
    if (menu) {
        return (
            <Card
                featuredTitle={menu.name}
                image={require('./img/bananas.jpg')}>
                <Text style={{margin: 10}}>
                    {menu.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class MenuInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: MENU
        };
    }

    static navigationOptions = {
        title: 'Menu Information'
    }
    
    render() {
        const menuId = this.props.navigation.getParam('menuId');
        const menu = this.state.menu.filter(menu => menu.id === menuId)[0];
        return <RenderMenu menu={menu} />
    } 
}

export default MenuInfo;