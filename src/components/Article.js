import React from 'react';
import { get } from 'lodash';
import ButtonDetails from '../containers/ButtonDetails'

const Article = ({ article, currency }) => (
  <article>
    <div className="article-wrapper">
      <p className="text-center">{article.rank}</p>
      <p className="text-center">{article.symbol}</p>
      <p className="text-center">{get(article, `quotes.${currency}.price`)}</p>
      <p className="text-center">{get(article, `quotes.${currency}.percent_change_24h`)}</p>  
      <ButtonDetails id={article.id} title="More"/>
    </div>
  </article>
);

export default Article ;


