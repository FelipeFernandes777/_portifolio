import { IoMdContact, IoMdHome } from "react-icons/io";
import { VscCode } from "react-icons/vsc";

import Icons from "../Icons/Icones";
import SubTitle from "../SubTitle/SubTitle";

export default function Navigate() {
  return (
    <div className="navigate_container">
      <nav className="nav_container">
        <div className="sub_title_container">
          <SubTitle subTitle="Felipe " subTextColor="Fernandes" />
        </div>
        <div className="navigate_icons_container">
          <Icons href="#projetos" text="Projetos" icons={<VscCode />} />
          <Icons href="#sobre" text="Home" icons={<IoMdHome />} />
          <Icons href="#contato" text="Contato" icons={<IoMdContact />} />
        </div>
      </nav>
    </div>
  );
}
