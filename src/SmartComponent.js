import React from 'react'

import { connect } from 'react-redux'

const SmartComponent = props => (
    <div>
        <p>
            {props.displayedText}
        </p>
        <input
            type="text"
            placeholder={"Wpisz text!"}
            value={props.inputText}
            onChange={onChangeHandler}
        />
        <button
            onClick={onClickHandler}
        >
            Pokaż tekst!
                        </button>
    </div>
)

const mapStateToProps = state => ({
    displayedText: state.smartComponent.displayedText,
    inputText: state.smartComponent.inputText
})

const mapDispatchToProps = dispatch => ({
    onChangeHandler: () => dispatch(),
    onClickHandler: () => dispatch()
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SmartComponent)