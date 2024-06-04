import { useMutation } from "@apollo/client";
import { ADD_GAME } from "../mutations";
import { GET_GAMES } from "../queries";
import { useState } from "react";

export const AddGame: React.FC = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("");

  const [addGame] = useMutation(ADD_GAME, {
    refetchQueries: [{ query: GET_GAMES }], // Refetch the list of games after adding a new game
  });

  const onHandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await addGame({
      variables: {
        data: {
          id,
          title,
          platform: platform.split(",").map((p) => p.trim()),
        },
      },
    });

    setId("");
    setTitle("");
    setPlatform("");
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <input
        placeholder="id"
        value={id}
        type="text"
        onChange={(e) => setId(e.target.value)}
      />
      <input
        placeholder="Title"
        value={title}
        type="text"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Platforms"
        value={platform}
        type="text"
        onChange={(e) => setPlatform(e.target.value)}
      />
      <button type="submit">Add Game</button>
    </form>
  );
};