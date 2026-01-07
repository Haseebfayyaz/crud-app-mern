import { 
    addNewPlayer,
    getPlayers,
    getPlayerWithId,
    updatePlayer,
    deletePlayer
} from "../controllers/playerControllers.js"

const routes = (app) => {
    app.route("/players")
    .get(getPlayers)
    .post(addNewPlayer)

    app.route("/player/:PlayerId")
    .put(updatePlayer)
    .get(getPlayerWithId)
    .delete(deletePlayer)
}

export default routes;