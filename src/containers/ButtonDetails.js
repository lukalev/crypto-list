import React from 'react'
import { connect } from 'react-redux'
import { fetchPostAndQuote, toggleArticle } from '../actions'

let ButtonDetails = ({ getPost, showArticle, currency, id, title }) => (
  <button
    onClick={() => { ( id ? getPost(currency, id) : showArticle(false) ) }}
    className="btn btn-primary btn-lg btn-block" >
    {title}
  </button>
);

const mapStateToProps = (state) => ({
  currency: state.currency
})

const mapDispatchToProps = {
  getPost: fetchPostAndQuote,
  showArticle : toggleArticle
}

ButtonDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonDetails)

export default ButtonDetails;
