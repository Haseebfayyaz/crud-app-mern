import { vi } from "vitest";
export const getPlayers = vi.fn(() =>
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
  );
  
  export const createPlayer = vi.fn(() => Promise.resolve());
  export const updatePlayer = vi.fn(() => Promise.resolve());
  export const deletePlayer = vi.fn(() => Promise.resolve());
  