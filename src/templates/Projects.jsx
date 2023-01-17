import { DiCss3, DiHtml5, DiJsBadge } from "react-icons/di";
import Card from "../components/Cards/Card";
import Icones from "../components/Icons/Icones";
import Title from "../components/Title/Title";

import Cronometro from "../assets/image/Cronometro.png";
import JogoClicker from "../assets/image/JogoClicker.png";
import Robotron from "../assets/image/RoboTron.png";
import TrocaCor from "../assets/image/Trocador-Cor.png";

export default function Projects() {
  return (
    <div className="projects_main_content" id="projetos">
      <div className="title_container_card">
        <div className="title_container">
          <Title title="Projetos" />
        </div>
      </div>
      <div className="container_card">
        <div className="container_card_center">
          <div className="cards_container">
            <Card
              card_href="https://cronometro-d0cr7ze5p-felipefernandes777.vercel.app/"
              card_src={Cronometro}
              card_alt="Cronometro"
              card_title="Cronometro"
            />
          </div>
          <div className="technologies_card_container">
            <Icones icons={<DiHtml5 />} />
            <Icones icons={<DiCss3 />} />
            <Icones icons={<DiJsBadge />} />
          </div>
        </div>
        <div className="container_card_center">
          <div className="cards_container">
            <Card
              card_href="https://jogoclicker-5uu6entn5-felipefernandes777.vercel.app/"
              card_src={JogoClicker}
              card_alt="jogoClicker"
              card_title="Jogo CLicker"
            />
          </div>
          <div className="technologies_card_container">
            <Icones icons={<DiHtml5 />} />
            <Icones icons={<DiCss3 />} />
            <Icones icons={<DiJsBadge />} />
          </div>
        </div>
        <div className="container_card_center">
          <div className="cards_container">
            <Card
              card_href="https://robotron2000-jbc4zmp93-felipefernandes777.vercel.app/"
              card_src={Robotron}
              card_alt="Robotron"
              card_title="Robotron"
            />
          </div>
          <div className="technologies_card_container">
            <Icones icons={<DiHtml5 />} />
            <Icones icons={<DiCss3 />} />
            <Icones icons={<DiJsBadge />} />
          </div>
        </div>
        <div className="container_card_center">
          <div className="cards_container">
            <Card
              card_href="https://color-change-22d54mlmb-felipefernandes777.vercel.app/"
              card_src={TrocaCor}
              card_alt="TrocaCor"
              card_title="Troca Cor"
            />
          </div>
          <div className="technologies_card_container">
            <Icones icons={<DiHtml5 />} />
            <Icones icons={<DiCss3 />} />
            <Icones icons={<DiJsBadge />} />
          </div>
        </div>
      </div>
    </div>
  );
}
