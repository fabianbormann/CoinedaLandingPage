import { Button, Divider } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import { createUseStyles } from "react-jss";
import Features from "./sections/Features";
import Roadmap from "./sections/Roadmap";
import About from "./sections/About";
import Developer from "./sections/Developer";

const useStyles = createUseStyles({
  page: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f0f2f5",
  },
  header: {
    display: "flex",
    flexDirection: "column",
  },
  menu: {
    backgroundColor: "white",
    padding: 16,
    display: "flex",
    alignItems: "center",
  },
  title: {
    display: "flex",
    alignItems: "baseline",
    "& > h2": {
      margin: 0,
      fontWeight: 600,
    },
  },
  logo: {
    height: 32,
    marginRight: 8,
  },
  links: {
    alignSelf: "center",
    fontSize: "1.1rem",
    "& > *": {
      marginLeft: 8,
    },
    "@media screen and (max-width: 634px)": {
      "& button": { display: "none" },
    },
  },
  stretch: {
    flexGrow: 1,
  },
  footer: {
    display: "flex",
    justifyContent: "center",
  },
});

const App = () => {
  const classes = useStyles();

  const jumpTo = (anchor) => {
    window.location = `${window.location.origin}${window.location.pathname}#${anchor}`;
  };

  return (
    <div className={classes.page}>
      <div className={classes.header}>
        <div className={classes.menu}>
          <img src="coineda-logo.svg" alt="logo" className={classes.logo} />
          <div className={classes.title}>
            <h2>Coineda</h2>
          </div>
          <div className={classes.stretch} />
          <div className={classes.links}>
            <Button type="text" onClick={() => jumpTo("features")}>
              Features
            </Button>
            <Button type="text" onClick={() => jumpTo("roadmap")}>
              Roadmap
            </Button>
            <Button type="text" onClick={() => jumpTo("developer")}>
              Developer
            </Button>
            <GithubOutlined />
          </div>
        </div>
        <Divider style={{ marginTop: 0 }} />
      </div>
      <div>
        <About />
        <Divider />
        <Features id="features" />
        <Divider style={{ marginBottom: 0 }} />
        <Roadmap id="roadmap" />
        <Divider style={{ marginTop: 0 }} />
        <Developer id="developer" />
      </div>
      <Divider />
      <div className={classes.footer}>
        <p>Copyright © 2021 Fabian Bormann</p>
      </div>
    </div>
  );
};

export default App;
