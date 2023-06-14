import React from "react";
import Articles from "../components/articles";


const HomePageInfo = ({ homePageInfo }) => {
  
  return (
    <div className="uk-container">
      <div className="uk-child-width-1-2 uk-child-height-1-2 uk-grid">
        <div>
          <div className="uk-text-large uk-text-bolder uk-text-nowrap uk-margin-top">
            <h1>
              <span style={{color: '#A42A04'}}>BF </span>
              <span style={{color: 'white'}}>CORNELLÀ </span>
            </h1>
          </div>
          <div className="uk-text-lead uk-text-italic uk-text-nowrap">{homePageInfo.attributes.description}</div>
        </div>
            <div className="uk-card uk-card-default uk-card-body uk-margin-top uk-visible@s" style={{opacity: '0.90'}}>
              <h3 className="uk-card-title">Títol notícia destacada</h3>
              <div className="uk-panel uk-height-small">
                Informació de notícia destacada
              </div>
            </div>
      </div>
      <div id="article" className="uk-hidden@s">
        <div className="uk-padding-large" />
        <div className="uk-card uk-card-default uk-card-body uk-margin-top" style={{opacity: '0.90'}}>
          <h3 className="uk-card-title">Títol notícia destacada</h3>
          <div class="uk-panel uk-height-small">
            Informació de notícia destacada
          </div>
        </div>
      </div>
      <div className="uk-padding-large" />
      <div className="uk-container">    
        <Articles articles={homePageInfo.attributes.articles.data}></Articles>
      </div>
    </div>
  );
};



export default HomePageInfo;
