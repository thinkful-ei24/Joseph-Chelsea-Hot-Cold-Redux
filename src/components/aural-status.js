import React from 'react';
import store from '../store';
import { connect } from 'react-redux';

export function AuralStatus() {
  return (
    <p
      id="status-readout"
      className="visuallyhidden"
      aria-live="assertive"
      aria-atomic="true"
    >
      {store.getState().auralStatus}
    </p>
  );
}

const mapStateToProps = state => ({
  auralStatus: state.auralStatus
});

export default connect(mapStateToProps)(AuralStatus);
