import Image from "../components/Image/Image";
import Navigate from "../components/Navigate/Navigate";
import Text from "../components/Text/Text";
import Title from "../components/Title/Title";

export default function About() {
  return (
    <>
      <div className="navigate">
        <Navigate />
      </div>
      <div className="about_container">
        <div className="image_info_container">
          <Image src="#" alt="Foto Pessoal" />
        </div>
        <div className="container_info_text">
          <div className="title_container">
            <Title title="Front-End" title_color=" Developer" />
          </div>
          <div className="text_info_container">
            <Text text="Olá me chamo Felipe Fernandes, tenho 20 anos e sou apaixonado por tecnologia. Estou me especializando em 'Desenvolvimento Web'. Gosto também de ouvir musicas, ler livros, fazer amigos e estudar." />
            {/* <div className="sub_text">
              <Text text="'Quem não sabe oque busca, não identifica oque acha' Immanuel Kant " />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
