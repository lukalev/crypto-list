import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

let Button = ({ getPosts, currency }) => (
  <button
    onClick={() => { getPosts(currency) }}
    className="btn btn-primary btn-lg btn-block" >
    CRYPTO list
  </button>
);

const mapStateToProps = (state) => ({
  currency: state.currency
})

const mapDispatchToProps = {
  getPosts: fetchPosts
}

Button = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default Button;