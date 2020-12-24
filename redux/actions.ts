export interface changeAddress {
    type: "CHANGE_ADDRESS",
    address: string
}

export interface requestBalance {
    type: "REQUEST_BALANCE"
}

export interface setBalance {
    type: "SET_BALANCE",
    payload: number
}

export function changeAddressAction(address: string) {
    return {type:"CHANGE_ADDRESS",address}
}

export type ActionTypes = changeAddress | requestBalance | setBalance