import React, { FC } from "react";
import { ProfileContainer, AvailabilityContainer } from "./Profile.styles";
import Image from "next/image";
import { User } from "../../../types/user.types";
import Icon from "../../assets/calender.jpeg";
import { Maybe } from "../../../types/utility.types";
import { StyledButton } from "../../../styles/global.styles";

const Profile: FC<{
  credentials: Maybe<User>;
  toggleAvailability: () => void;
}> = ({ credentials, toggleAvailability }) => {
  return (
    <ProfileContainer>
      <Image
        style={{ borderRadius: "10px" }}
        src={Icon}
        height={30}
        width={30}
      />
      <AvailabilityContainer>
        <div> {credentials?.userName}</div>
        <StyledButton onClick={toggleAvailability}>
          Show Availability
        </StyledButton>
      </AvailabilityContainer>
    </ProfileContainer>
  );
};

export default Profile;
