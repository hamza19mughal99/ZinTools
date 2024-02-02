import React from 'react';
import youtubeIcon from "@/images/youtube_icon.svg";
import twitterIcon from "@/images/twitter_icon.svg";
import facebookIcon from "@/images/facebook_icon.svg";
import settingIcon from "@/images/setting_icon.svg";
import nightIcon from "@/images/moon_icon.png";
import Image from 'next/image';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className='social_icon'>
                <span>Follow us</span>
                <ul>
                    <li> <Image src={youtubeIcon} alt='' /> </li>
                    <li> <Image src={twitterIcon} alt='' /> </li>
                    <li> <Image src={facebookIcon} alt='' /> </li>
                </ul>
            </div>

            <div className='footer_links'>
                <div className='row'>
                    <div className='col-md-7'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <h6>Internal Links</h6>
                                <ul>
                                    <li>Documentaries</li>
                                    <li>Themes</li>
                                    <li>Chrome casts</li>
                                </ul>
                            </div>
                            <div className='col-md-4'>
                                <h6>Enterprise</h6>
                                <ul>
                                    <li>Download Chrome Browser</li>
                                    <li>Chrome Browser for Enterprise</li>
                                    <li>Chrome Browser Devices</li>
                                    <li>ChromeOS</li>
                                    <li>Google Cloud</li>
                                    <li>Google Workspace</li>
                                </ul>
                            </div>
                            <div className='col-md-4'>
                                <h6>Internal Links</h6>
                                <ul>
                                    <li>Documentaries</li>
                                    <li>Themes</li>
                                    <li>Chrome casts</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <h6>Enterprise</h6>
                                <ul>
                                    <li>Download Chrome Browser</li>
                                    <li>Chrome Browser for Enterprise</li>
                                    <li>Chrome Browser Devices</li>
                                    <li>ChromeOS</li>
                                    <li>Google Cloud</li>
                                    <li>Google Workspace</li>
                                </ul>
                            </div>
                            <div className='col-md-6'>
                                <h6>Internal Links</h6>
                                <ul>
                                    <li>Documentaries</li>
                                    <li>Themes</li>
                                    <li>Chrome casts</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='privacy_policy'>
                <div className='left_footer_logo'>
                    <h3> <Image src={settingIcon} alt='' /> ZinTools </h3>

                    <div>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms and conditions</li>
                            <li>Cookies Policy</li>
                            <li>About us</li>
                            <li>EULA</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <Image src={nightIcon} alt='' className='night_icon' />
                </div>
            </div>
        </footer>
    )
}

export default Footer