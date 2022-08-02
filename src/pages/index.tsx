import { NextPage } from 'next';
import { LandingPage } from '../ui/landing/LandingPage';
import { ProjectDisplay } from '../ui/projects/ProjectDisplay';

const HomePage: NextPage = () => {
  // return (
  //   <ProjectDisplay
  //     projects={[
  //       {
  //         name: 'Greenway',
  //         description:
  //           'A fast and interactive way to learn about the manufacturing of your belongings, and what the you can do to reduce your footprint.',
  //         imgSrc: 'https://crhsidea.org/static/images/Greenway.jpg',
  //         competitionName: 'Silicon Valley Hacks',
  //         date: new Date(),
  //         awardName: 'Best Climate Change Hack',
  //         won: true,
  //       },
  //       {
  //         name: 'Bot Dilemma',
  //         description:
  //           'A fast and interactive way to learn about the manufacturing of your belongings, and what the you can do to reduce your footprint.',
  //         imgSrc: 'https://crhsidea.org/static/images/Greenway.jpg',
  //         competitionName: 'Something Hacks',
  //         date: new Date(),
  //         awardName: 'Best Hack for Something',
  //         won: true,
  //       },
  //     ]}
  //   />
  // );

  return <LandingPage />;
};

export default HomePage;
