import Image from 'next/image';

const Header = () => {
  return (
    <header className="header-style flex justify-between items-center px-4 z-10">
      <div className="h-10 w-24  flex justify-center items-center">
        <div className="h-12 w-12 relative">
          <Image fill src="/favicon.ico" alt="" />
        </div>
        <p className="font-noto">H&D</p>
      </div>
      <button
        className="font-noto text-neutral-100 font-semibold text-lg tracking-wide border-2 rounded-full py-1 px-2 border-neutral-200
            cursor-pointer hover:brightness-125
          "
      >
        Cooming Soon!
      </button>
    </header>
  );
};

export default Header;
