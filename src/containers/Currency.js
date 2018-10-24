import React from 'react'
import { connect } from 'react-redux'
import { fetchCurrencyAndPosts } from '../actions'

let Currency = ({ CurrencyName, CurrencyString, getCurrency, active, id }) => (
    <div  className="col-sm-3">
        <div className="currency-button" onClick={() => getCurrency(CurrencyString, id)}
            style={{ backgroundColor: active === CurrencyString ? '#ffa500' : 'inherit' }}>
            <p>{CurrencyName}</p>
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    active: state.currency,
    id: state.id
})

const mapDispatchToProps = {
    getCurrency: fetchCurrencyAndPosts
}

Currency = connect(
    mapStateToProps,
    mapDispatchToProps
)(Currency)

export default Currency;
