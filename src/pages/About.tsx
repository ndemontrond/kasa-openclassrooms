import DropDownAnimation from '../components/dropdownanimation2.tsx';

import '../styles/about.scss'




const About = () => {
  return (
    <main>
      <div className='background' />
      <h2>About</h2>
      <p>This is the about page content.</p>
      <section>
        <h3>Test section</h3>
      </section>
      <DropDownAnimation>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod placeat iure praesentium ab, ipsum necessitatibus! Est, molestias eveniet, sunt ducimus velit reiciendis similique mollitia totam quae nostrum veniam cupiditate fugiat?</p>
      </DropDownAnimation>
    </main>
  );
};

export default About;