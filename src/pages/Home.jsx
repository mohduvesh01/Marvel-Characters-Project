import CharacterList from "./CharactersList";
function Home() {
  return (
    <>
      <div className="homeContent">
        <h1 className="heading">Uncover the World of Movies Characters</h1>
      </div>
      <div className="card-list">
        <CharacterList />
      </div>
    </>
  );
}
export default Home;
