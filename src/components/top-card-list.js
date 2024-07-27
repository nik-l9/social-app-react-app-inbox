import React from 'react'
import Card from './Card'
import '../styles/top-card-list.css'

import {generate as id} from 'shortid'

const cardListData = [
    {
        userName: '@facebook',
        followers: '1486',
        todayFollowers: 12,
        icon: "https://agusdelva.github.io/social-media-dashboard/images/facebook.png",
        name: 'facebook',
        postText: "Hi ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat lorem vel odio eleifend, vel interdum neque posuere.",
        imageUrl: "https://images.pexels.com/photos/16168538/pexels-photo-16168538/free-photo-of-black-dog-in-street.jpeg",
        imageWidth: "280px", // Add width of the image
        imageHeight: "280px" // Add height of the image
    },
    {
        userName: '@twitter',
        followers: '28540',
        todayFollowers: 20,
        icon: "https://agusdelva.github.io/social-media-dashboard/images/twitter.png",
        name: 'twitter',
        postText: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageUrl: "https://images.pexels.com/photos/24235391/pexels-photo-24235391/free-photo-of-black-and-white-photo-of-a-bridge.jpeg",
        imageWidth: "280px", // Add width of the image
        imageHeight: "280px" 
    },
    {
        userName: '@instagram',
        followers: '4550',
        todayFollowers: 30,
        icon: "https://agusdelva.github.io/social-media-dashboard/images/instagram24.png",
        name: 'instagram',
        postText: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imageUrl: "https://images.pexels.com/photos/11631545/pexels-photo-11631545.jpeg",
        imageWidth: "280px", // Add width of the image
        imageHeight: "280px"
    },
    {
        userName: '@youtube',
        followers: '4140',
        todayFollowers: -50,
        icon: "https://agusdelva.github.io/social-media-dashboard/images/youtube.png",
        name: 'youtube',
        postText: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imageUrl: "https://images.pexels.com/photos/7239501/pexels-photo-7239501.jpeg",
        imageWidth: "280px", // Add width of the image
        imageHeight: "280px"
    },
];


function TopCardList() {
    return (
        <section className="top-card">
        <div className="wrapper">
            <div className="grid">
                {
                    cardListData.map((cardData)=> <Card key={id} {...cardData}/>)
                }
            </div>
        </div>
</section>
    )
}

export default TopCardList