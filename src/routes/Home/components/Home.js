import React, { Component } from "react";
import { View, Text } from "react-native";

import {Container} from 'native-base';
import MapContainer from './MapContainer';

class Home extends Component {

    componentDidMount(){
        this.props.getCurrentLocation();
    }

    render(){
        const region = {
            latitude: -26.149444,
            longitude: 28.101944,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        }
        return (
            // <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            //     <Text>Hello {this.props.name}</Text>
            // </View>
            <Container>
                <MapContainer region={region}/>
            </Container>
        );
    }
}

export default Home;
