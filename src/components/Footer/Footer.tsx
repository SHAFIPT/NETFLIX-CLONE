import Youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer px-[30px] py-[4%] max-w-[1000px] mx-auto'>
      <div className="footer-icons flex space-x-[20px] mx-[40px] my-9 w-8 cursor-pointer">
        <img src={facebook_icon} alt="" className=''/>
        <img src={Youtube_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
      </div>
      <ul className='grid grid-cols-4 gap-4 mb-10 list-none px-9'>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copy_right px-9 text-[14px]'>Copyright © 2024 Netflix, Inc</p>
    </div>
  )
}

export default Footer
