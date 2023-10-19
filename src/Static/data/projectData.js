import TradingWorld from "../../Static/Images/TradingWorld.png"
import blackJack from "../../Static/Images/blackjack.jpg"
import CoolSkool from "../../Static/Images/CoolSkool.png"
import health from "../../Static/Images/health.jpg"
import iot from "../../Static/Images/iot.jpg"
import slack from "../../Static/Images/Slack.png"
import spaceInvader from "../../Static/Images/spaceInvader.png"

const cardData = [
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
  , imgAlt: "Project Image"
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
  , imgAlt: "Project Image"
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
  , imgAlt: "Project Image"
  , title: "Home Authentication & Automation System"
  , description: 
      [ "It has a fingerprint sensor lock system with motion detector and camera attached to increase the security measure."
      , "Intruders pics will be automatically send to the owner through mail and user can control electronic home appliances through phone."
      ]
  , techUsed: ["Arduino", "Django", "C", "Motion Tracking"]
  , live: "https://www.linkedin.com/posts/vikaass08_raspberrypi4-pythonprogramming-rfidtechnology-activity-6708442802453262336-gACt/?utm_source=share&utm_medium=member_desktop"
  },
  { imgUrl : health
  , imgAlt: "Project Image"
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
  , imgAlt: "Project Image"
  , title: "Space Invader"
  , description: 
      [ "Recreated the old school game called space Invaders using python pygame."
      ]
  , techUsed: ["Pygame"]
  , github: "https://github.com/Vikaass-08/Space-Invaders/tree/master"
  },
  { imgUrl : blackJack
  , imgAlt: "Project Image"
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