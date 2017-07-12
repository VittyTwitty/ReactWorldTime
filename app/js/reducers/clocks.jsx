const initialState = [
    'Africa/Casablanca',
    'America/Metlakatla',
    'Europe/Istanbul',
    'Pacific/Galapagos'
];

export default function clocks(state = initialState, action) {
    if (action.type === 'ADD_TIME') {
        return [
            ...state, action.payload
        ];
    }
    return state;
}
