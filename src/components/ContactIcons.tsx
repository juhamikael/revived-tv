import { Icon } from "@iconify/react";
import { socialMedia } from "../utils/navbarItems";
const socialMediaHref = {
  instagram: "https://www.instagram.com/revived.records/",
  spotify:
    "https://open.spotify.com/playlist/2mBxbEOirYYMZyNEY5oUzv?si=3fa60e290e684c04",
  youtube: "https://www.youtube.com/@Revived.",
  discord: "https://discord.gg/bAFjKcZXus",
};

const icons = {
  spotify: {
    name: "Spotify",
    logo: "mdi:spotify",
  },
  youtube: {
    name: "YouTube",
    logo: "mdi:youtube",
  },
  soundcloud: {
    name: "SoundCloud",
    logo: "mdi:soundcloud",
  },
  instagram: {
    name: "Instagram",
    logo: "mdi:instagram",
  },
  twitter: {
    name: "Twitter",
    logo: "mdi:twitter",
  },
  discord: {
    name: "Discord",
    logo: "mdi:discord",
  },
};

type IContactIconsProps = {
  socialMedia: string;
  color?: string;
};

const ContactIcons: React.FC<IContactIconsProps> = ({ socialMedia, color }) => {
  console.log(icons[socialMedia].logo);
  return (
    <a href={socialMediaHref[socialMedia]} target="_blank">
      <Icon
        icon={icons[socialMedia].logo}
        height={25}
        className={`${color ? color : ""}`}
      />
    </a>
  );
};

export default ContactIcons;
