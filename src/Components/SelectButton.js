const SelectButton = ({ children, selected, onClick }) => {
//   const useStyles = makeStyles({
//     selectbutton: {
//       border: "1px solid gold",
//       borderRadius: 5,
//       padding: 10,
//       paddingLeft: 20,
//       paddingRight: 20,
//       fontFamily: "Montserrat",
//       cursor: "pointer",
//       backgroundColor: selected ? "gold" : "",
//       color: selected ? "black" : "",
//       fontWeight: selected ? 700 : 500,
//       "&:hover": {
//         backgroundColor: "gold",
//         color: "black",
//       },
//       width: "22%",
//       //   margin: 5,
//     },
//   });

//   const classes = useStyles();

  return (
    <span onClick={onClick} style={{
      border: "1px solid gold",
      borderRadius: 5,
      padding: 10,
      paddingLeft: 20,
      paddingRight: 20,
      fontFamily: "Montserrat",
      cursor: "pointer",
      backgroundColor: selected ? "gold" : "",
      color: selected ? "black" : "",
      fontWeight: selected ? 700 : 500,
      width: "22%",
    }}>
      {children}
    </span>
  );
};

export default SelectButton;