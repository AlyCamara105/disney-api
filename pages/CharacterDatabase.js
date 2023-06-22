import CharacterCard from "@/components/CharacterCard";

function CharacterDatabase() {
  return (
    <div className="h-screen">
      <div className="h-[12%]"></div>
      <div className="h-[87%] px-5">
        <div className="h-[95%] flex flex-wrap justify-center overflow-hidden">
          <CharacterCard id="308" />
          <CharacterCard id="308" />
          <CharacterCard id="308" />
          <CharacterCard id="308" />
          <CharacterCard id="308" />
          <CharacterCard id="308" />
        </div>
        <div className="h-[5%]">Turn pages</div>
      </div>
    </div>
  );
}
export default CharacterDatabase;
