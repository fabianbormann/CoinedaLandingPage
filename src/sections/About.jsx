import { Button, Carousel, Select, Space, Row, Col, Alert, Tag } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { createUseStyles } from "react-jss";
import { useState } from "react";

const { Option } = Select;

const useStyles = createUseStyles({
  about: {
    fontSize: "1.1rem",
    padding: 24,
    "& .slick-dots li button": {
      backgroundColor: "#000",
      width: 12,
      height: 12,
      borderRadius: "50%",
    },
    "& .slick-dots li.slick-active ": {
      width: 16,
      "& button": {
        backgroundColor: "#333",
        width: 12,
        height: 12,
        borderRadius: "50%",
      },
    },
  },
  preview: {
    height: "fit-content",
    boxShadow: "1px 1px 9px #666",
  },
  download: {
    marginTop: 6,
    "& .ant-select-selector": {
      padding: "0 0.3rem !important",
      color: "#03A678",
    },
  },
  info: {
    fontSize: "0.8rem",
  },
});

const About = () => {
  const classes = useStyles();

  const estimateOperatingSystem = () => {
    const userAgent = window.navigator.userAgent;

    let operatingSystem = "macosx";

    if (userAgent.indexOf("Win") !== -1) operatingSystem = "windows";
    else if (userAgent.indexOf("Linux") !== -1) operatingSystem = "linux";
    else if (userAgent.indexOf("Android") !== -1) operatingSystem = "android";
    else if (userAgent.indexOf("like Mac") !== -1) operatingSystem = "ios";

    return operatingSystem;
  };

  const [selectedPlatform, setSelectedPlatform] = useState(
    estimateOperatingSystem()
  );

  const startDownload = () => {
    if (selectedPlatform === "windows") {
      window.location.assign(
        "https://github.com/fabianbormann/Coineda/releases/download/v0.1.4/coineda-Setup-0.1.4.exe"
      );
    } else if (selectedPlatform === "linux") {
      window.location.assign(
        "https://github.com/fabianbormann/Coineda/releases/download/v0.1.4/coineda-0.1.4.AppImage"
      );
    } else if (selectedPlatform === "linux-deb") {
      window.location.assign(
        "https://github.com/fabianbormann/Coineda/releases/download/v0.1.4/coineda_0.1.4_amd64.deb"
      );
    } else if (selectedPlatform === "osx") {
      window.location.assign(
        "https://github.com/fabianbormann/Coineda/releases/download/v0.1.4/coineda-Setup-0.1.4.exe"
      );
    }
  };

  return (
    <div className={classes.about}>
      <Row gutter={[32, 32]}>
        <Col xs={24} md={12}>
          <Carousel className={classes.preview}>
            <img src="screens/dashboard.png" alt="dashboard" />
            <img src="screens/tracking.png" alt="tracking" />
            <img src="screens/tax.png" alt="tax" />
            <img src="screens/settings.png" alt="settings" />
          </Carousel>
        </Col>
        <Col xs={24} md={12}>
          <p>
            Coineda amins to be a <b>free</b>, plattform independent,{" "}
            <b>local</b> running and <b>open source</b> crypto <b>tracking</b>{" "}
            tool.
            <br />
            <br />
            It provides a simple <b>tax calculation</b> and shows you realized
            and unrealized gains per year. You do not need to provide your
            tracking exports or transaction history to a central company. Your
            crypto, your data.
          </p>
          <Tag
            style={{ cursor: "pointer" }}
            onClick={() =>
              window.location.assign(
                "https://raw.githubusercontent.com/fabianbormann/Coineda/main/LICENSE"
              )
            }
            color="success"
          >
            AGPL-3.0 License
          </Tag>
          <Space className={classes.download} direction="vertical">
            <span>
              Download Coineda for
              <Select
                value={selectedPlatform}
                onChange={(platform) => setSelectedPlatform(platform)}
                size="large"
                bordered={false}
              >
                <Option value="windows">Windows</Option>
                <Option value="macosx">Mac OS X</Option>
                <Option value="linux-deb">Linux (.deb file)</Option>
                <Option value="linux">Linux (AppImage)</Option>
              </Select>
            </span>
            <Button
              type="primary"
              shape="round"
              size="large"
              onClick={startDownload}
              icon={<DownloadOutlined />}
            >
              {`Download Version 0.1.4`}
            </Button>
            <span className={classes.info}></span>

            <Alert
              message="Coineda does not provide tax, legal or accounting advices. The
                       provided dashboard and rudimentary tax calculations may contain
                       errors, are incorrect for your country or doesn't cover all tax
                       relevant regulations. Those calculations are developed to the best
                       of my knowledge but I'm not a tax export and I do not take any
                       responsibility for incorrect calculations."
              type="warning"
            />
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default About;
