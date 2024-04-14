interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'sRNA Analyst',
    description: `Biologists have always been curious about gene regulation mechanisms, 
    such as which proteins are involved in which reactions, the combination of RNAs in which locations, 
    and what outcomes are generated for target genes. This website may provide answers to your questions.`,
    imgSrc: '/static/images/2024/sRNA_Analyst/tools.png',
    href: '/blog/2024/sRNA-Analyst',
  },
  {
    title: 'RNA-seq Analysis Toolkit',
    description: `Since the advent of NGS sequencing technology, research in the field of RNA has been thriving. 
    We have published a series of papers exploring the relationship of small RNA binding and 
    introducing novel perspectives on CLASH and iCLIP experiments.`,
    imgSrc: '/static/images/project/RNA.jpg',
    href: '/blog/the-time-machine',
  },
  {
    title: 'Google Developer Student Club',
    description: `GDSC is a student community founded by Google to encourage students to apply Google technologies. 
    As core members of the NLP Group at NCKU, our main goal is to promote the use of natural language processing in 
    TensorFlow and PyTorch. We aim to create applications such as document summarization and ChatBot.`,
    imgSrc: '/static/images/project/GDSC.jpg',
    href: '/blog/the-time-machine',
  },
  {
    title: 'Seed Project: Canada Alpine Training',
    description: `In 2023, a group of young people went to Canada for an one-month alpine climbing training, 
    including snow, rock, and ice climbing skills. Thanks to the sponsorship and selection by Taiwan Climbing 
    & Mountaineering Alliance, our horizons are gradually expanding.`,
    imgSrc: '/static/images/project/Canada.jpg',
    href: 'https://www.google.com',
  },
  {
    title: 'Industry-Academia Collaboration: Internal Website Infrastructure',
    description: `This project will assist a company in Taiwan with its internal transformation, 
    moving its AWS website to servers. It involves planning several Linux servers for load balancing and 
    database read-write separation, as well as redesigning the website's front-end and back-end architecture.`,
    imgSrc: '/static/images/project/web_infra.jpg',
    href: '/blog/the-time-machine',
  },
  {
    title: 'VBA Macros Attack and Defence',
    description: `Even today, many companies and government agencies continue to use macros in Word and Excel. 
    However, macros can pose significant security risks. This project will explore and implement potential 
    hacking techniques and defense mechanisms.`,
    imgSrc: '/static/images/project/hacker.jpg',
    href: '/blog/the-time-machine',
  },
  {
    title: 'COVID-19 Image Recognition Application',
    description: `Due to the critical issue of COVID-19, we aim to utilize image recognition and AI 
    technology to assess the likelihood of illness from CT scans. Additionally, we are conducting some 
    interesting analyses related to whether people are correctly wearing masks based on facial recognition.`,
    imgSrc: '/static/images/project/COVID-19.jpg',
    href: '/blog/the-time-machine',
  },
  {
    title: 'Smart Dumbbell Chip Development',
    description: `To address the issue of muscular dystrophy, we collaborated with the Industrial Design 
    Department to develop a smart dumbbell that can detect whether the movements of rehabilitation patients 
    are correct. This project was part of the 'Dreams Come True' initiative and we successfully presented 
    our paper in Indonesia.`,
    imgSrc: '/static/images/project/dumbbell.png',
    href: '/blog/the-time-machine',
  },
  {
    title: 'JAM: Integrated Club Management Platform',
    description: `Based on the needs of our club management, we wanted a platform that could integrate a 
    shared calendar, cloud storage, photo albums, and a voting system in one place. That's how JAM was born.`,
    imgSrc: '/static/images/project/JAM.png',
    href: '/blog/the-time-machine',
  },
  {
    title: 'Guide and Tour Commentary System',
    description: `Find Deqingxi is a mobile web app that integrates local culture and provides guided 
    services for the surroundings of Deqingxi. It allows users to navigate through the past and present maps, 
    interact with physical guides, and leave comments.`,
    imgSrc: '/static/images/project/Deqingxi.png',
    href: '/blog/the-time-machine',
  },
  {
    title: 'Resonant Circuits for Wireless Power Transfer',
    description: `This project primarily explores the WPT in short-range communication. 
    It involves using resonant magnetic coupling circuits to facilitate power transfer. The project 
    encompasses the derivation of relevant formulas, coil model design, and analysis, with a particular 
    focus on the phenomenon of frequency splitting.`,
    imgSrc: '/static/images/project/WPT.jpg',
    href: '/blog/the-time-machine',
  },
  {
    title: 'Buck Converter for Energy Harvesting',
    description: `Exploration of the conversion mechanism of the DC-DC converter in Energy Light Harvesting System. 
    To address the shortcomings of traditional linear converters, the utilization of switch circuits and 
    energy storage components for voltage conversion is employed to reduce energy loss. Additionally, there is a focus on minimizing noise levels in component design.`,
    imgSrc: '/static/images/project/solar_panel.png',
    href: '/blog/the-time-machine',
  },
  {
    title: 'Poker Card Big Two Playing Robot',
    description: `Feel like you're not good at playing Big Two? Give this card-playing robot a try. 
    It might not play better than you, but at least it can give you a break.`,
    imgSrc: '/static/images/project/Big2.png',
    href: '/blog/the-time-machine',
  },
  {
    title: 'Lightweight RPG Adventure Game',
    description: `I created a simple RPG game using Java, where you can play as a thief, a monk, 
    or a bard to explore this world and build your own cottage by accumulating assets.`,
    imgSrc: '/static/images/project/RPG.png',
    href: 'https://github.com/RyanCCJ/Light-RPG',
  },
]

export default projectsData
