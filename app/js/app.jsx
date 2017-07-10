import { createStore } from 'redux';


function playlist(state = [], action) {
    if (action.type === "ADD_TRACK") {
        return [
            ...state,
            action.playload
        ];
    }
    return state;
}


const store = createStore(playlist);
const addTrack = document.querySelector('.addTrack');
const addTrackInput = document.querySelector('.trackInput');
const list = document.querySelectorAll('.list')[0];

store.subscribe(() => {
    list.innerHTML = '';
    addTrackInput.value = '';
    store.getState().forEach((element) => {
        const li = document.createElement('li');
        li.textContent = element;
        list.appendChild(li);

    });
});

addTrack.addEventListener('click', () => {
    const trackName = addTrackInput.value;
    store.dispatch({ type: 'ADD_TRACK', playload: trackName });
})

