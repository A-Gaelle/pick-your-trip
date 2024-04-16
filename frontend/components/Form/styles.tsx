import styled from "@emotion/styled";

const StyledForm = styled.form(() => ({
  marginTop: 15,

  label: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  span: {
    display: "block",
    paddingBottom: 10,
  },

  "input[type='text'], input[type='email']": {
    padding: 5,
    width: "100%",
  },

  "input[type='checkbox']": {
    marginTop: 5,
    marginRight: 10,
  },
}));

export default StyledForm;
