import { makeStyles } from "@mui/styles";

const NavItemStyles = makeStyles({
  NavItem: {
    "&>div": {
      "&>span": {
        marginTop: "0.25rem",
      },
    },
  },
});
export default NavItemStyles;
