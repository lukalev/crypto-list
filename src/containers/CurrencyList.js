import React from 'react'
import { connect } from 'react-redux'
import Currency from './Currency'
import { toggleSettings } from '../actions'

let CurrencyList = ({show, toggle}) => {
  let settings = null; 
  if (show)
    settings = <div className="row">
    <Currency CurrencyName="EUR" CurrencyString="EUR" />
    <Currency CurrencyName="USD" CurrencyString="USD" />
    <Currency CurrencyName="CNY" CurrencyString="CNY" />
    </div>;
  return <div>
    <button
      onClick={() => { toggle() }}
      className="btn btn-primary btn-lg btn-block" >
      FIAT settings
    </button>
    {settings}
  </div>
}

const mapStateToProps = (state) => ({
  show: state.showSettings
})

const mapDispatchToProps = {
  toggle: toggleSettings
}

CurrencyList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyList)

export default CurrencyList;

