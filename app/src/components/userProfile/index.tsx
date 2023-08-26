import { User } from "phosphor-react";
import { DivProfile, DivIconProfile } from "./styles";

export default function UserProfile() {
  return (
    <DivProfile>
      <DivIconProfile>
        <User size={24} color="#ffffff" weight="thin" />
      </DivIconProfile>
    </DivProfile>
  );
}
