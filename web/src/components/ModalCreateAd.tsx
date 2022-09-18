import * as Checkbox from '@radix-ui/react-checkbox';
import * as Dialog from '@radix-ui/react-dialog';
import axios from 'axios';
import { Check, GameController } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { iGame } from '../App';
import CheckboxDayWeek from './form/CheckboxDayWeek';
import { Input } from './form/Input';

const ModalCreateAd = () => {
  const [games, setGames] = useState<iGame[]>([]);
  const [weekDays, setWeekDays] = useState<string[]>([]);

  const configRequest = {
    headers: {
      Authorization: 'Bearer wek3cjmk87zgmi97wyvhali86xygzo',
      'Client-Id': 'daxeoqlwexnvreb9nkb6w7ur0i9lp7',
    },
  };
  useEffect(() => {
    axios
      .get('https://api.twitch.tv/helix/games/top?first=6', configRequest)
      .then((response) => setGames(response.data.data));
  }, []);

  const changeWeekDays = (day: string, checked: boolean) => {
    checked
      ? setWeekDays((days) => [...days, day])
      : setWeekDays((days) => days.filter((dayin) => day !== dayin));
    console.log(weekDays);
  };

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="inset-0 bg-black/80 fixed flex items-center justify-center" />
      <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 rounded-lg text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-black/25">
        <Dialog.Title className="text-3xl font-black">
          Publique um anúncio
        </Dialog.Title>
        <form className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="game">
              Qual o game?
            </label>
            <select
              name=""
              id="game"
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
            <Input id="name" placeholder="Como te chamam dentro do game?" />
          </div>
          <div className="flex gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="yearsPlaying">
                Joga há quantos anos?
              </label>
              <Input
                id="yearsPlaying"
                placeholder="Tudo bem ser 0"
                type="number"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="discord">Qual seu Discord?</label>
              <Input id="discord" placeholder="Usuário#000" />
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
                  onClick={(e) =>
                    changeWeekDays(
                      e.currentTarget.value,
                      e.currentTarget.checked
                    )
                  }
                />
                <CheckboxDayWeek
                  text="S"
                  id="segunda"
                  type="checkbox"
                  className="hidden peer"
                  value="1"
                  checked={weekDays.includes('1')}
                  onClick={(e) =>
                    changeWeekDays(
                      e.currentTarget.value,
                      e.currentTarget.checked
                    )
                  }
                />
                <CheckboxDayWeek
                  text="T"
                  id="terca"
                  type="checkbox"
                  className="hidden peer"
                  value="2"
                  checked={weekDays.includes('2')}
                  onClick={(e) =>
                    changeWeekDays(
                      e.currentTarget.value,
                      e.currentTarget.checked
                    )
                  }
                />
                <CheckboxDayWeek
                  text="Q"
                  id="quarta"
                  type="checkbox"
                  className="hidden peer"
                  value="3"
                  checked={weekDays.includes('3')}
                  onClick={(e) =>
                    changeWeekDays(
                      e.currentTarget.value,
                      e.currentTarget.checked
                    )
                  }
                />
                <CheckboxDayWeek
                  text="Q"
                  id="quinta"
                  type="checkbox"
                  className="hidden peer"
                  value="4"
                  checked={weekDays.includes('4')}
                  onClick={(e) =>
                    changeWeekDays(
                      e.currentTarget.value,
                      e.currentTarget.checked
                    )
                  }
                />
                <CheckboxDayWeek
                  text="S"
                  id="sexta"
                  type="checkbox"
                  className="hidden peer"
                  value="5"
                  checked={weekDays.includes('5')}
                  onClick={(e) =>
                    changeWeekDays(
                      e.currentTarget.value,
                      e.currentTarget.checked
                    )
                  }
                />
                <CheckboxDayWeek
                  text="S"
                  id="sabado"
                  type="checkbox"
                  className="hidden peer"
                  value="6"
                  checked={weekDays.includes('6')}
                  onClick={(e) =>
                    changeWeekDays(
                      e.currentTarget.value,
                      e.currentTarget.checked
                    )
                  }
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="hourStart">Qual horário do dia</label>
              <div className="flex gap-2">
                <Input type="time" id="hourStart" placeholder="Dé" />
                <Input type="time" id="hourEnd" placeholder="Até" />
              </div>
            </div>
          </div>
          <div className="mt-2 flex gap-2 text-sm items-center">
            <Checkbox.Root className="w-6 h-6 rounded bg-zinc-900 flex items-center justify-center">
              <Checkbox.Indicator>
                <Check size={16} className="text-emerald-400" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Costumo me conectar ao chat de voz
          </div>
          <footer className="mt-4 flex justify-end gap-4">
            <Dialog.Close className="bg-zinc-500 px-5 h-12 rounded-md font-semibold">
              Cancelar
            </Dialog.Close>
            <Dialog.Close className="flex items-center gap-3 bg-violet-500 px-5 h-12 rounded-md font-semibold hover:bg-violet-600">
              <GameController size={24} />
              Encontrar duo
            </Dialog.Close>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
};

export default ModalCreateAd;
