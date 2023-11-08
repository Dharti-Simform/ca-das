import React from "react";
import { useTranslation } from "react-i18next";

import CardLayout, { CardBGType } from "../../layouts/card-layout/CardLayout";

import Card from "../card/Card";

import { ReactComponent as PlusIcon } from "src/assets/icons/plus-icon.svg";

import User2 from "src/assets/avatars/User2.jpg";
import User3 from "src/assets/avatars/User3.png";
import User4 from "src/assets/avatars/User4.png";
import { ReactComponent as AttachmentIcon } from "src/assets/icons/attachment.svg";
import { ReactComponent as ClockIcon } from "src/assets/icons/clock.svg";

import "src/biz-components/dashboard/Dashboard.scss";
import Tag from "../tag/Tag";
import ProgressBar from "../progressbar/ProgressBar";

const LogoPath = [User3, User4, User2];

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
          >
            <>
              <div className="horizontal-flex tag-container">
                <Tag icon={<AttachmentIcon />} text="13" />
                <Tag
                  icon={<ClockIcon height={16} width={16} />}
                  text={t("project.daysLeft", { days: 5 })}
                  color="yellow"
                />
              </div>
              <ProgressBar percentage={80} />
            </>
          </Card>
        </CardLayout>
        <CardLayout size="lg">
          <Card
            title={t("project.project2")}
            subtitle={t("team.team1")}
            teammateArray={LogoPath}
          >
            <>
              <div className="horizontal-flex tag-container">
                <Tag icon={<AttachmentIcon />} text="5" />
                <Tag
                  icon={<ClockIcon height={16} width={16} />}
                  text={t("project.dayLeft", { day: 1 })}
                  color="red"
                />
              </div>
              <ProgressBar percentage={48} />
            </>
          </Card>
        </CardLayout>
        <CardLayout size="lg">
          <Card
            title={t("project.project3")}
            subtitle={t("team.team2")}
            teammateArray={LogoPath}
          >
            <>
              <div className="tag-container">
                <Tag
                  icon={<ClockIcon height={16} width={16} />}
                  text={t("project.daysLeft", { days: 10 })}
                  color="grey"
                />
              </div>
              <ProgressBar percentage={62} />
            </>
          </Card>
        </CardLayout>
        <CardLayout size="lg">
          <Card
            title={t("project.project4")}
            subtitle={t("team.team1")}
            teammateArray={LogoPath}
          >
            <>
              <div className="horizontal-flex tag-container">
                <Tag icon={<AttachmentIcon />} text="7" />
                <Tag
                  icon={<ClockIcon height={16} width={16} />}
                  text={t("project.daysLeft", { days: 10 })}
                  color="grey"
                />
              </div>
              <ProgressBar percentage={23} />
            </>
          </Card>
        </CardLayout>
        <CardLayout size="lg">
          <Card
            title={t("project.project5")}
            subtitle={t("team.team2")}
            teammateArray={LogoPath}
          >
            <>
              <div className="horizontal-flex tag-container">
                <Tag icon={<AttachmentIcon />} text="5" />
                <Tag
                  icon={<ClockIcon height={16} width={16} />}
                  text={t("project.dayLeft", { day: 1 })}
                  color="red"
                />
              </div>
              <ProgressBar percentage={77} />
            </>
          </Card>
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
