import React, { FC } from "react";
import { ProfileContainer, AvailabilityContainer } from "./Profile.styles";
import Image from "next/image";
import { User } from "../../../types/user.types";
import Icon from "../../assets/calender.jpeg";
import { Maybe } from "../../../types/utility.types";

const Profile: FC<{ credentials: Maybe<User> }> = ({ credentials }) => {
  return (
    <ProfileContainer>
      <Image
        style={{ borderRadius: "10px" }}
        src={Icon}
        height={30}
        width={30}
      />
      <AvailabilityContainer>
        <div>{credentials?.userName}</div>
        <button style={{ backgroundColor: "teal", cursor: "pointer" }}>
          show availability
        </button>
      </AvailabilityContainer>
    </ProfileContainer>
  );
};

export default Profile;
