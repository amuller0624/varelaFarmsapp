import React,{ Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { MENU } from '../shared/menuinfo'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { 
           menu: MENU 
        };
    }

    static navigationOptions = {
        headerTitleStyle: {
            textAlign: 'center',
            flex: 1
        },
        title: 'Varela Farms'
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                
                    <ListItem 
                        title={item.name}
                    // subtitle={item.description}
                        onPress={() => navigate('MenuInfo', { menuId: item.id})}
                        leftAvatar={{ source: require('./img/apples.jpg')}}
                    />
                
        );
    };

    return (
        <FlatList
            data={this.state.menu}
            renderItem={renderDirectoryItem}
            keyExtractor={item => item.id.toString()}
        />
    );
    }
}

export default Home;

