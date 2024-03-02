import DropDownAnimation from "../components/dropdownanimation2.tsx";
import BackgroundBanner from "../components/backgroundbanner";

import "../styles/CSS/pages/about.css";

const About = () => {
    return (
        <main>
            <BackgroundBanner />
            <DropDownAnimation title="Fiabilité">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quod placeat iure praesentium ab, ipsum necessitatibus! Est,
                    molestias eveniet, sunt ducimus velit reiciendis similique
                    mollitia totam quae nostrum veniam cupiditate fugiat?
                </p>
            </DropDownAnimation>
            <DropDownAnimation title="Respect">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quod placeat iure praesentium ab, ipsum necessitatibus! Est,
                    molestias eveniet, sunt ducimus velit reiciendis similique
                    mollitia totam quae nostrum veniam cupiditate fugiat?
                </p>
            </DropDownAnimation>
            <DropDownAnimation title="Service">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quod placeat iure praesentium ab, ipsum necessitatibus! Est,
                    molestias eveniet, sunt ducimus velit reiciendis similique
                    mollitia totam quae nostrum veniam cupiditate fugiat?
                </p>
            </DropDownAnimation>
            <DropDownAnimation title="Securité">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quod placeat iure praesentium ab, ipsum necessitatibus! Est,
                    molestias eveniet, sunt ducimus velit reiciendis similique
                    mollitia totam quae nostrum veniam cupiditate fugiat?
                </p>
            </DropDownAnimation>
        </main>
    );
};

export default About;
