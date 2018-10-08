import React from 'react';
import { addGuess } from '../actions';
import './guess-form.css';
import { connect } from 'react-redux';

class GuessForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    this.props.dispatch(addGuess(Number(event.target.userGuess.value)));
    // if (this.props.onMakeGuess) {
    //   const value = this.input.value;
    //   this.props.onMakeGuess(value);
    // }
    // this.input.value = '';
    // this.input.focus();
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input
          type="number"
          name="userGuess"
          id="userGuess"
          className="text"
          min="1"
          max="100"
          autoComplete="off"
          aria-labelledby="feedback"
          required
        />

        <button type="submit" name="submit" id="guessButton" className="button">
          Guess
        </button>
      </form>
    );
  }
}

export const mapStateToProps = state => ({ guesses: state.guesses });

export default connect(mapStateToProps)(GuessForm);
