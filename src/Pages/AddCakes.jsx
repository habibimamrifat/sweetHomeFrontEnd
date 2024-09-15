import React, { useContext } from "react";
import AddACakeForm from "../SharedComponents/AddACakeForm";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../PrivateRoute/PrivateRout";

const AddCakes = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const gatheredCakeData = async (cakeInfo) => {
    console.log("parents", cakeInfo);
    const req = await fetch(
      "https://sweet-home-back-69klmy8j5-habib-imams-projects.vercel.app/baker/addnewcake",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cakeInfo),
      }
    );
    const result = await req.json();
    // console.log(result)
    if (result.insertedId) {
      navigate(`/bakerhome/allCakes/${user.shopId}`);
    } else {
      alert("adding cake failed");
    }
  };

  return (
    <div className="h-full w-full overflow-scroll pb-[200px]">
      <AddACakeForm fireOnSubmit={gatheredCakeData} />
    </div>
  );
};

export default AddCakes;
