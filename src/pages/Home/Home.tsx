import Navbar from "../../components/Navbar/Navbar"
import myImage from '../../assets/myImage.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import './Home.css'
import TitleCards from "../../components/TitleCards/TitleCards"
import Footer from "../../components/Footer/Footer"

const Home = () => {
  return (
    <div className="">
      <Navbar/>
      <div className="hero relative">
        <img src={myImage} alt="" className="banner-img w-full "/>
        <div className="hero_caption absolute w-full px-[6%] bottom-0">
          <img src={hero_title} alt="" className="Caption_img w-[90%] max-w-[420px] mb-10"/>
          <p className="max-w-[700px] text-[17px] mb-8">
            Discovering his ties to a secret ancient order , a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.
          </p>
          <div className="hero_btns flex space-x-3 mb-11">
            <button className="btn">
              <img src={play_icon} alt="" className="w-[25px]" />
              <span>Play</span>
            </button>
            <button className="btn dark_Mode">
              <img src={info_icon} alt="" className="w-[25px]" />
              <span>More Info</span>
            </button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more_cards px-[6%]">
      <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
      <TitleCards title={"Only on Netflix"} category={"popular"}/>
      <TitleCards title={"Upcoming"} category={"upcoming"}/>
      <TitleCards title={"Top pics for you"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
