import React, { Component } from "react";
import { View, Text } from "react-native";

import {Container} from 'native-base';
import MapContainer from './MapContainer';
// import console = require("console");

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
            <Container>
                {   this.props.region.latitude &&
                    <MapContainer
                        region={this.props.region}
                        getInputData={this.props.getInputData}
                        toggleSearchResultModal={this.props.toggleSearchResultModal}
                        getAddressPredictions={this.props.getAddressPredictions}
                        resultTypes={this.props.resultTypes}
                        predictions={this.props.predictions}    
                    />
                }
            </Container>
        );
    }
}

export default Home;
