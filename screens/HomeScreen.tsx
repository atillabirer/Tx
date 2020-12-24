import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TextInput } from "react-native-gesture-handler";
import { State } from "../redux/store";
import { View, Button, YellowBox } from "react-native";
import { changeAddressAction } from "../redux/actions";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../App";
import { getBalanceThunk } from "../redux/thunks";
import Web3 from "web3";

type HomeScreenProps = StackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: HomeScreenProps) {
  //get address here, insert it into the redux store
  const [addressInput, setaddressInput] = useState("")

  const test = useSelector((state: State) => state.address)

  const dispatch = useDispatch()

  function dispatchAndGo() {
    //validate address
    if (Web3.utils.isAddress(addressInput)) {
      dispatch(changeAddressAction(addressInput))
      dispatch(getBalanceThunk(addressInput))
      navigation.navigate("AddressOverview")
    } else {
      YellowBox.ignoreWarnings(["Invalid address."])
    }
  }

  return (
    <View>

      <TextInput value={addressInput} onChangeText={setaddressInput} />
      <Button title="next" onPress={dispatchAndGo} />
    </View>
  );
}

