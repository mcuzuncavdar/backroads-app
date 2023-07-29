import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'

export const pageLinks = [
    {id:1, href:'#home', text: 'home' },
    {id:2, href:'#about', text: 'about'},
    {id:3, href:'#services', text: 'services' },
    {id:4, href:'#tours', text: 'tours' },
];

export const socialLinks = [
    {id:1, href:'https://www.twitter.com', icon:'fab fa-facebook'},
    {id:2, href:'https://www.twitter.com', icon:'fab fa-twitter'},
    {id:3, href:'https://www.twitter.com', icon:'fab fa-squarespace'},
]
    
export const servicesLink = [
    {id:1, iconName:"fas fa-wallet fa-fw", titleName: "saving money", textName: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."},
    {id:2, iconName:"fas fa-tree fa-fw", titleName: "endless hiking", textName: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."},
    {id:3, iconName:"fas fa-socks fa-fw", titleName: "amazing comfort", textName: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."},
]

export const toursLink = [
    {
     id:1,
     imageName:tour1,
     date: "august 26th, 2020",
     title: "Tibet Adventure",
     text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.", 
     country: "china", 
     day: "6", 
     price : "2100"
    },
    {
     id:2, 
     imageName:tour2, 
     date: "august 26th, 2020", 
     title: "best of java",
     text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
     country: "indonesia",
     day: "11",
     price : "1400"
    },
    {
     id:3, 
     imageName:tour3,
     date: "august 26th, 2020", 
     title: "explore hong kong" ,
     text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.", 
     country: "hong kong", 
     day: "8",
     price : "5000"
    },
    {
     id:4,
     imageName:tour4,
     date: "august 26th, 2020",
     title: "kenya highlights", 
     text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.", country: "kenya", day: "20", price : "3300" }
]
