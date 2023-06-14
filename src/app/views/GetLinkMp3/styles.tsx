import { makeStyles } from "@mui/styles";

const getLinkMp3Style = makeStyles({
  Input: {
    width: "100%",
    height: "36px",
    padding: "5px 5px 5px 10px",
    borderRadius: "5px",
    border: "none",

    "&:focus": {
      outline: "none",
    },
  },

  Button: {
    width: "100px",
    height: "36px",
    marginTop: "10px !important",
  },

  Song: {
    margin: "10px 0",
    padding: "10px",
    display: "flex",
    alignItems: "flex-start",
    borderRadius: "10px",
    boxShadow:
      "rgb(6 24 44 / 40%) 0px 0px 0px 2px, rgb(6 24 44 / 65%) 0px 4px 6px -1px, rgb(255 255 255 / 8%) 0px 1px 0px inset",

    "& .image": {
      borderRadius: "5px",
      height: "80px",
      width: "80px",
    },
    "& .info": {
      display: "flex",
      flexDirection: "column",
      marginLeft: "10px",
      padding: "0 5px",
      minWidth: "284px",
      width: "-webkit-fill-available",

      "& .title": {
        color: "rgb(255, 255, 255)",
        fontSize: "20px",
        fontWeight: "700",
        lineHeight: "30px",
        marginBottom: 0,
        textAlign: "left",
        textOverflow: "ellipsis",
        textRendering: "optimizelegibility",
        textTransform: "none",
        userSelect: "none",
        verticalAlign: "top",
        whiteSpace: "nowrap",
        wordBreak: "break-word",
        "-webkit-font-smoothing": "antialiased",
        extOverflow: "ellipsis !important",
        overflowX: "hidden",
        width: "100%",
      },
      "& .arttist": {},
    },
    "& .btn-download": {
      height: "65px",
      width: "65px",
      marginLeft: "auto",
      alignSelf: "center",
    },

    "&:hover": {
      color: "#ffee10",
      boxShadow: "0 0 5px #ffee10",
      textShadow: "0 0 5px #ffee10",
      "&:before": {
        transform: "scale(1.1)",
        boxShadow: "0 0 15px #ffee10",
      },
    },
  },

  SongList: {
    padding: "1.5rem",
    paddingRight: "2px",
    marginTop: "0.25rem",
    maxHeight: "445px",
    overflowY: "scroll",

    "&::-webkit-scrollbar": {
      width: "26px",
      borderRadius: "13px",
      backgroundClip: "padding-box",
      border: "10px solid transparent",
    },

    "&::-webkit-scrollbar-thumb": {
      width: "26px",
      borderRadius: "13px",
      backgroundClip: "padding-box",
      border: "10px solid transparent",
      boxShadow: "inset 0 0 0 10px",
    },
  },
}) as Function;

export default getLinkMp3Style;
