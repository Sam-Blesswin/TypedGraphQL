import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_GAME, GET_GAMES } from "../queries";

interface GamesType {
  id: string;
  platform: string[];
  title: string;
}

const GameDetails: React.FC<{ gameId: string }> = ({ gameId }) => {
  //const { loading, error, data, refetch }
  const { loading, error, data } = useQuery(GET_GAME, {
    variables: { gameId: gameId },
    //fetchPolicy: "network-only", //always hit server; instead of checking cache
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  //refetch(); //To refetch data from server

  console.log(data.game);

  return (
    <>
      <h3>title: {data.game.title}</h3>
      <div>
        Platform:
        {data.game.platform.map((pf: string, idx: number) => (
          <p key={idx}>{pf}</p>
        ))}
      </div>
    </>
  );
};

export const DisplayGames: React.FC = () => {
  //Apollo Client automatically tracks a query's loading and error states
  const { loading, error, data } = useQuery(GET_GAMES, {
    fetchPolicy: "network-only",
  });
  const [selectedGameId, setSelectedGameId] = useState<string>("1");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data.getGames);

  return (
    <div>
      <select name="game" onChange={(e) => setSelectedGameId(e.target.value)}>
        {data.getGames.map((game: GamesType) => (
          <option key={game.id} value={game.id}>
            {game.title}
          </option>
        ))}
      </select>
      {selectedGameId && <GameDetails gameId={selectedGameId} />}
    </div>
  );
};
