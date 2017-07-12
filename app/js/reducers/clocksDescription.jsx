const initialState = [
    'Africa/Casablanca',
    'America/Metlakatla',
    'Europe/Istanbul',
    'Pacific/Galapagos'
];


export default function clocksDescription(state = initialState, action) {
    if (action.type === 'ADD_TIME_DESCRIPTION') {
        return [
            ...state, action.payload
        ];
    }
    return state;
}
