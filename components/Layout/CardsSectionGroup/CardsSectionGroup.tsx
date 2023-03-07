import CardsSection from '@/components/Layout/CardsSection';
import { clients, posts, work } from '@/db/MockDB';

const CardsSectionGroup = () => {
  return (
    <section>
      <CardsSection content={work} title="Our work" layoutType="only_title" />
      <CardsSection
        content={posts}
        title="Our posts"
        layoutType="includes_text"
      />
      <CardsSection
        content={clients}
        title="Happy Costumers!"
        title_sx="bg-yellow-500 py-4"
        layoutType="includes_text_rounded"
      />
    </section>
  );
};

export default CardsSectionGroup;
