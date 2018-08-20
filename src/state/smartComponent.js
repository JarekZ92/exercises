const INPUT = 'smartComponent/INPUT'
const DISPLAY_TEXT = 'smartComponent/DISPLAY_TEXT'


export const inputAction = value => ({
    type: INPUT,
    value
})

export const displayText = () => ({ type: DISPLAY_TEXT })

const initialState = {
    inputText: '',
    displayedText: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case INPUT:
            return {
                ...state,
                inputText: action.value
            }
        case DISPLAY_TEXT:
            return {
                ...state,
                displayedText: state.inputText
            }
        default:
            return state
    }
}