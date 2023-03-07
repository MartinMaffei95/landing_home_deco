/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <section>
      <div className="h-40 x-space-none overflow-hidden relative lg:h-60">
        <div className="h-full w-full">
          <Image
            alt={'alt'}
            src={'/img/webp/diseno-interiores-marco-fotos-mesa.webp'}
            fill
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              objectPosition: '50% 60%',
            }}
            blurDataURL={
              'img/compressed/diseno-interiores-marco-fotos-mesa.webp'
            }
            placeholder="blur"
          />
        </div>
      </div>
      <p className="font-merw text-3xl text-center mt-8 lg:text-5xl">
        <span className="font-gloock">Home&Deco</span> is the place to get help
        with your home decorating.
      </p>
      <div className="bg-yellow-400 w-screen x-space-none overflow-hidden my-4">
        <p className="font-merw w-screen px-4 text-center text-xl">
          We'll make sure every detail is perfect and your home looks as
          beautiful as possible!
        </p>
      </div>
      <p className="font-noto text-lg text-center">
        We are a service that helps you transform your space into something
        magnificent.
      </p>

      <p className="font-noto pt-4 text-lg mb-5 text-center">
        Our <span className="span-text">team of decorators</span> can help you
        create the ambience you want, from color convination to material
        convination.
      </p>
    </section>
  );
};

export default Hero;
