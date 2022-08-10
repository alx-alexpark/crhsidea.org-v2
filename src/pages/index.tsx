import { NextPage } from 'next';
import { Parallax } from 'react-scroll-parallax';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { LandingPage } from '../ui/landing/LandingPage';
import { Project, ProjectDisplay } from '../ui/projects/ProjectDisplay';

const projects: Project[] = [
  {
    name: 'Greenway',
    description:
      'A fast and interactive way to learn about the manufacturing of your belongings, and what the you can do to reduce your footprint.',
    imgSrc: 'https://crhsidea.org/static/images/Greenway.jpg',
    competitionName: 'Silicon Valley Hacks',
    date: new Date(),
    awardName: 'Best Climate Change Hack',
    won: true,
    competitionURL: 'https://siliconvalleyhacks.devpost.com/',
  },
  {
    name: 'Bot Dilemma',
    description: 'An interactive, creative, and original way to hangout and chat online. ',
    imgSrc:
      'https://camo.githubusercontent.com/771c9a5a781a874dc48661ef0727bf9e1f78b987cf2618ad3488d7825e271232/68747470733a2f2f6368616c6c656e6765706f73742d73332d6368616c6c656e6765706f73742e6e6574646e612d73736c2e636f6d2f70686f746f732f70726f64756374696f6e2f736f6674776172655f70686f746f732f3030312f3130392f3438332f64617461732f67616c6c6572792e6a7067',
    competitionName: 'Oxford Digithon',
    date: new Date(),
    won: false,
    competitionURL: 'https://oxford-digithon.devpost.com/',
  },
  {
    name: 'HealthID',
    description: 'An all-in-one health tracker with a unique passport to personal health.',
    competitionName: 'Hack the Northeast: Beyond',
    imgSrc:
      'https://camo.githubusercontent.com/c1e6e6a5cd6aa6fb170445d792f5791837ba7e3e6bde0be46099af73e15da630/68747470733a2f2f6368616c6c656e6765706f73742d73332d6368616c6c656e6765706f73742e6e6574646e612d73736c2e636f6d2f70686f746f732f70726f64756374696f6e2f736f6674776172655f70686f746f732f3030312f3335342f3231312f64617461732f67616c6c6572792e6a7067',
    awardName: 'Best UI/UX Design',
    won: true,
    competitionURL: 'https://hack-the-northeast-beyond.devpost.com/',
    date: new Date(),
  },
  {
    name: 'Memory Notes',
    description: "An app that helps those with Alzheimer's by tying memories to music.",
    competitionName: 'RowdyHacks 2020',
    awardName: 'Best use of Google Cloud and Twillio',
    imgSrc:
      'https://camo.githubusercontent.com/5383b601f890ec9c6db8c3e988cea0e551b550126e3c6861f217758a1088d9b8/68747470733a2f2f6368616c6c656e6765706f73742d73332d6368616c6c656e6765706f73742e6e6574646e612d73736c2e636f6d2f70686f746f732f70726f64756374696f6e2f736f6674776172655f70686f746f732f3030302f3938392f3432372f64617461732f67616c6c6572792e6a7067',
    won: true,
    competitionURL: 'https://rowdyhacks2020.devpost.com/',
    date: new Date(),
  },
  {
    name: 'Climate Change Central',
    description: 'A beautiful app to visualize and inform others about climate change.',
    awardName: '1st place',
    imgSrc:
      'https://camo.githubusercontent.com/3efbaea6db3dabbf21790b10f0ea663edeb8e628045e7142ff6693a93a8bd113/68747470733a2f2f6368616c6c656e6765706f73742d73332d6368616c6c656e6765706f73742e6e6574646e612d73736c2e636f6d2f70686f746f732f70726f64756374696f6e2f736f6674776172655f70686f746f732f3030302f3839322f3439302f64617461732f67616c6c6572792e6a7067',
    competitionName: 'INVENTATHON@HCC',
    date: new Date(),
    awardName: 'Best Climate Change Hack',
    won: true,
    competitionURL: 'https://inventathonhcc.devpost.com/',
  },
  {
    name: 'Green Quest',
    description: 'An app that turns cleaning into a game like Pokemon Go',
    imgSrc:
      'https://camo.githubusercontent.com/83159c7c5ad23c26b2199fc408a527c951120ba5eff32055f5cb9ef0e4625b8a/68747470733a2f2f6368616c6c656e6765706f73742d73332d6368616c6c656e6765706f73742e6e6574646e612d73736c2e636f6d2f70686f746f732f70726f64756374696f6e2f736f6674776172655f70686f746f732f3030302f3938332f3837352f64617461732f67616c6c6572792e6a7067',
    competitionName: 'Wacode',
    date: new Date(),
    awardName: 'Experienced Bracket - 2nd Place',
    won: true,
    competitionURL: 'https://wacode.devpost.com/',
  },
  {
    name: 'SkillQuest',
    description:
      'Beat quarantine boredom by learning new skills while competing against your friends',
    imgSrc:
      'https://camo.githubusercontent.com/f8105c853f02940e9a45f9799cc34596ffdfd2be0c7867e0cdf7902a84726227/68747470733a2f2f6368616c6c656e6765706f73742d73332d6368616c6c656e6765706f73742e6e6574646e612d73736c2e636f6d2f70686f746f732f70726f64756374696f6e2f736f6674776172655f70686f746f732f3030312f3033302f3636392f64617461732f67616c6c6572792e6a7067',
    competitionName: 'Titan Hacks',
    date: new Date(),
    awardName: '3rd Place',
    won: true,
    competitionURL: 'https://titanhacks.devpost.com/',
  },
  {
    name: 'Cultivate',
    description: 'Taking "farmer\'s market" to a virtual and accessible level',
    imgSrc:
      'https://camo.githubusercontent.com/cf35e92af014c23771e04bac4e31d1d14fc7e278f04f576e85c448aea5629e13/68747470733a2f2f6368616c6c656e6765706f73742d73332d6368616c6c656e6765706f73742e6e6574646e612d73736c2e636f6d2f70686f746f732f70726f64756374696f6e2f736f6674776172655f70686f746f732f3030312f3037302f3539362f64617461732f67616c6c6572792e6a7067',
    competitionName: 'EarthxHack 2020',
    date: new Date(),
    won: false,
    competitionURL: 'https://earthxhack20.devpost.com/',
  },
  {
    name: 'Project Prayer',
    description: 'Cover the streets with prayer',
    imgSrc:
      'https://camo.githubusercontent.com/b57b98d779a84252691d1ca4d4c616dc542f8eaec088f4f03853b8703dc12119/68747470733a2f2f6368616c6c656e6765706f73742d73332d6368616c6c656e6765706f73742e6e6574646e612d73736c2e636f6d2f70686f746f732f70726f64756374696f6e2f736f6674776172655f70686f746f732f3030312f3030392f3839312f64617461732f67616c6c6572792e6a7067',
    competitionName: 'COVID-19 Global Church Hackathon',
    date: new Date(),
    won: false,
    competitionURL: 'https://covidhack.devpost.com/',
  },
  {
    name: 'Outreach',
    description: 'Discover volunteering opportunities for Nonprofit Organizations with Outreach!',
    imgSrc:
      'https://camo.githubusercontent.com/956d72a0d745df7d26dd27b093ba1cd1896beee00392b285f79f5817f5df97ec/68747470733a2f2f692e696d6775722e636f6d2f6a616574714b722e706e67',
    competitionName: 'Explore Hacks',
    date: new Date(),
    awardName: 'Runner Ups',
    won: true,
    competitionURL: 'https://explorehacks.devpost.com/',
  },
  {
    name: 'SharePlane',
    description: 'Taking Uber into the 3rd dimension! 🛩️',
    imgSrc:
      'https://upload.wikimedia.org/wikipedia/commons/a/ae/Cessna_172S_Skyhawk_SP%2C_Private_JP6817606.jpg',
    competitionName: 'TAMUHACK',
    date: new Date(),
    won: false,
    competitionURL: 'https://tamuhack2022.devpost.com/',
  },
];

const HomePage: NextPage = () => {
  const disableParallax = useMediaQuery('(max-width: 768px)');

  if (disableParallax) {
    return (
      <>
        <LandingPage />
        <ProjectDisplay projects={projects} />
      </>
    );
  }

  return (
    <>
      <Parallax speed={-50}>
        <LandingPage />
      </Parallax>
      <Parallax speed={15}>
        <ProjectDisplay projects={projects} />
      </Parallax>
    </>
  );
};

export default HomePage;
