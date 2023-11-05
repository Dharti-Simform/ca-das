import React from "react";
import { useTranslation } from "react-i18next";

import PrivateLayout from "src/layouts/private-layout/PrivateLayout";
import CardLayout, { CardBGType } from "../../layouts/card-layout/CardLayout";

import Card from "../card/Card";

import { ReactComponent as TeamOne } from "src/assets/images/Team1.svg";
import { ReactComponent as TeamTwo } from "src/assets/images/Team2.svg";
import { ReactComponent as PlusIcon } from "src/assets/icons/plus-icon.svg";

import User2 from "src/assets/avatars/User2.jpg";
import User3 from "src/assets/avatars/User3.png";
import User4 from "src/assets/avatars/User4.png";
import User5 from "src/assets/avatars/User5.png";
import User6 from "src/assets/avatars/User6.png";

import "src/biz-components/dashboard/Dashboard.scss";

const PathOne = [User2, User3, User4, User5, User6];

const Dashboard: React.FC = () => {
  const { t } = useTranslation("Dashboard");

  return (
    <PrivateLayout>
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
              logo={<TeamOne width={40} height={40} className="team-profile" />}
              teammateArray={PathOne}
            />
          </CardLayout>
          <CardLayout size="lg">
            <Card
              title={t("team.team2")}
              subtitle={t("team.members", { count: 30 })}
              logo={<TeamTwo width={40} height={40} className="team-profile" />}
              teammateArray={[]}
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
    </PrivateLayout>
  );
};

export default Dashboard;
