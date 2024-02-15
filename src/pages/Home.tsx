import { LayoutGrid } from "@/components/ui/layout-grid";

const Home = () => {
  return (
    <div className="h-screen py-20 w-full -z-10">
      <LayoutGrid cards={cards} />
    </div>
  );
};
export default Home;

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Digital Dreamscape</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A digital art series exploring surreal landscapes and dreamlike scenes,
        created with cutting-edge digital techniques.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Cinematic Visions</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A series of mixed-media artworks inspired by iconic films and cinematic
        moments, reimagined through the artist's creative lens.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Urban Rhythms</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A series of photography prints showcasing the bustling streets and
        architectural marvels of modern cities.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Echoes of the Past</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Artworks breathe life into the pages of history, sparking curiosity and
        contemplation in those who behold them.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://source.unsplash.com/blue-black-and-orange-abstract-painting-3Sf_G9m0gcQ",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://source.unsplash.com/water-droplets-on-glass-panel-wzkv5p5CIRk",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://source.unsplash.com/floral-persons-portrait-graffiti-fT49QnFucQ8",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://source.unsplash.com/a-painting-of-a-group-of-men-on-horses-5EUh-tq31eA",
  },
];
