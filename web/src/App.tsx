import * as Dialog from '@radix-ui/react-dialog';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Logo from './assets/Logo.svg';
import './base.css';
import BannerCreateAd from './components/BannerCreateAd';
import CardGame from './components/CardGame';
import ModalCreateAd from './components/ModalCreateAd';
import { configRequest } from './util/requestConfig';

export interface iGame {
  id: string;
  name: string;
  box_art_url: string;
  ads: number;
}

function App() {
  const [games, setGames] = useState<iGame[]>([]);

  const getAdsFromGameId = async (id: string) => {
    const response = await axios
      .get(`http://localhost:3333/games/${id}/ads`)
      .then((res) => res);
    return response.data.length;
  };

  useEffect(() => {
    (async () => {
      const response: iGame[] = await axios
        .get('https://api.twitch.tv/helix/games/top?first=6', configRequest)
        .then((response) => response.data.data);

      const addingNumbersAds = await Promise.all(
        response.map(async (game) => {
          return {
            ...game,
            box_art_url: game.box_art_url
              .replace('{width}', '188')
              .replace('{height}', '250'),
            ads: await getAdsFromGameId(game.id),
          };
        })
      );
      setGames(addingNumbersAds);
    })();
  }, []);

  return (
    <>
      <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
        <img src={Logo} alt="logo" />
        <h1 className="mt-20 text-6xl text-white font-black">
          Seu{' '}
          <span className="text-transparent bg-nlw-gradient bg-clip-text">
            duo
          </span>{' '}
          está aqui
        </h1>
        <div className="grid grid-cols-6 gap-6 mt-16">
          {games.map((game) => (
            <CardGame
              key={game.id}
              src={game.box_art_url}
              name={game.name}
              numberAds={game.ads}
            />
          ))}
        </div>
        <Dialog.Root>
          <BannerCreateAd />
          <ModalCreateAd />
        </Dialog.Root>
      </div>
    </>
  );
}

export default App;
