import * as Checkbox from '@radix-ui/react-checkbox';
import * as Dialog from '@radix-ui/react-dialog';
import axios from 'axios';
import { Check, GameController } from 'phosphor-react';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { iGame } from '../App';
import { configRequest } from '../util/requestConfig';
import CheckboxDayWeek from './form/CheckboxDayWeek';
import { Input } from './form/Input';

const ModalCreateAd = () => {
  const [games, setGames] = useState<iGame[]>([]);
  const [weekDays, setWeekDays] = useState<string[]>([]);
  interface adPost {
    game: string;
    name: string;
    yearsPlaying: string;
    weekDays: number[];
    discord: string;
    hourStart: string;
    hourEnd: string;
    useVoiceChannel: string;
  }

  useEffect(() => {
    axios
      .get('https://api.twitch.tv/helix/games/top?first=6', configRequest)
      .then((response) => setGames(response.data.data));
  }, []);

  const changeWeekDays = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    checked
      ? setWeekDays((days) => [...days, value])
      : setWeekDays((days) => days.filter((dayin) => value !== dayin));
  };

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const data = Object.fromEntries(formData);

    try {
      await axios.post(`http://localhost:3333/games/${data.game}/ads`, {
        game: data.game,
        name: data.name,
        yearsPlaying: Number(data.yearsPlaying),
        weekDays: weekDays.map(Number),
        discord: data.discord,
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        useVoiceChannel: data.useVoiceChannel === 'on' ? true : false,
      });
      alert('Anúncio criado com sucesso!');
    } catch (error) {
      console.log(error);
      alert('Erro ao criar um anúncio');
    }
  };

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="inset-0 bg-black/80 fixed flex items-center justify-center" />
      <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 rounded-lg text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-black/25">
        <Dialog.Title className="text-3xl font-black">
          Publique um anúncio
        </Dialog.Title>
        <form onSubmit={submitForm} className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="game">
              Qual o game?
            </label>
            <select
              id="game"
              name="game"
              className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
              defaultValue="default"
            >
              <option disabled value="default">
                Selecione o game que deseja jogar
              </option>
              {games.map((game) => (
                <option value={game.id} key={game.id}>
                  {game.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Seu nome (ou nickname)</label>
            <Input
              id="name"
              name="name"
              placeholder="Como te chamam dentro do game?"
            />
          </div>
          <div className="flex gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="yearsPlaying">
                Joga há quantos anos?
              </label>
              <Input
                name="yearsPlaying"
                id="yearsPlaying"
                placeholder="Tudo bem ser 0"
                type="number"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="discord">Qual seu Discord?</label>
              <Input id="discord" name="discord" placeholder="Usuário#000" />
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="weekDays">Quando costuma jogar?</label>
              <div className="flex gap-1">
                <CheckboxDayWeek
                  text="D"
                  id="domingo"
                  value="0"
                  checked={weekDays.includes('0')}
                  onChange={(e) => changeWeekDays(e)}
                />
                <CheckboxDayWeek
                  text="S"
                  id="segunda"
                  type="checkbox"
                  className="hidden peer"
                  value="1"
                  checked={weekDays.includes('1')}
                  onChange={(e) => changeWeekDays(e)}
                />
                <CheckboxDayWeek
                  text="T"
                  id="terca"
                  type="checkbox"
                  className="hidden peer"
                  value="2"
                  checked={weekDays.includes('2')}
                  onChange={(e) => changeWeekDays(e)}
                />
                <CheckboxDayWeek
                  text="Q"
                  id="quarta"
                  type="checkbox"
                  className="hidden peer"
                  value="3"
                  checked={weekDays.includes('3')}
                  onChange={(e) => changeWeekDays(e)}
                />
                <CheckboxDayWeek
                  text="Q"
                  id="quinta"
                  type="checkbox"
                  className="hidden peer"
                  value="4"
                  checked={weekDays.includes('4')}
                  onChange={(e) => changeWeekDays(e)}
                />
                <CheckboxDayWeek
                  text="S"
                  id="sexta"
                  type="checkbox"
                  className="hidden peer"
                  value="5"
                  checked={weekDays.includes('5')}
                  onChange={(e) => changeWeekDays(e)}
                />
                <CheckboxDayWeek
                  text="S"
                  id="sabado"
                  type="checkbox"
                  className="hidden peer"
                  value="6"
                  checked={weekDays.includes('6')}
                  onChange={(e) => changeWeekDays(e)}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="hourStart">Qual horário do dia</label>
              <div className="flex gap-2">
                <Input
                  type="time"
                  id="hourStart"
                  name="hourStart"
                  placeholder="Dé"
                />
                <Input
                  type="time"
                  id="hourEnd"
                  name="hourEnd"
                  placeholder="Até"
                />
              </div>
            </div>
          </div>
          <label className="mt-2 flex gap-2 text-sm items-center">
            <Checkbox.Root
              name="useVoiceChannel"
              className="w-6 h-6 rounded bg-zinc-900 flex items-center justify-center"
            >
              <Checkbox.Indicator>
                <Check size={16} className="text-emerald-400" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Costumo me conectar ao chat de voz
          </label>
          <footer className="mt-4 flex justify-end gap-4">
            <Dialog.Close
              type="button"
              className="bg-zinc-500 px-5 h-12 rounded-md font-semibold"
            >
              Cancelar
            </Dialog.Close>
            <button
              type="submit"
              className="flex items-center gap-3 bg-violet-500 px-5 h-12 rounded-md font-semibold hover:bg-violet-600"
            >
              <GameController size={24} />
              Encontrar duo
            </button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
};

export default ModalCreateAd;
