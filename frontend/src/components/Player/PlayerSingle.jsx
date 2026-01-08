import { usePlayer } from '../../constext/usePlayer';
import { Link } from "react-router-dom";

export const PlayerSingle = () => {
    const { currentPlayer, deletePlayer } = usePlayer();
    return (
        <>
        <div>
            <div className="row">
                <div className="col s1"></div>
                <div className="col s6">
                    <div className="card">
                        <div className="card-action">
                            <Link
                                to={`/edit/${currentPlayer._id}`}
                                className="secondary-content"
                                onClick={(e) => e.stopPropagation()}
                            >
                                Edit
                            </Link>

                            <button
                            style={{marginLeft: "10px", lineHeight: "20px", height: "22px"}}
                                onClick={(e) => {
                                e.stopPropagation();
                                deletePlayer(currentPlayer._id);
                                }}
                                className="secondary-content btn-flat red-text"
                            >
                                Delete
                            </button>
                        </div>
                        <div className="card-image" style={{textAlign: "center", width: "100%"}} >
                            <img src="vite.svg"  style={{width: "200px", display: "inline-block"}} />
                            <br></br>
                        </div>
                        <div className="card-content">
                            <p className="card-title">{currentPlayer.firstName} { currentPlayer.lastName}</p>

                            <p>Phone: {currentPlayer.phone} - Email: {currentPlayer.email}</p>
                            <p>Team: {currentPlayer.team} - Strength: {currentPlayer.strength}</p>
                        </div>
                    </div>
                </div>
                <div className="col s3"></div>

            </div>
        </div>
        </>
    )
}