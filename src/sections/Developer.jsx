import { Row, Col } from "antd";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  developer: {
    "& > *": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  image: {
    width: "25vw",
    height: "25vw",
    borderRadius: "50%",
    maxWidth: 256,
    maxHeight: 256,
  },
  text: {
    "& > *": {
      maxWidth: "80vw",
      "@media screen and (min-width: 634px)": {
        maxWidth: "30vw",
      },
    },
  },
});

const Developer = (props) => {
  const classes = useStyles();

  return (
    <div id={props.id}>
      <Row justify="space-around" className={classes.developer}>
        <Col xs={24} sm={12}>
          <img
            className={classes.image}
            src="fabian.jpg"
            alt="frontal shot of fabian"
          />
        </Col>
        <Col className={classes.text} xs={24} sm={12}>
          <h1>It's me, Fabian!</h1>
          <p>
            Computer Science is my life! That's why I'm developing full stack
            Software every day at my job or/and in my spare time. Only my kids
            and family are able stop me. If you want to see another project that
            I'm working on please checkout{" "}
            <a href="https://battlechoc.com">battlechoc</a>.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Developer;
