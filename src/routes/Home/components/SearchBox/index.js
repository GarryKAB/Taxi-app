import React, { Component } from "react";
import { Text } from "react-native";
import { View, InputGroup, Input } from "native-base";

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './SearchBoxStyles.js';

export const SearchBox = ({getInputData, toggleSearchResultModal, getAddressPredictions}) => {

    function handleInput(key, val) {
        getInputData({
            key,
            value: val
        });
    }

    return (
        <View style={styles.searchBox}>
            <View style={styles.inputWrapper}>
                {/* <Text style={styles.label}>PICK UP LOCATION</Text> */}
                <InputGroup>
                    <Icon name="search" size={20} color="#FF5E3A"/>
                    <Input onFocus={() => toggleSearchResultModal("pickUp")} style={styles.inputSearch} placeholder="enter drop-off location" onChangeText={handleInput.bind(this, "pickUp")}/>
                </InputGroup>
            </View>

            {/* <View style={styles.secondInputWrapper}>
                <InputGroup>
                    <Icon name="search" size={20} color="#FF5E3A"/>
                    <Input onFocus={() => toggleSearchResultModal("dropOff")} style={styles.inputSearch} placeholder="drop off location"  onChangeText={handleInput.bind(this, "dropOff")}/>
                </InputGroup>
            </View> */}
        </View>
    );
}

export default SearchBox;
