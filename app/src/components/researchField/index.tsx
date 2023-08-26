import { DivIconSearch, DivResearch } from "./styles";
import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";

export default function ResearchField() {
  const [search, setSearch] = useState(false);

  return (
    <DivResearch>
      {search && <input type="text" placeholder="Search" />}
      <DivIconSearch onClick={() => setSearch(!search)}>
        <MagnifyingGlass size={20} color="#ffffff" weight="bold" />
      </DivIconSearch>
    </DivResearch>
  );
}
