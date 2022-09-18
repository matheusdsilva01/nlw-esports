import { MagnifyingGlassPlus } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';

const BannerCreateAd = () => {
  return (
    <div className="w-full rounded-lg bg-nlw-gradient overflow-hidden mt-8">
      <div className="bg-[#2A2634] mt-1 py-6 px-8 flex justify-between items-center">
        <div>
          <strong className="text-2xl text-white font-black block">
            Não encontrou seu duo?
          </strong>
          <span className="text-zinc-400">Publique seu anúncio</span>
        </div>
        <Dialog.Trigger className="bg-violet-500 px-4 py-3 hover:bg-violet-600 text-white rounded-md flex items-center gap-3">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  );
};

export default BannerCreateAd;
