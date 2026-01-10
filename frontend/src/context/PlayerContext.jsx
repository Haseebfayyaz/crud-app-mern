import { createContext, useEffect, useState } from "react";
import * as playerApi from "../services/playerApi";

// eslint-disable-next-line react-refresh/only-export-components
export const PlayerContext = createContext(null);

export const PlayerProvider = ({ children}) => {
    const [players, setPlayers] = useState([]);
    const [currentPlayer, setCurrentPlayer] = useState({});

    const loadPlayers = async () => {
        const res = await playerApi.getPlayers();
        setPlayers(res.data);
    };

    const addPlayer = async (player) => {
        const res = await playerApi.addPlayer(player);
        setPlayers([...players, res.data]);
    };

    const updatePlayer = async (id, player) => {
        await playerApi.updatePlayer(id, player);
        loadPlayers();
    };

    const deletePlayer = async (player) => {
        await playerApi.deletePlayer(player);
        setPlayers(players.filter(p => p._id !== player._id));
        setCurrentPlayer({});
    };

    useEffect(() => {
        let ignore = false;

        const fetchPlayers = async () => {
            try {
            const res = await playerApi.getPlayers();
            if (!ignore) {
                setPlayers(res.data);
            }
            } catch (err) {
            console.error(err);
            }
        };

        fetchPlayers();

        return () => {
            ignore = true; // prevents state update after unmount
        };
    }, []);

    return (
        <PlayerContext.Provider value={{ players, currentPlayer,setCurrentPlayer, addPlayer, updatePlayer, deletePlayer }}>
            {children}
        </PlayerContext.Provider>
    );

}

