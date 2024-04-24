import React from 'react'
import CardSmall from './Card-small'
import '../styles/overview.css'

const cardSmallList = [
    {
        icon: 'https://agusdelva.github.io/social-media-dashboard/images/facebook.png',
        pageViews: '87',
        growth: 3,
        key: 1
    },
    {
        icon: 'https://agusdelva.github.io/social-media-dashboard/images/twitter.png',
        pageViews: '52',
        growth:  2257,
        key: 2
    },
    {
        icon: 'https://agusdelva.github.io/social-media-dashboard/images/instagram24.png',
        pageViews: '5462',
        growth: 1375,
        key: 3
    },
    {
        icon: 'https://agusdelva.github.io/social-media-dashboard/images/youtube.png',
        pageViews: '117',
        growth: 303,
        key: 4
    }
]

function Overview() {
    return (
        <section className="overview">
        <div className="wrapper">
          <h2>Overview - Today</h2>

          <div className="grid">
              {
                  cardSmallList.map(({icon,pageViews, growth, key}) => (
                  <CardSmall
                    icon={icon}
                    key={key}
                    pageViews={pageViews}
                    growth={growth}
                  />
                  ))
              }
           
            {/* <div className="card-small">
                <p className="card-small-views">Likes</p>
                <p className="card-small-icon">
                    <img src="https://agusdelva.github.io/social-media-dashboard/images/facebook.png" />
                </p>
                <p className="card-small-number">52</p>
                <p className="card-small-percentage is-danger">
                    <span>
                        <img src="https://agusdelva.github.io/social-media-dashboard/images/facebook.png"/>
                        2%
                    </span>
                 
                </p>
            </div>
            <div className="card-small">
                <p className="card-small-views">Likes</p>
                <p className="card-small-icon">
                    <img src="https://agusdelva.github.io/social-media-dashboard/images/instagram24.png" />
                </p>
                <p className="card-small-number">5462</p>
                <p className="card-small-percentage">
                    <span>
                        <img src="https://agusdelva.github.io/social-media-dashboard/images/instagram24.png"/>
                        2257%
                    </span>
                 
                </p>
            </div>
            <div className="card-small">
                <p className="card-small-views">profile Views</p>
                <p className="card-small-icon">
                    <img src="images/instagram24.png" />
                </p>
                <p className="card-small-number">52k</p>
                <p className="card-small-percentage">
                    <span>
                        <img src="https://agusdelva.github.io/social-media-dashboard/images/instagram24.png"/>
                        1375%
                    </span>
                 
                </p>
            </div>
            <div className="card-small">
                <p className="card-small-views">Retweets</p>
                <p className="card-small-icon">
                    <img src="https://agusdelva.github.io/social-media-dashboard/images/twitter.png" />
                </p>
                <p className="card-small-number">117</p>
                <p className="card-small-percentage">
                    <span>
                        <img src="https://agusdelva.github.io/social-media-dashboard/images/twitter.png"/>
                        303%
                    </span>
                 
                </p>
            </div>
            <div className="card-small">
                <p className="card-small-views">Likes</p>
                <p className="card-small-icon">
                    <img src="https://agusdelva.github.io/social-media-dashboard/images/twitter.png" />
                </p>
                <p className="card-small-number">507</p>
                <p className="card-small-percentage">
                    <span>
                        <img src="https://agusdelva.github.io/social-media-dashboard/images/twitter.png"/>
                        553%
                    </span>
                 
                </p>
            </div>
            <div className="card-small">
                <p className="card-small-views">Likes</p>
                <p className="card-small-icon">
                    <img src="https://agusdelva.github.io/social-media-dashboard/images/youtube.png" />
                </p>
                <p className="card-small-number">107</p>
                <p className="card-small-percentage is-danger">
                    <span>
                        <img src="https://agusdelva.github.io/social-media-dashboard/images/youtube.png"/>
                        19%
                    </span>
                 
                </p>
            </div>
            <div className="card-small">
                <p className="card-small-views">Total views</p>
                <p className="card-small-icon">
                    <img src="https://agusdelva.github.io/social-media-dashboard/images/youtube.png" />
                </p>
                <p className="card-small-number">1407</p>
                <p className="card-small-percentage is-danger">
                    <span>
                        <img src="https://agusdelva.github.io/social-media-dashboard/images/youtube.png"/>
                        12%
                    </span>
                 
                </p>
            </div>*/}
            </div>
        </div>

    </section> 
    )
}

export default Overview