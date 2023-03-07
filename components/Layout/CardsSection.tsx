import CardsContainer from '../container/CardsContainer';

const CardsSection = ({ content, title, title_sx, layoutType }: any) => {
  return (
    <div className="flex flex-col w-screen bg-neutral-300 x-space-none py-5">
      <p
        className={`span-text font-extralight text-2xl text-center mb-5
         ${title_sx ? title_sx : ''}`}
      >
        {title}
      </p>
      {layoutType === 'includes_text' ? (
        <CardsContainer
          direction="landscape"
          layoutType={layoutType}
          content={content}
        />
      ) : layoutType === 'only_title' ? (
        <CardsContainer
          direction="blocks"
          layoutType={layoutType}
          content={content}
        />
      ) : layoutType === 'includes_text_rounded' ? (
        <CardsContainer
          direction="blocks_rounded"
          layoutType={layoutType}
          content={content}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default CardsSection;
