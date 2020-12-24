import { State } from "../redux/store";
import { View,Text } from "react-native";
import { useSelector } from "react-redux";
import React from "react";

const balanceSelector = (state: State) => state.balance

export default function AddressOverviewScreen() {
    const balance = useSelector(balanceSelector)
    return (
        <View>
            <Text>Balance: {balance}</Text>
        </View>
    )
}