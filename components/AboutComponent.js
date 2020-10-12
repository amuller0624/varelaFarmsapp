import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';

function MissionStatement() {
    return(
        <Card 
        title="Mission Varela Farms">
        <Text>
        We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. 
        We increase access to adventure for the public while promoting safe and respectful use of resources. 
        The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. 
        We also present a platform for campers to share reviews on campsites they have visited with each other.
        </Text>
    </Card>
    );  
}


class About extends Component {

    static navigationOptions = {
        headerTitleStyle: {
            textAlign: 'center',
            flex: 1
        },
        title: 'About Varela Farms'
    }

    render() {
        return(
            <ScrollView>
                <MissionStatement />
            </ScrollView>
        );
    }
    
}

export default About;