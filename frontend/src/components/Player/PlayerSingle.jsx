export const PlayerSingle = (props) => {
    return (
        <>
        <div>
            <div className="row">
                <div className="col s3"></div>
                <div className="col s6">
                    <div className="card">
                        <div className="card-image center" >
                            <img src="vite.svg"  style={{width: "200px"}} />
                            <br></br>
                        </div>
                        <div className="card-content">
                            <p className="card-title">{props.player.firstName} { props.player.lastName}</p>

                            <p>Phone: {props.player.phone} - Email: {props.player.email}</p>
                            <p>Team: {props.player.team} - Strength: {props.player.strength}</p>
                        </div>
                    </div>
                </div>
                <div className="col s3"></div>

            </div>
        </div>
        </>
    )
}