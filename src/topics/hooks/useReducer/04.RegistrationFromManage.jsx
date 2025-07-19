import { useReducer } from "react";

const initialState = {
  formData: {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: {
      country: "",
      city: "",
      zipCode: "",
    },
    preference: {
      newsletter: false,
      contactMethod: "",
      skills: [],
    },
  },
  errors: {},
  success: false,
  loading: false,
  message: "",
  formSubmitted: false,
};

const ACTIONS = {
  UPDATE_FIELD: "update-field",
  UPDATE_NESTED_FIELD: "update-nested-field",
  TOGGLE_CHECKBOX: "toggle-checkbox",
  SUBMIT_FORM: "submit-form",
  SET_ERROR: "set-error",
  RESET_FORM: "reset-form",
  SET_FORM: "set-form",
  SET_LOADING: "set-loading",
  SET_SUCCESS: "set-success",
  SET_MESSAGE: "set-message",
};

const formReducer = (state, action) => {
  console.log("Action dispatched:", action);
  switch (action.type) {
    case ACTIONS.UPDATE_FIELD:
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload,
        },
      };

    case ACTIONS.UPDATE_NESTED_FIELD:
      return {
        ...state,
        formData:{
          ...state.formData,
          [action.payload.section]:{
            ...state.formData[action.payload.section],
            ...action.payload.data,
          }
        }
      };

    case ACTIONS.TOGGLE_CHECKBOX:
      return {
        ...state,
        formData: {
          ...state.formData,
          preference: {
            ...state.formData.preference,
            [action.payload.name]:
              !state.formData.preference[action.payload.name],
          },
        },
      };

    case ACTIONS.SET_FORM:
      return {
        ...state,
        formData: action.payload.formData,
        formSubmitted: true,
        success: true,
        message: "Form submitted successfully!",
      };
    
    case ACTIONS.SET_ERROR:
      return {
        ...state,
        errors: action.payload,
      };

    case ACTIONS.RESET_FORM:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

const validateForm = (formData) => {
  const errors = {};

  if (!formData.name.trim()) errors.name = "Name is required.";
  if (!formData.email.includes("@")) errors.email = "Valid email is required.";
  if (formData.password.length < 6)
    errors.password = "Password must be at least 6 characters.";
  if (formData.password !== formData.confirmPassword)
    errors.confirmPassword = "Passwords do not match.";
  if (!formData.address.country.trim()) errors.country = "Country is required.";
  if (!formData.address.city.trim()) errors.city = "City is required.";
  if (!formData.address.zipCode.trim())
    errors.zipCode = "ZIP Code is required.";

  console.log("Validation errors:", errors);
  return errors;
};

const RegistrationFormManage = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  console.log("Current state:", state);
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (["country", "city", "zipCode"].includes(name)) {
      dispatch({
        type: ACTIONS.UPDATE_NESTED_FIELD,
        payload: {
          section: "address",
          data: { [name]: value },
        },
      });
    } else if (name === "contactMethod") {
      dispatch({
        type: ACTIONS.UPDATE_NESTED_FIELD,
        payload: {
          section: "preference",
          data: { [name]: value },
        },
      })
    } else if (
      name === "skills" ||
      name === "newsletter"
    ) {
      const skills = state.formData.preference.skills.includes(value)
        ? state.formData.preference.skills.filter((skill) => skill !== value)
        : [...state.formData.preference.skills, value];

      const newsletter =
        name === "newsletter"
          ? !state.formData.preference.newsletter
          : state.formData.preference.newsletter;

      dispatch({
        type: ACTIONS.UPDATE_FIELD,
        payload: {
          preference: {
            ...state.formData.preference,
            skills,
            newsletter,
          },
        },
      });
    } else {
      dispatch({
        type: ACTIONS.UPDATE_FIELD,
        payload: {
          [name]: value,
        },
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const errors = validateForm(state.formData);

    if (Object.keys(errors).length > 0) {
      dispatch({ type: ACTIONS.SET_ERROR, payload: errors });
      return;
    }

    dispatch({
      type: ACTIONS.SET_FORM,
      payload: {
        formData: state.formData,
        formSubmitted: true,
      },
    });

    dispatch({ type: ACTIONS.RESET_FORM });

    console.log("Form submitted with data:", state.formData);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        Registration Form (useReducer Advanced Level Example)
      </h2>


      {state.formSubmitted && (
        <p className="text-green-600">Form submitted successfully!</p>
      )}

      {/* User Registration Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto space-y-4 text-sm"
      >
        <div>
          <label className="block mb-1 text-gray-700">Name</label>
          <input
            type="text"
            className="w-full border px-2 py-1"
            value={state.formData.name}
            onChange={handleInputChange}
            name="name"
            placeholder="Your Name"
          />
          {state.errors.name && (
            <p className="text-red-500">{state.errors.name}</p>
          )}
        </div>
        <div>
          <label className="block mb-1 text-gray-700">Email</label>
          <input
            type="email"
            className="w-full border px-2 py-1"
            value={state.formData.email}
            onChange={handleInputChange}
            name="email"
            placeholder="you@example.com"
          />
          {state.errors.email && (
            <p className="text-red-500">{state.errors.email}</p>
          )}
        </div>
        <div>
          <label className="block mb-1 text-gray-700">Password</label>
          <input
            type="password"
            className="w-full border px-2 py-1"
            value={state.formData.password}
            onChange={handleInputChange}
            name="password"
            placeholder="Password"
          />
          {state.errors.password && (
            <p className="text-red-500">{state.errors.password}</p>
          )}
        </div>
        <div>
          <label className="block mb-1 text-gray-700">Confirm Password</label>
          <input
            type="password"
            className="w-full border px-2 py-1"
            value={state.formData.confirmPassword}
            onChange={handleInputChange}
            name="confirmPassword"
            placeholder="Confirm Password"
          />
          {state.errors.confirmPassword && (
            <p className="text-red-500">{state.errors.confirmPassword}</p>
          )}
        </div>
        <div>
          <label className="block mb-1 text-gray-700">Country</label>
          <input
            type="text"
            className="w-full border px-2 py-1"
            value={state.formData.address.country}
            onChange={handleInputChange}
            name="country"
            placeholder="Country"
          />
          {state.errors.country && (
            <p className="text-red-500">{state.errors.country}</p>
          )}
        </div>
        <div>
          <label className="block mb-1 text-gray-700">City</label>
          <input
            type="text"
            className="w-full border px-2 py-1"
            value={state.formData.address.city}
            onChange={handleInputChange}
            name="city"
            placeholder="City"
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-700">ZIP Code</label>
          <input
            type="text"
            className="w-full border px-2 py-1"
            value={state.formData.address.zipCode}
            onChange={handleInputChange}
            name="zipCode"
            placeholder="ZIP Code"
          />
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="newsletter"
            className="w-4 h-4"
            checked={state.formData.preference.newsletter}
            onChange={handleInputChange}
            name="newsletter"
          />
          <label htmlFor="newsletter" className="text-gray-700">
            Subscribe to newsletter
          </label>
        </div>
        <div>
          <label className="block mb-1 text-gray-700">
            Preferred Contact Method
          </label>
          <select
            className="w-full border px-2 py-1"
            value={state.formData.preference.contactMethod}
            onChange={handleInputChange}
            name="contactMethod"
          >
            <option value="">Select</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="block mb-1 text-gray-700">Skills</label>
          <div className="flex gap-4">
            <label className="flex items-center space-x-1">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={state.formData.preference.skills.includes(
                  "javascript"
                )}
                onChange={handleInputChange}
                name="skills"
                value="javascript"
              />
              <span>JavaScript</span>
            </label>
            <label className="flex items-center space-x-1">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={state.formData.preference.skills.includes("react")}
                onChange={handleInputChange}
                name="skills"
                value="react"
              />
              <span>React</span>
            </label>
            <label className="flex items-center space-x-1">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={state.formData.preference.skills.includes("node")}
                onChange={handleInputChange}
                name="skills"
                value="node"
              />
              <span>Node</span>
            </label>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-1 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationFormManage;
