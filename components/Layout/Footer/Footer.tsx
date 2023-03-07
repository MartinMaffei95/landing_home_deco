import React from 'react';
import {
  SlSocialFacebook,
  SlSocialGoogle,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialTwitter,
} from 'react-icons/sl';
type IconType = {
  name: string;
  src: JSX.Element;
};
const icons: IconType[] = [
  {
    name: 'Facebook',
    src: <SlSocialFacebook />,
  },
  { name: 'Google', src: <SlSocialGoogle /> },
  { name: 'Instagram', src: <SlSocialInstagram /> },
  { name: 'Linkedin', src: <SlSocialLinkedin /> },
  { name: 'Twitter', src: <SlSocialTwitter /> },
];
const Footer = () => {
  return (
    <footer className="footer-style">
      <div className="flex gap-2">
        {icons.map((icon, index) => (
          <div key={index} className={`icon-general ${icon?.src}`}>
            {icon.src}
          </div>
        ))}
      </div>
      <div>
        <p>© {new Date()?.getFullYear()} MartinMaffei All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
