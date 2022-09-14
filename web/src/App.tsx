import Logo from '../public/Logo.svg';
import Lol from './assets/league-of-legends.png';
import { MagnifyingGlassPlus } from 'phosphor-react';
import './base.css';

function App() {
  return (
    <>
      <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
        <img src={Logo} alt="logo" />
        <h1 className='mt-20 text-6xl text-white font-black'>Seu  <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui</h1>
        <div className='grid grid-cols-6 gap-6 mt-16'>
          <a href="" className='relative rounded-lg overflow-hidden'>
            <img src={Lol} alt="" />
            <div className='w-full pt-16 pb-4 px-4 bg-black-gradient absolute bottom-0 left-0'>
              <strong className='font-bold text-white'>League of legends</strong>
              <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
            </div>
          </a>
          <a href="" className='relative rounded-lg overflow-hidden'>
            <img src={Lol} alt="" />
            <div className='w-full pt-16 pb-4 px-4 bg-black-gradient absolute bottom-0 left-0'>
              <strong className='font-bold text-white'>League of legends</strong>
              <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
            </div>
          </a>
          <a href="" className='relative rounded-lg overflow-hidden'>
            <img src={Lol} alt="" />
            <div className='w-full pt-16 pb-4 px-4 bg-black-gradient absolute bottom-0 left-0'>
              <strong className='font-bold text-white'>League of legends</strong>
              <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
            </div>
          </a>
          <a href="" className='relative rounded-lg overflow-hidden'>
            <img src={Lol} alt="" />
            <div className='w-full pt-16 pb-4 px-4 bg-black-gradient absolute bottom-0 left-0'>
              <strong className='font-bold text-white'>League of legends</strong>
              <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
            </div>
          </a>
          <a href="" className='relative rounded-lg overflow-hidden'>
            <img src={Lol} alt="" />
            <div className='w-full pt-16 pb-4 px-4 bg-black-gradient absolute bottom-0 left-0'>
              <strong className='font-bold text-white'>League of legends</strong>
              <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
            </div>
          </a>
          <a href="" className='relative rounded-lg overflow-hidden'>
            <img src={Lol} alt="" />
            <div className='w-full pt-16 pb-4 px-4 bg-black-gradient absolute bottom-0 left-0'>
              <strong className='font-bold text-white'>League of legends</strong>
              <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
            </div>
          </a>

        </div>
        <div className='w-full rounded-lg bg-nlw-gradient overflow-hidden mt-8'>
          <div className='bg-[#2A2634] mt-1 py-6 px-8 flex justify-between items-center'>
            <div>
              <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
              <span className='text-zinc-400'>Publique seu anúncio</span>
            </div>
            <button className='bg-violet-500 px-4 py-3 hover:bg-violet-600 text-white rounded-md flex items-center gap-3'>
              <MagnifyingGlassPlus size={24}/>
              Publicar anúncio
            </button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
