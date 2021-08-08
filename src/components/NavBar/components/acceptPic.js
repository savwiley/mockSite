//import React, { useState } from "react";
import { AcceptPic } from "../styled.js";

const AcceptFile = (props) => {
  const { image } = props;

  return(
    <AcceptPic>
      <img src={URL.createObjectURL(image[0])} alt="testing" />
    </AcceptPic>
  )
};

export default AcceptFile;