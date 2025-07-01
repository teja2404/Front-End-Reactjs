// set State with a call bacl function will make sure the state is update and setback to state
setIsEditing((isEditing) => !isEditing);
setPlayers((prePlayers) => {
  return {
    ...prePlayers,
    [symbol]: newName,
  };
});

//debugging React
<StrictMode>
  <App />
</StrictMode>;

//* Styled Component

const Button = styled.button`
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: #1f2937;
  background-color: #f0b322;
  border-radius: 6px;
  border: none;
  &:hover {
    background-color: #f0920e;
  }
`;

// refs portal
//React Portals provide a way to render child components into a DOM node that exists outside the DOM hierarchy of the parent component. This allows components to "break out" of their container and render in a different part of the DOM tree.
import { createPortal } from "react-dom";
return createPortal(
  <dialog ref={dialog} className="result-modal" onClose={onReset}>
    The target time was <strong>{targetTime} seconds.</strong>
  </dialog>,
  document.getElementById("modal")
);

//The useImperativeHandle hook in React allows you to customize the instance value that is exposed when using forwardRef. It enables you to control what methods or properties of a child component are accessible to the parent component through a ref.

useImperativeHandle(ref, () => {
  return {
    open() {
      dialog.current.showModal();
    },
  };
});

modalRef.current.open();

// context api

//createContext --- store intialState
CartContext = createContext({
  items: [],
  addItemtoCart: () => {},
  updateItemQuantity: () => {},
});

// reducer function to handle different action
function shoppingCartReducer(state, action) {
  console.log(action.payload);
  if (action.type === "ADD_ITEM") {
    return {
      ...state,
      items: updatedItems,
    };
  }

  if (action.type === "UPDATE_ITEM") {
    return {
      items: updatedItems,
    };
  }

  return state;
}

//provider

export default function CartContextProvider({ children }) {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    {
      items: [],
    }
  );

  function handleAddItemToCart(id) {
    shoppingCartDispatch({
      type: "ADD_ITEM",
      payload: { id: id },
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      type: "UPDATE_ITEM",
      payload: {
        productId: productId,
        amount: amount,
      },
    });
  }

  const ctxValue = {
    items: shoppingCartState.items,
    addItemtoCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  };

  return (
    <CartContext value={ctxValue}>
      {/* Use CarContext.Provider for older react version less then 19 */}

      {children}
    </CartContext>
  );
}

//wrapper
<CartContextProvider></CartContextProvider>;

//usage

const { addItemtoCart } = useContext(CartContext);
use; // new in react

//Optimizing techniques UseCallback million.js
//Memoizes a callback function. This means it returns the same function instance across renders, unless the dependencies change.
const handleRemovePlace = useCallback(function handleRemovePlace() {
  setPickedPlaces((prevPickedPlaces) =>
    prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
  );
  setIsModalOpen(false);
  const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
  localStorage.setItem(
    "selectedPlaces",
    JSON.stringify(storedIds.filter((id) => id !== selectedPlace.current))
  );
}, []);

// custom hook

export function useFetch(fetchFnc, initialValue) {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const places = await fetchFnc();
        setFetchedData(places);
        setIsFetching(false);
      } catch (error) {
        setError({
          message: error.message || "Failed to fetch data ",
        });
        setIsFetching(false);
      }
    }
    fetchData();
  }, [fetchFnc]);

  return {
    isFetching,
    fetchedData,
    setFetchedData,
    error,
  };
}

//forms
useRef;
FormData; //default from html form element
const formData = new FormData(event.target);
const data = Object.fromEntries(formData.entries());

import { useActionState } from "react"; // add new hook to react 19
const [formState, formAction, pending] = useActionState(handleSubmit, {
  errors: null,
});

formik;
//useFormStatus is a Hook that gives you status information of the last form submission.

//The useOptimistic hook in React is designed to enhance user experience by providing immediate UI updates in response to actions, even before the server confirms the changes. This approach, known as optimistic UI, makes applications feel more responsive and interactive.

//redux toolkit

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

//pass state to store and wrap to the gobal component

import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: { counter: counterReducer.reducer, auth: authReducer.reducer },
});

<Provider store={store}></Provider>;

// usage
import { useSelector, useDispatch } from "react-redux";
const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // to get state values

// connect to reducer actions
const dispatch = useDispatch();

const handleLogout = () => {
  dispatch(authActions.logout());
};

//router

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <RootLayout />,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     { path: "/", element: <Home /> },
  //     { path: "/products", element: <Products /> },
  //     { path: "/products/:productId", element: <ProductDetails /> },
  //   ],
  // },
  {
    path: "",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products />, action: deleteEventAction },
      {
        path: "products/:productId",
        element: <ProductDetails />,
        loader: eventsLoader,
      },
    ],
  },
]);

<RouterProvider router={router}></RouterProvider>;

//

useEffect(() => {
  const interval = setInterval(() => {
    setLanes((prevLanes) =>
      prevLanes.map(
        (lane) =>
          lane
            .map((cart) => cart - 1) // Decrease each cart's product count by 1
            .filter((cart) => cart > 0) // Remove carts that are done (0 or less)
      )
    );
  }, 1000);

  return () => clearInterval(interval);
}, []);

const laneIndex = lanes.reduce((minIndex, lane, i, arr) => {
  const total = lane.reduce((sum, cart) => sum + cart, 0);
  const minTotal = arr[minIndex].reduce((sum, cart) => sum + cart, 0);
  return total < minTotal ? i : minIndex;
}, 0);

/*Loops through all 5 lanes.
Calculates the total number of products in each lane.
Keeps track of the index of the lane with the smallest total.*/

const updatedLanes = [...lanes];
updatedLanes[laneIndex] = [...updatedLanes[laneIndex], productCount];

/* Makes a copy of the lanes array (to avoid mutating state directly).
Adds the new cart (just a number) to the end of the selected lane.*/
