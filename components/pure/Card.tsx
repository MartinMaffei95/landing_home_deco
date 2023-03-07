import Image from 'next/image';

const GoToPostElement = ({
  image,
  imagePlaceholder,
  title,
  direction,
  text,
}: any) => {
  return (
    <div
      className={`font-merw font-light flex bg-neutral-50 rounded shadow-md overflow-hidden duration-100 cursor-pointer hover:brightness-125 ${
        direction === 'landscape'
          ? 'h-[25vh] mx-4 w-full '
          : 'flex-col  basis-[40%] h-[50vh] lg:basis-[20%]  '
      }`}
    >
      {/* TEXT CONTENT */}
      {direction === 'landscape' ? (
        <>
          <div
            className={` overflow-hidden relative  ${
              direction === 'landscape' ? 'basis-4/12' : 'basis-2/3 '
            }`}
          >
            {/* <div className="h-full w-full "> */}
            <Image
              fill
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              alt={'alt'}
              src={image}
              blurDataURL={imagePlaceholder}
              placeholder="blur"
            />
            {/* </div> */}
          </div>
          <div className="flex flex-col basis-8/12 font-noto overflow-hidden">
            <h3 className="p-2 truncate font-bold">{title}</h3>
            <p className=" font-noto font-normal p-2 Elipsis  ">{text}</p>
          </div>
        </>
      ) : direction === 'blocks' ? (
        <>
          <div
            className={` overflow-hidden relative ${
              direction === 'landscape' ? 'basis-4/12' : 'basis-2/3 '
            }`}
          >
            <Image
              fill
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              alt={'alt'}
              src={image}
              blurDataURL={imagePlaceholder}
              placeholder="blur"
            />
          </div>
          <h3 className="basis-1/3 font-noto p-2 Elipsis">{title}</h3>
        </>
      ) : direction === 'blocks_rounded' ? (
        <>
          <div
            className={` overflow-hidden relative ${
              direction === 'landscape' ? 'basis-4/12 ' : 'basis-2/3 '
            } `}
          >
            <Image
              fill
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              alt={'alt'}
              src={image}
              blurDataURL={imagePlaceholder}
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col basis-8/12 font-noto overflow-hidden">
            <h3 className="p-2 truncate font-bold">{title}</h3>
            <p className=" font-noto font-normal p-2 Elipsis  ">{text}</p>
          </div>
        </>
      ) : (
        <h3 className="basis-1/3 font-noto p-2 Elipsis">{title}</h3>
      )}
    </div>
  );
};

export default GoToPostElement;
