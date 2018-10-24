import React from 'react'
import { connect } from 'react-redux'
import  Article  from '../components/Article';
import  ArticleDetails  from '../components/ArticleDetails';

let ArticleList = ({ articles, showArticle, article, currency, loading }) => {
    let list = null;
    if (showArticle)
        list = <ArticleDetails article={article} currency={currency} />
    else if (articles) {
        list = articles.map((article) =>
            (
                <div key={article.id} className="col-sm-6">
                    <Article article={article} currency={currency} />
                </div>
            )
        )
    }
    if (loading) {
        list = <div className="loading">
                    <div className="loader"></div>
                  </div>
    }
    return (
        <div className="crypto-list row">
            {list}
        </div>
    )
}

const mapStateToProps = (state) => ({
    articles: state.json,
    article: state.article,
    showArticle: state.showArticle,
    currency: state.currency,
    loading: state.loading
})

ArticleList = connect(
    mapStateToProps,
    null
)(ArticleList)

export default ArticleList;

