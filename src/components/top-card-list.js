import React from 'react'
import Card from './Card'
import '../styles/top-card-list.css'

import {generate as id} from 'shortid'

const cardListData = [
    {
        userName: '@pepito',
        followers: '1486',
        todayFollowers: 12,
        icon: "https://agusdelva.github.io/social-media-dashboard/images/facebook.png",
        name: 'facebook',
        postText: "Hi ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat lorem vel odio eleifend, vel interdum neque posuere.",
        imageUrl: "https://th.bing.com/th/id/OIG2.keZgby_Y2TmRLWlj16tT?pid=ImgGn",
        imageWidth: "280px", // Add width of the image
        imageHeight: "280px" // Add height of the image
    },
    {
        userName: '@luisa',
        followers: '28540',
        todayFollowers: 20,
        icon: "https://agusdelva.github.io/social-media-dashboard/images/twitter.png",
        name: 'twitter',
        postText: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageUrl: "https://th.bing.com/th/id/OIG2.R3tP6FSpVk7vhKSqyQam?w=173&h=173&c=6&r=0&o=5&dpr=1.3&pid=ImgGn",
        imageWidth: "280px", // Add width of the image
        imageHeight: "280px" 
    },
    {
        userName: '@osvaldo',
        followers: '4550',
        todayFollowers: 30,
        icon: "https://agusdelva.github.io/social-media-dashboard/images/instagram24.png",
        name: 'instagram',
        postText: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imageUrl: "https://th.bing.com/th/id/OIG1.GgJF8Yhn2qeDykUDFxhC?w=173&h=173&c=6&r=0&o=5&dpr=1.3&pid=ImgGn",
        imageWidth: "280px", // Add width of the image
        imageHeight: "280px"
    },
    {
        userName: '@jose',
        followers: '4140',
        todayFollowers: -50,
        icon: "https://agusdelva.github.io/social-media-dashboard/images/youtube.png",
        name: 'youtube',
        postText: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imageUrl: "https://th.bing.com/th/id/OIG4.0eDfhwN2WFxiny6Kw.jY?w=173&h=173&c=6&r=0&o=5&dpr=1.3&pid=ImgGn",
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