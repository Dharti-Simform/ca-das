import React from "react";
import CardLayout, { CardBGType } from "../../layouts/card-layout/CardLayout";
import { useTranslation } from "react-i18next";

import { ReactComponent as TeamLogo } from "src/assets/images/Team1.svg";
import { ReactComponent as PlusIcon } from "src/assets/icons/plus-icon.svg";
// import { ReactComponent as DotIcon } from "src/assets/icons/dot.svg";
import "src/biz-components/sidebar/Sidebar.scss";

const Teams: React.FC = () => {
  const { t } = useTranslation("Sidebar");

  return (
    <div className="team-wrapper">
      <h5 className="title_3 grey-font">{t("team.teams")}</h5>
      <CardLayout
        bg={CardBGType.grey}
        className="horizontal-flex team"
        size="md"
      >
        <div className="team-logo">
          <TeamLogo width={40} height={40} />
          {/* <div className="dot">
            <DotIcon height={8} width={8} />
          </div> */}
        </div>
        <div>
          <h5 className="title_2">{t("team.team1.title")}</h5>
          <div className="title_4 grey-font">{t("team.team1.handle")}</div>
        </div>
      </CardLayout>
      <CardLayout
        size="sm"
        bg={CardBGType.grey}
        className="horizontal-flex justify-center add-action-card"
      >
        <PlusIcon width={24} height={24} />
        <span className="title_2">{t("team.addNewTeam")}</span>
      </CardLayout>
    </div>
  );
};

export default Teams;
