import { useRef } from "react" 
import { useNavigate } from "react-router-dom";
import axios from "axios"

function PlayerForm({onSuccess }) {
    const navigate = useNavigate();
    const firstName = useRef(null);
    const lastName = useRef(null);
    const email = useRef(null);
    const phone = useRef(null);

    const submitPlayer = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:4000/players",{
                firstName: firstName.current.value,
                lastName: lastName.current.value,
                email: email.current.value,
                phone: phone.current.value,
            })
            onSuccess();        // refresh list
            navigate("/"); 
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