import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';

class ContactUs extends Component {

    static navigationOptions = {
        headerTitleStyle: {
            textAlign: 'center',
            flex: 1
        },
        title: 'Contact Us'
    }

    render() {
        return(
            <ScrollView>
                <Card 
                    title="Contact Information"
                    wrapperStyle={{margin: 20}}>
                    <Text>72486 Live Oak Loop</Text>
                    <Text>Abita Springs, LA 70420</Text>
                    <Text style={{marginBottom: 10}}>U.S.A.</Text>
                    <Text>Phone: 1-337-319-3842</Text>
                    <Text>Email: hol81070@yahoo.com</Text>
                </Card>
            </ScrollView>
        );
    }
}

export default ContactUs;