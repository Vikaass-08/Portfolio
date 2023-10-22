import TradingWorld from "../Images/TradingWorld.png"
import blackJack from "../Images/blackjack.jpg"
import CoolSkool from "../Images/CoolSkool.png"
import health from "../Images/health.jpg"
import iot from "../Images/iot.jpg"
import slack from "../Images/Slack.png"
import spaceInvader from "../Images/spaceInvader.png"
import dealMaker from "../Images/dealMaker.jpg"

const cardData = [
  { imgUrl : dealMaker
  , imgAlt: "Deal-maker-img"
  , title: "Deal Maker"
  , description: 
      [ "It is a premier backend solution dedicated to optimizing the document signing process for lenders and borrowers."
      , "There are 2 kinds of user (BORROWER, LENDER)."
      , "Lender can create and make changes in the documents (Before Signing), accept document signing request from a borrower."
      , "Borrowers can apply for document Signing for any lenders, once accepted then the signing process takes place."
      ]
  , techUsed: ["Rust", "PSQL", "Postman"]
  , github: "https://github.com/Vikaass-08/deal-maker"
  },
  { imgUrl : TradingWorld
  , imgAlt: "Project Image"
  , title: "Trading World"
  , description: 
      [ "It shows all the recent news and global data about Cryptocurrencies."
      , "Processed data is shown in graphical format to check the past performance of the coins."
      ]
  , techUsed: ["react.js", "APIs", "chart.Js", "redux", "Ant-design"]
  , live: "https://tradingworld.netlify.app/"
  , github: "https://github.com/Vikaass-08/TradingWorld"
  },
  { imgUrl : CoolSkool
  , imgAlt: "cool-skool-img"
  , title: "CoolSkool"
  , description: 
      [ "So much to learn, so little time. Sometimes studying is a little easier and more enjoyable with a buddy."
      , "Find your study buddy with the Study Buddy app."
      , "Study Buddy is an app created to help people interested in various study topics to connect with others interested in the same topics."
      , "Users can find those who want to study on the same terms as themselves, as well as can create a favorites page to keep track of their favorite study buddies."
      ]
  , techUsed: [ "Django", "Django RestFrameWork", "Javascript", "Bootstrap"]
  , github: "https://github.com/Vikaass-08/coolskool-live"
  },
  { imgUrl : slack
  , imgAlt: "sack-clone-img"
  , title: "Slack Clone"
  , description: 
      [ "It is a social site with features like creating and joining chat rooms."
      , "Google Authentication"
      , "firebase real-time database"
      ]
  , techUsed: ["React.js", "Node.js", "Firebase"]
  , github: "https://github.com/Vikaass-08/SlackClone"
  },
  { imgUrl : iot
  , imgAlt: "IOT-img"
  , title: "Home Authentication & Automation System"
  , description: 
      [ "It has a fingerprint sensor lock system with motion detector and camera attached to increase the security measure."
      , "Intruders pics will be automatically send to the owner through mail and user can control electronic home appliances through phone."
      ]
  , techUsed: ["Arduino", "Django", "C", "Motion Tracking"]
  , live: "https://www.linkedin.com/posts/vikaass08_raspberrypi4-pythonprogramming-rfidtechnology-activity-6708442802453262336-gACt/?utm_source=share&utm_medium=member_desktop"
  },
  { imgUrl : health
  , imgAlt: "Health-monitoring-img"
  , title: "Remote IOT Based Health Monitoring System"
  , description: 
      [ "It is a health monitoring system that read live data about patient's heart rate, body temperature, glucose and these data is send to an API"
      , "If patient's health declines then a mail is send to the patient's family and friends through the API."
      , "We have also design a web page through which we can view these patient's data anytime."
      , "These data keeps updating in every 10 second."
      ]
  , techUsed: ["Ardunio", "Django"]
  },
  { imgUrl : spaceInvader
  , imgAlt: "spacke-invader-img"
  , title: "Space Invader"
  , description: 
      [ "Recreated the old school game called space Invaders using python pygame."
      ]
  , techUsed: ["Pygame"]
  , github: "https://github.com/Vikaass-08/Space-Invaders/tree/master"
  },
  { imgUrl : blackJack
  , imgAlt: "blackjack-img"
  , title: "BlackJack Card Game"
  , description: 
      [ "It's a card game in which the you will play against a bot."
      , "You have to get the total sum of the cards closer to 21 without exceeding it."
      , "The player with the sum closest to 21 will win the game."
      ]
  , techUsed: ["Javascript", "css", "html"]
  , live: "https://vikaass-08.github.io/BlackJack-Game/"
  , github: "https://github.com/Vikaass-08/BlackJack-Game"
  }
]

export default cardData;