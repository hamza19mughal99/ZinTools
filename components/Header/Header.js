import React from 'react';
import settingIcon from "@/images/setting_icon.svg";
import Image from 'next/image';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className='header_top'>
                <div className='header_left'>
                    <h3> <Image src={settingIcon} alt='' /> ZinTools </h3>

                    <div className='search_wrap'>
                        <form>
                            <input placeholder='Search for Movies, TV Shows, Themes & Cast ' />
                            <div>
                                <svg style={{ cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path d="m19.705 18.288-5.531-5.531a7.927 7.927 0 1 0-1.424 1.421l5.531 5.532a1.006 1.006 0 0 0 1.422-1.422ZM3.738 12.096a5.908 5.908 0 1 1 8.354 0 5.869 5.869 0 0 1-8.354 0Z"></path></svg>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='auth_btn'>
                    <button>Log in</button>
                    <button>Sign up</button>
                </div>
            </div>
            <div className='header_menu'>
                <ul>
                    <li>Stock Video</li>
                    <li>Video Templates</li>
                    <li>Menu</li>
                    <li>Sound Effects</li>
                    <li>Graphic Templates</li>
                    <li>Graphic</li>
                    <li>Presentation Templates</li>
                    <li>Photos</li>
                    <li>Fonts</li>
                    <li>Add-ons</li>
                    <li>More</li>
                </ul>
            </div>
        </header>
    )
}

export default Header