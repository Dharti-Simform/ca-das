import React from "react";
import { useTranslation } from "react-i18next";

import CardLayout, { CardBGType } from "../../layouts/card-layout/CardLayout";

import Card from "../card/Card";

import { ReactComponent as PlusIcon } from "src/assets/icons/plus-icon.svg";

import User2 from "src/assets/avatars/User2.jpg";
import User3 from "src/assets/avatars/User3.png";
import User4 from "src/assets/avatars/User4.png";
import User5 from "src/assets/avatars/User5.png";
import User6 from "src/assets/avatars/User6.png";

import "src/biz-components/dashboard/Dashboard.scss";

const LogoPath = [User2, User3, User4, User5, User6];

// !TO-DO: Whitespace wrap not working
const Projects: React.FC = () => {
  const { t } = useTranslation("Dashboard");

  return (
    <CardLayout
      size="xl"
      bg={CardBGType.grey}
      hideRightBorderRadius={true}
      className="projects-wrapper"
    >
      <h5 className="title_3 grey-font title">{t("project.title")}</h5>
      <div className="grid-container three-col-grid">
        <CardLayout size="lg">
          <Card
            title={t("project.project1")}
            subtitle={t("team.team1")}
            teammateArray={LogoPath}
            teammateCount={9}
          />
        </CardLayout>
        <CardLayout size="lg">
          <Card
            title={t("project.project2")}
            subtitle={t("team.team1")}
            teammateArray={LogoPath}
          />
        </CardLayout>
        <CardLayout size="lg">
          <Card
            title={t("project.project3")}
            subtitle={t("team.team2")}
            teammateArray={LogoPath}
          />
        </CardLayout>
        <CardLayout size="lg">
          <Card
            title={t("project.project4")}
            subtitle={t("team.team1")}
            teammateArray={LogoPath}
          />
        </CardLayout>
        <CardLayout size="lg">
          <Card
            title={t("project.project5")}
            subtitle={t("team.team2")}
            teammateArray={LogoPath}
          />
        </CardLayout>
        <CardLayout
          size="lg"
          bg={CardBGType.grey}
          className="horizontal-flex justify-center add-action-card"
        >
          <PlusIcon width={24} height={24} />
          <span className="title_2">{t("project.addProject")}</span>
        </CardLayout>
      </div>
    </CardLayout>
  );
};

export default Projects;
