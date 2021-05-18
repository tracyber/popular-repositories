import React from 'react';
import './Repos.scss';

const Repos = ({ language, repoName, description, visitRepo, forks, views }) => {

    return (
        <div className="card">
            <a href={visitRepo} target="_blank" rel="noreferrer" className="visitRepo">
                <h1 className="repoName">{repoName}</h1>
                <p className="description">{description}</p>
                <div className="forks"><span><i className="fa fa-share-alt" aria-hidden="true"></i> {forks}</span></div>
                <div className="forks_views"><span><i className="fa fa-eye" aria-hidden="true"></i> {views}</span></div>
                <button className="language">{language}</button>
            </a>
        </div>

    );
}

export default Repos;