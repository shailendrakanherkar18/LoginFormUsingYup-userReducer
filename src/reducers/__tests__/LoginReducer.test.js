import { setEmail } from "../../actions/loginActions";
import loginDetailsReducer, { initialState } from "../loginDetailsReducer";

describe("Login Reducer", () => {
    it("return default state", () => {
        expect(loginDetailsReducer(initialState, {})).toEqual(initialState);
    });

    it("set email state", () => {
        const email = "pragati.garud@joshsoftware.com";
        expect(loginDetailsReducer(initialState, setEmail(email))).toEqual({ ...initialState, email });
    });
});