import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { PlayerProvider } from "../../context/PlayerContext";
import { PlayerList }  from "./PlayerList";

vi.mock("../../services/playerApi", () => ({
  getPlayers: vi.fn(() =>
    Promise.resolve({
      data: [
        {
          _id: "1",
          firstName: "Messi",
          lastName: "Leo",
          email: "messi@test.com",
          phone: "123",
        },
      ],
    })
  ),
  addPlayer: vi.fn(),
  createPlayer: vi.fn(),
  updatePlayer: vi.fn(),
  deletePlayer: vi.fn(),
}));

describe("PlayerList", () => {
  it("renders player list", async () => {
    render(
      <PlayerProvider>
        <PlayerList />
      </PlayerProvider>
    );

    expect(await screen.findByText(/Messi/i)).toBeInTheDocument();
  });
});
