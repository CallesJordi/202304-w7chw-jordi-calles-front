import { UserStateStructure, UserTokenStructure } from "./types";
import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given a userReducer reducer", () => {
  describe("When it receives an empty current state and loginUser action with payload", () => {
    test("Then it should return the new state and log the user", () => {
      const currentState: UserStateStructure = {
        name: "",
        id: "",
        token: "",
        isLogged: false,
      };

      const userToken: UserTokenStructure = {
        id: "30",
        name: "blackbeard",
        token: "tokensaso",
      };

      const expectedNewState: UserStateStructure = {
        id: "30",
        name: "blackbeard",
        token: "tokensaso",
        isLogged: true,
      };

      const newUserState = userReducer(
        currentState,
        loginUserActionCreator(userToken)
      );

      expect(expectedNewState).toStrictEqual(newUserState);
    });
  });
});
