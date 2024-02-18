import DropDownAnimation from "../components/dropdownanimation2.tsx";
import BackgroundBanner from "../components/backgroundbanner";

import "../styles/CSS/pages/about.css";

const About = () => {
  return (
    <main>
      <BackgroundBanner />
      <h2>About</h2>
      <p>This is the about page content.</p>
      <section>
        <h3>Test section</h3>
      </section>
      <DropDownAnimation>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod placeat
          iure praesentium ab, ipsum necessitatibus! Est, molestias eveniet,
          sunt ducimus velit reiciendis similique mollitia totam quae nostrum
          veniam cupiditate fugiat?
        </p>
      </DropDownAnimation>
    </main>
  );
};

export default About;
