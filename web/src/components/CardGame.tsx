interface CardGameProps {
  src: string;
  name: string;
  numberAds: number;
}

const CardGame = ({ name, numberAds, src }: CardGameProps) => {
  return (
    <a
      href=""
      className="relative rounded-lg overflow-hidden hover:-translate-y-4 ease-in-out duration-150"
    >
      <img src={src} alt="" />
      <div className="w-full pt-16 pb-4 px-4 bg-black-gradient absolute bottom-0 left-0">
        <strong className="font-bold text-white">{name}</strong>
        <span className="text-zinc-300 text-sm block mt-1">
          {numberAds} anúncio(s)
        </span>
      </div>
    </a>
  );
};

export default CardGame;
