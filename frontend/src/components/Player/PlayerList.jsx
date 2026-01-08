import { usePlayer } from '../../constext/usePlayer';
export const PlayerList = () => {
    const { players, setCurrentPlayer } = usePlayer();
    return (
        <>
        <div>
            <ul className="collection with-header">
                <li className="collection-header"><h4>Players</h4></li>
                {players.map((item) => 
                    <a href="#!" className="collection-item" key={item._id} onClick={() => setCurrentPlayer(item)}>
                        {item.firstName} {item.lastName}
                    </a>
                )}
            </ul>
        </div>
        </>
    )
}