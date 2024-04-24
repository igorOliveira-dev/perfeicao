import { useState } from 'react'
import './App.css'

import imgUrl144 from '/p144img.png'
import imgUrl240 from '/p240img.png'
import imgUrl480 from '/p480img.png'
import imgUrl720 from '/p720img.png'
import imgUrl1080 from '/aMinhaPerfeicao.jpg'


function App() {

  const [quality, setQuality] = useState('');
  const [imageUrl, setImageUrl] = useState(imgUrl144);

  const handleQualityChange = (e) => {
    setQuality(e.target.value);

    switch (e.target.value) {
      case 'img144':
        setImageUrl(imgUrl144);
        break;
      case 'img240':
        setImageUrl(imgUrl240);
        break;
      case 'img480':
        setImageUrl(imgUrl480);
        break;
      case 'img720':
        setImageUrl(imgUrl720);
        break;
      case 'img1080':
        setImageUrl(imgUrl1080);
        break;
      default:
        break;
    }
  };

  return (
    <div id='geralContent'>
      <img src={imageUrl} id='imagem' />
      <select id='select' value={quality} onChange={handleQualityChange}>
        <option value="img144">144p</option>
        <option value="img240">240p</option>
        <option value="img480">480p</option>
        <option value="img720">720p</option>
        <option value="img1080">1080p</option>
      </select>
    </div>
  )
}

export default App
