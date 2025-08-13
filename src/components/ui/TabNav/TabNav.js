import React from "react";
import { useNavigate } from "react-router-dom";
import { TabContainer, TabButton } from "./styled";

const TabNav = ({ activeTab }) => {
  const navigate = useNavigate();

  return (
    <TabContainer>
      <TabButton
        $isActive={activeTab === "work"}
        onClick={() => navigate("/trabalhe-conosco")}
      >
        Trabalhe Conosco
      </TabButton>
      <TabButton
        $isActive={activeTab === "contact"}
        onClick={() => navigate("/contato")}
      >
        Fale Conosco
      </TabButton>
    </TabContainer>
  );
};

export default TabNav;
