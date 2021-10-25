import {
  PieChartOutlined,
  GithubOutlined,
  ImportOutlined,
  FormOutlined,
  CarOutlined,
  EuroCircleOutlined,
} from "@ant-design/icons";
import { Row, Col } from "antd";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  feature: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& svg": {
      height: "8vw",
      width: "8vw",
      maxHeight: 80,
      maxWidth: 80,
    },
    "& > p": {
      textAlign: "center",
      width: "80%",
    },
    "& > h2": {
      marginTop: 8,
    },
  },
});

const Features = (props) => {
  const classes = useStyles();

  return (
    <div id={props.id}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col xs={24} sm={12} md={8}>
          <div className={classes.feature}>
            <PieChartOutlined />
            <h2>Dashboard</h2>
            <p>Track your overall balance private and local</p>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <div className={classes.feature}>
            <GithubOutlined />
            <h2>Open Source</h2>
            <p>No secrets. Coineda is open and available at GitHub</p>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <div className={classes.feature}>
            <ImportOutlined />
            <h2>Imports</h2>
            <p>
              Coineda files, Binance Spot Orders, Kraken and Uphold export
              files. More comming soon!
            </p>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <div className={classes.feature}>
            <FormOutlined />
            <h2>Tracking</h2>
            <p>Clean user interface to add or import transactions</p>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <div className={classes.feature}>
            <CarOutlined />
            <h2>When Lambo</h2>
            <p>
              You don't need to ask anymore. Coineda provides a progress bar
            </p>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <div className={classes.feature}>
            <EuroCircleOutlined />
            <h2>Free to use</h2>
            <p>Add as many transactions as you want for free</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Features;
