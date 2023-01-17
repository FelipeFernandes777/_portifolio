import front from "../assets/image/front.png";
import Icons from "../components/Icons/Icones";
import Image from "../components/Image/Image";
import Navigate from "../components/Navigate/Navigate";
import Text from "../components/Text/Text";
import Title from "../components/Title/Title";

import {
  DiCss3,
  DiHtml5,
  DiJsBadge,
  DiLinux,
  DiReact,
  DiSass,
  DiVisualstudio,
  DiWindows,
} from "react-icons/di";

export default function About() {
  return (
    <div className="about_main_content" id="sobre">
      <div className="navigate">
        <Navigate />
      </div>
      <div className="about_container">
        <div className="image_info_container">
          <Image src={front} alt="Foto Pessoal" />
        </div>
        <div className="container_info_text">
          <div className="title_container">
            <Title title="Front-End" title_color=" Developer" />
          </div>
          <div className="text_info_container">
            <Text text="Olá me chamo Felipe Fernandes, tenho 20 anos e sou apaixonado por tecnologia. Estou me especializando em 'Desenvolvimento Web'. Gosto também de ouvir musicas, ler livros, fazer amigos e estudar." />
          </div>
          <div className="icons_info_container">
            <Icons icons={<DiHtml5 />} />
            <Icons icons={<DiCss3 />} />
            <Icons icons={<DiJsBadge />} />
            <Icons icons={<DiSass />} />
            <Icons icons={<DiReact />} />
            <Icons icons={<DiLinux />} />
            <Icons icons={<DiWindows />} />
            <Icons icons={<DiVisualstudio />} />
          </div>
        </div>
      </div>
    </div>
  );
}
