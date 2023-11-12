import React from "react";
import { useTranslation } from "react-i18next";

import CardLayout, { CardBGType } from "../../layouts/card-layout/CardLayout";

import Card from "../card/Card";

import { ReactComponent as TeamOne } from "src/assets/images/Team1.svg";
// !TO-DO: Team2 profile not updating
import { ReactComponent as TeamTwo } from "src/assets/images/Team2.svg";
import { ReactComponent as PlusIcon } from "src/assets/icons/plus-icon.svg";

import "src/biz-components/dashboard/Dashboard.scss";
import { TEAMS_LOGO } from "src/utils/data";

const Teams: React.FC = () => {
  const { t } = useTranslation("Dashboard");

  return (
    <CardLayout
      size="xl"
      bg={CardBGType.grey}
      hideRightBorderRadius={true}
      className="teams-wrapper"
    >
      <h5 className="title_3 grey-font title">{t("team.title")}</h5>
      <div className="grid-container three-col-grid">
        <CardLayout size="lg">
          <Card
            title={t("team.team1")}
            subtitle={t("team.members", { count: 30 })}
            logo={<TeamOne width={40} height={40} />}
            teammateArray={TEAMS_LOGO}
            teammateCount={9}
          />
        </CardLayout>
        <CardLayout size="lg">
          <Card
            title={t("team.team2")}
            subtitle={t("team.members", { count: 30 })}
            logo={<TeamTwo width={40} height={40} />}
            teammateArray={TEAMS_LOGO}
          />
        </CardLayout>
        <CardLayout
          size="lg"
          bg={CardBGType.grey}
          className="horizontal-flex justify-center add-action-card"
        >
          <PlusIcon width={24} height={24} />
          <span className="title_2">{t("team.addTeam")}</span>
        </CardLayout>
      </div>
    </CardLayout>
  );
};

export default Teams;
