import { useRef, useEffect } from "react" 
import { useNavigate, useParams } from "react-router-dom";
import { usePlayer } from "../../context/usePlayer";

function PlayerForm() {
    const id = useParams().id;
    const { players, addPlayer, updatePlayer } = usePlayer();

    const navigate = useNavigate();
    const firstName = useRef(null);
    const lastName = useRef(null);
    const email = useRef(null);
    const phone = useRef(null);

    useEffect(() => {
        if(id){
            const player = players.find(p => p._id = id);
            if(player){
                firstName.current.value = player.firstName;
                lastName.current.value = player.lastName;
                email.current.value = player.email;
                phone.current.value = player.phone;
            }
        }
    }, [id, players]);

    const submitPlayer = (event) => {
        event.preventDefault();
        try {
            const data = {
                firstName: firstName.current.value,
                lastName: lastName.current.value,
                email: email.current.value,
                phone: phone.current.value,
            }
            id ? updatePlayer(id,data) : addPlayer(data);
            navigate("/")
        } catch(err){
            console.error(err);
        }
    };



    return (
            <div className="row">
                <h1 className="center">Add New Player</h1>
                <div className="col s4"></div>
                <form className="col s4" onSubmit={submitPlayer}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input ref={firstName} type="text" />
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input ref={lastName} type="text" />
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input  ref={phone} type="text" />
                            <label htmlFor="phone">Phone</label>
                        </div>
                        <div className="input-field col s6">
                            <input ref={email} type="email" />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit">
                        Add Player
                    </button>
                </form>
                <div className="col s4"></div>

            </div>
        )
    }


export default PlayerForm;