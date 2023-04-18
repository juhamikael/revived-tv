import React, { useState } from "react";
import musicData from "../utils/music-data";
import { Icon } from "@iconify/react";
import "../styles/artists.css";
import { parseSpotifyUrl } from "../utils/functions";
interface PlatformData {
  youtube: string[];
  spotify: string;
  soundcloud: string;
}

interface ArtistData {
  name: string;
  data: PlatformData;
}
type MusicDataType = {
  [key: string]: ArtistData;
};

enum Platform {
  YouTube,
  SoundCloud,
  Spotify,
}

const ArtistList: React.FC = () => {
  const [openedArtist, setOpenedArtist] = useState<string | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const typedMusicData: MusicDataType = musicData;

  const toggleArtist = (name: string) => {
    if (openedArtist === name) {
      setOpenedArtist(null);
      setSelectedPlatform(null);
    } else {
      setOpenedArtist(name);
    }
  };

  const selectPlatform = (platform: Platform) => {
    setSelectedPlatform(platform);
  };

  return (
    <div className="flex justify-center ">
      <div className="w-1/3">
        {Object.keys(typedMusicData).map((key) => {
          const artistData = typedMusicData[key];
          const { name, data } = artistData;
          const isOpen = openedArtist === name;

          return (
            <>
              <h1
                className="text-2xl font-montserrat text-white font-bold my-4 cursor-pointer"
                onClick={() => toggleArtist(name)}
              >
                <div className="w-full flex justify-between">
                  Music by {name}{" "}
                  <span>
                    <Icon
                      icon={
                        isOpen ? "carbon:chevron-up" : "carbon:chevron-down"
                      }
                      className="inline-block"
                    />
                  </span>
                </div>
              </h1>
              {isOpen && (
                <>
                  <div className="flex space-x-6 mb-4 font-montserrat">
                    <button
                      className={`text-white ${
                        selectedPlatform === Platform.YouTube ? "font-bold" : ""
                      }`}
                      onClick={() => selectPlatform(Platform.YouTube)}
                    >
                      <p className="flex flex-row items-center zoom">
                        <Icon
                          icon="mdi:youtube"
                          height={25}
                          className="text-[#FF0000]"
                        />
                        <span className="ml-2">YouTube</span>
                      </p>
                    </button>
                    <button
                      className={`text-white ${
                        selectedPlatform === Platform.SoundCloud
                          ? "font-bold"
                          : ""
                      }`}
                      onClick={() => selectPlatform(Platform.SoundCloud)}
                    >
                      <p className="flex flex-row items-center zoom">
                        <Icon
                          icon="mdi:soundcloud"
                          height={25}
                          className="text-orange-500"
                        />
                        <span className="ml-2">SoundCloud</span>
                      </p>
                    </button>
                    <button
                      className={`text-white ${
                        selectedPlatform === Platform.Spotify ? "font-bold" : ""
                      }`}
                      onClick={() => selectPlatform(Platform.Spotify)}
                    >
                      <p className="flex flex-row items-center zoom">
                        <Icon
                          icon="mdi:spotify"
                          height={25}
                          className="text-green-500"
                        />
                        <span className="ml-2">Spotify</span>
                      </p>
                    </button>
                  </div>
                  {selectedPlatform === Platform.YouTube && (
                    <div className="grid grid-cols-2 gap-x-5 gap-y-10">
                      {data.youtube.map((id) => {
                        return (
                          <iframe
                            className="rounded-3xl w-full"
                            width="400"
                            height="160"
                            src={`https://www.youtube.com/embed/${id}`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          ></iframe>
                        );
                      })}
                    </div>
                  )}
                  {selectedPlatform === Platform.SoundCloud &&
                    (console.log(),
                    (
                      <>
                        <iframe
                          width="100%"
                          height="300"
                          allow="autoplay"
                          src={`https://w.soundcloud.com/player/?url=https://soundcloud.com/revived-tv-juha/sets/${data.soundcloud}&color=%23ff9800&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
                        ></iframe>
                        ;
                      </>
                    ))}
                  {selectedPlatform === Platform.Spotify && (
                    <iframe
                      src={`https://open.spotify.com/embed/artist/${parseSpotifyUrl(
                        data.spotify
                      )}?utm_source=generator&theme=0`}
                      className="mt-4 mb-10"
                      width="650"
                      height="380"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                    ></iframe>
                  )}
                </>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ArtistList;
