import { FireFilled } from "@ant-design/icons";
import { Timeline, Row, Col, Button, Result } from "antd";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  roadmap: {
    paddingTop: 48,
    paddingBottom: 48,
    backgroundColor: "white",
    "& > *": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
});

const Roadmap = (props) => {
  const classes = useStyles();

  return (
    <Row id={props.id} className={classes.roadmap}>
      <Col xs={24} sm={12}>
        <Timeline mode="alternate">
          <Timeline.Item>Kraken import</Timeline.Item>
          <Timeline.Item>Binance import</Timeline.Item>
          <Timeline.Item>Uphold import</Timeline.Item>
          <Timeline.Item>Mobile App</Timeline.Item>
          <Timeline.Item>
            (P2P) Sync between app and desktop client
          </Timeline.Item>
          <Timeline.Item>Customizable dashboard</Timeline.Item>
        </Timeline>
      </Col>
      <Col xs={24} sm={12}>
        <Result
          icon={<FireFilled style={{ color: "#ff9c2c" }} />}
          title="More wishes?"
          subTitle="You can use the issues section on GitHub to request new features, or send a mail to improvements@coineda.io"
          extra={
            <Button
              onClick={() =>
                window.location.assign(
                  "https://github.com/fabianbormann/Coineda/issues/new"
                )
              }
              type="primary"
            >
              Request a feature
            </Button>
          }
        />
      </Col>
    </Row>
  );
};

export default Roadmap;
