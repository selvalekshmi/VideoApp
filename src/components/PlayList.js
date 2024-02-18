

import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';   // matrial ui 
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from 'react-router';
import Witch from "../assets/video/Witch.mp4";
import OnePice from "../assets/video/one-pice.mp4"
import Hack from "../assets/video/hack.mp4"
import Appleseed from "../assets/video/Appleseed.mp4"
import Rozen from "../assets/video/Rozen.mp4"
import witch from "../assets/images/witch.jpg";
import onePice from "../assets/images/one-pice.jpg"
import rumble from "../assets/images/rumble.jpg"
import hack from "../assets/images/hack.jpg"
import appleseed from "../assets/images/appleseed.jpg"
import rozen from "../assets/images/rozen.jpg"


const playList = [  // json data for play list
  {
    "id": "1",
    "title": "Witch Hunter Robin",
    "image_url": witch,
    "url": Witch,
    "des": "Robin Sena is a powerful craft user drafted into the STNJ—a group of specialized hunters that fight deadly beings known as Witches. Though her fire power is great, she's got a lot to learn about her powers and working with her cool and aloof partner, Amon. But the truth about the Witches and herself will leave Robin on an entirely new path that she never expected!",

  },
  {
    "id": "2",
    "title": "One Piece",
    "image_url": onePice,
    "url": OnePice,
    "des": "Barely surviving in a barrel after passing through a terrible whirlpool at sea, carefree Monkey D. Luffy ends up aboard a ship under attack by fearsome pirates. Despite being a naive-looking teenager, he is not to be underestimated. Unmatched in battle, Luffy is a pirate himself who resolutely pursues the coveted One Piece treasure and the King of the Pirates title that comes with it. The late King of the Pirates, Gol D. Roger, stirred up the world before his death by disclosing the whereabouts of his hoard of riches and daring everyone to obtain it. Ever since then, countless powerful pirates have sailed dangerous seas for the prized One Piece only to never return. Although Luffy lacks a crew and a proper ship, he is endowed with a superhuman ability and an unbreakable spirit that make him not only a formidable adversary but also an inspiration to many. As he faces numerous challenges with a big smile on his face, Luffy gathers one-of-a-kind companions to join him in his ambitious endeavor, together embracing perils and wonders on their once-in-a-lifetime adventure.",

  },

  {
    "id": "3",
    "title": "School Rumble",
    "image_url":rumble,
    "url": Appleseed,
    "des": "In order to fulfill their dead father's wish, the siblings Takane Kiku and Takane Ryuji aim for the champion title of the boxing arena. Their sister, Kiku, will act as the trainer while her brother, Ryuji, will concentrate on the role of the boxer and learn the Boomerang. His battle with many rivals has led to the growth and maturing of Ryuji. The junior high boxing tournament has begun and Ryuji will be fighting his arch-rival, Kenzaki Jun. The battle begins.",

  },
  {
    "id": "4",
    "title": ".hack//Sign",
    "image_url": hack,
    "url": Hack,
    "des": "A young wavemaster, only known by the alias of Tsukasa, wakes up in an MMORPG called The World, with slight amnesia. He does not know what he has previously done before he woke up. In The World, the Crimson Knights suspects him of being a hacker, as he was seen accompanying a tweaked character in the form of a cat. Unable to log out from the game, he wanders around looking for answers, avoiding the knights and other players he meets along the way. As Tsukasa explores The World, he stumbles upon a magical item that takes the form of a guardian,which promises him protection from all harm. Subaru, the leader of the Crimson Knights, along with several other players who became acquainted with Tsukasa, set out to investigate why Tsukasa is unable to log out, and attempt to get to the bottom of the problem before it gets out of hand.",

  },
  {
    "id": "5",
    "title": "Appleseed",
    "image_url": appleseed,
    "url": Appleseed,
    "des": "Growing out of the chaos of a global war, the city of Utopia is populated by humans and bioroids (artificial humans). On the surface, everything is harmonious, but tensions lurk. Into this seemingly perfect society comes a survivor of the wars, Deunan Knute, who carries a legacy that will turn out to be of critical importance to the future of humanity.",

  },
  {
    "id": "6",
    "title": "Rozen Maiden",
    "image_url": rozen,
    "url":Rozen,
    "des": "Traumatized by school, Jun Sakurada spends his days at home as a shut-in, purchasing things online, only to send them back before the free trial period ends. So when a note appears on his desk, asking whether or not he would wind something, he assumes it was something he ordered and carelessly circles yes,changing his life forever. A box arrives with a wind up doll inside, but this is no ordinary toy: after Jun winds her up, she begins walking and talking as if a normal person. With a haughty attitude, she introduces herself as Shinku, the fifth doll in the Rozen Maiden collection, a group of special dolls made by the legendary dollmaker Rozen. These sisters must battle each other in a competition called the Alice Game with the help of a human to ensure victory. The winner becomes Alice, a real girl who is worthy of meeting their creator. As more sentient dolls end up taking residence in Jun's house, and a foe from Shinku's past makes her appearance, Jun's life becomes far more complicated than he ever thought possible.",

  },]


const PlayList = () => {
  const [searchList, setSearchList] = useState('');    // define values in state
  const [filteredList, setFilteredList] = useState(playList);

  const handleInputChange = (e) => {  // getting search input value
    const searchTerm = e.target.value;
    setSearchList(searchTerm);         // input data st in the setstate

    const filteredItems = playList.filter((list) =>   // check input data present the json data
      list.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredList(filteredItems);    // filter item set the state base on the input search value 
  };

  const navigate = useNavigate();   // used to redirection

  const handleVideoPlay = (url) => {
    if (url) navigate(`/videoPlay/?watch=${url}`);  // click the image it will redirect . url pass into query string format
  };

  const dragList = useRef();
  const dragOverList = useRef();


  const handleDragStart = (e, position) => {   // called when the drag operation starts.stores the current position of the dragged item in the dragList reference.
    dragList.current = position;
    console.log(e.target.innerHTML);
  };

  const handleDragEnter = (e, position) => {    // called when a dragged item enters the drop zone. It stores the position where the item is being dragged over in the dragOverList reference.
    dragOverList.current = position;
    console.log(e.target.innerHTML);
  };

  const handleDrop = (e) => {
    const copyListItems = [...filteredList];
    const dragItemContent = copyListItems[dragList.current];
    copyListItems.splice(dragList.current, 1);
    copyListItems.splice(dragOverList.current, 0, dragItemContent);
    dragList.current = null;
    dragOverList.current = null;
    setFilteredList(copyListItems);
  };
  return (
    <>
    <div className='search-parent'> 
      <input           // sarch bar
        type="text"
        value={searchList}
        onChange={handleInputChange}
        placeholder="Type to search"
        className='search-input'
      />
</div>
      <Box sx={{ flexGrow: 1 }} className='list-comp'>
        <Grid container spacing={2}>
          {filteredList && filteredList.map((val, index) =>
            <Grid item xs={12} md={2} xl={2} className='list-sub' spacing={2}>
              <Card key={index}
                onDragStart={(e) => handleDragStart(e, index)}
                onDragEnter={(e) => handleDragEnter(e, index)}
                onDragEnd={handleDrop}
                draggable
              >
                <CardMedia
                  component="img"
                  sx={{ height: 250, cursor: "pointer", borderRadius: 1 }}
                  image={val.image_url}
                  alt="image"
                  onClick={() => handleVideoPlay(val.url)}
                />
              </Card>
              <p className='video-title'>{val.title}</p>
            </Grid>
          )}

        </Grid>
      </Box>
    </>
  );
}

export default PlayList;
