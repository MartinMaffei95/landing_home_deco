import Card from '../pure/Card';

const CardsContainer = ({ direction, content, layoutType }: any) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {layoutType === 'includes_text' ? (
        //render cards with text
        content?.map((c: any, i: any) => (
          <Card
            key={i}
            direction={direction}
            title={c?.title}
            text={c.text}
            image={c?.src}
            imagePlaceholder={c?.placeholder_src}
          />
        ))
      ) : layoutType === 'only_title' ? (
        //render cards without text
        content?.map((c: any, i: any) => (
          <Card
            key={i}
            direction={direction}
            title={c?.title}
            image={c?.src}
            imagePlaceholder={c?.placeholder_src}
          />
        ))
      ) : layoutType === 'includes_text_rounded' ? (
        //render cards without text
        content?.map((c: any, i: any) => (
          <Card
            key={i}
            direction={direction}
            title={c?.title}
            text={c?.text}
            image={c?.src}
            imagePlaceholder={c?.placeholder_src}
          />
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default CardsContainer;
