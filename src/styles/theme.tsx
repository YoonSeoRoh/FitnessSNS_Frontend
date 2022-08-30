export interface ThemeProps {
  [key: string]: string | object;
}

export const theme: ThemeProps = {
  bgColor: "#f0f3f8",
  mainColor: "#68F7CC",
  fontBlack: "#333",
  fontGray: "#666",
  fontWhite: "#fff",

  wrapper: {
    width: "100%",
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
  },

  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  flexBetween: {
    display: "flex",
    justifyContent: "space-between",
  },

  positionRelativeTop: {
    position: "relative",
    top: 0,
    left: 0,
  },

  positionRelativeCenter: {
    position: "relative",
    top: "50%",
    left: "50%",
    trasnform: "translate(-50%, -50%)",
  },

  positionAbsoluteTop: {
    position: "absolute",
    top: 0,
    left: 0,
  },

  positionAbsoluteCenter: {
    position: "absolute",
    top: "50%",
    left: "50%",
    trasnform: "translate(-50%, -50%)",
  },
};
