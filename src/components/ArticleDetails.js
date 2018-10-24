import React from 'react';
import { get } from 'lodash';
import ButtonDetails from '../containers/ButtonDetails'

const ArticleDetails = ({ article, currency }) => (
  <article className="col-sm-12">
    <div className="article-wrapper">
      <p className="text-center">Rank: {article.rank}</p>
      <p className="text-center">Name: {article.name}</p>
      <p className="text-center">Symbol: {article.symbol}</p>
      <p className="text-center">Price: {get(article, `quotes.${currency}.price`)}</p>
      <p className="text-center">24h volume: {get(article, `quotes.${currency}.volume_24h`)}</p>
      <p className="text-center">Market cap: {get(article, `quotes.${currency}.market_cap`)}</p>
      <p className="text-center">Price [BTC]: {get(article, `quotes.BTC.price`)}</p>
      <p className="text-center">1h change: {get(article, `quotes.${currency}.percent_change_1h`)}</p>
      <p className="text-center">24h change: {get(article, `quotes.${currency}.percent_change_24h`)}</p>
      <p className="text-center">7d change: {get(article, `quotes.${currency}.percent_change_7d`)}</p>
    </div>
    <ButtonDetails id={null} title="Close"/>
  </article>
);

export default ArticleDetails;


