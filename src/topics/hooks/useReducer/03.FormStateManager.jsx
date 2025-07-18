
import { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
}

const ACTIONS = {
  UPDATE_FIELD: "update-field",
  RESET_FORM: "reset-form",
  SET_FORM: "set-form",
  SET_ERROR: "set-error",
};

const formReducer = (state, action) => {
  console.log("statesss",state)
  switch (action.type) {
    case ACTIONS.SET_FORM:
      return {
        ...state,
        ...action.payload,
      };
    case ACTIONS.UPDATE_FIELD:
      return {
        ...state,
        ...action.payload,
      };
    case ACTIONS.RESET_FORM:
      return {
        ...initialState,
        error: null,
      };
    case ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

const FormStateManager = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: ACTIONS.UPDATE_FIELD, payload: { [name]: value } });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!state.name || !state.email || !state.password) {
      dispatch({ type: ACTIONS.SET_ERROR, payload: "Please fill in all fields." });
      return;
    }

    dispatch({ type: ACTIONS.SET_FORM, payload: state });
    dispatch({ type: ACTIONS.RESET_FORM });
  };


  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Form State Manager</h2>

      {/* Error message */}
      {state.error && <div className="text-red-500 mb-4">{state.error}</div>}

      {/* Form */}
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="border border-gray-300 p-2 w-full"
            type="text"
            id="name"
            name="name"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="border border-gray-300 p-2 w-full"
            type="email"
            id="email"
            name="email"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="border border-gray-300 p-2 w-full"
            type="password"
            id="password"
            name="password"
            onChange={handleInputChange}
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default FormStateManager;