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
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  //refetch(); //To refetch data from server

  console.log(data.game);

  return (
    <>
      <h3>title: {data.game.title}</h3>
      <p>
        Platform:
        {data.game.platform.map((pf: string) => (
          <p>{pf}</p>
        ))}
      </p>
    </>
  );
};

export const DisplayGames: React.FC = () => {
  //Apollo Client automatically tracks a query's loading and error states
  const { loading, error, data } = useQuery(GET_GAMES);
  const [selectedGameId, setSelectedGameId] = useState<string>("1");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data.getGames);

  return (
    <div>
      <h2>Games</h2>
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
