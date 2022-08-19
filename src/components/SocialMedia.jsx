import React from "react";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";
import ReactTooltip from "react-tooltip";
const SocialMedia = () => {
  return (
    <div>
      <div className='app__flex app__social-media'>
        <div>
          <a
            href='https://www.facebook.com/'
            target='_blank'
            rel='noreferrer'
            data-for='tooltip2'
            data-tip
          >
            {" "}
            <AiFillFacebook />
          </a>
        </div>
        <div className='app__flex'>
          <a
            href='https://www.instagram.com/'
            rel='noreferrer'
            target='_blank'
            data-for='tooltip3'
            data-tip
          >
            <AiOutlineInstagram />
          </a>
          <a
            href='https://www.youtube.com/'
            rel='noreferrer'
            target='_blank'
            data-for='tooltip4'
            data-tip
          >
            <AiFillYoutube color='red' />
          </a>
        </div>
      </div>
      <ReactTooltip id='tooltip2' effect='solid' arrowColor='#2f271f'>
        "Facebook"
      </ReactTooltip>
      <ReactTooltip id='tooltip3' effect='solid' arrowColor='#2f271f'>
        "Instagram"
      </ReactTooltip>
      <ReactTooltip id='tooltip4' effect='solid' arrowColor='#2f271f'>
        "Youtube"
      </ReactTooltip>
    </div>
  );
};

export default SocialMedia;
