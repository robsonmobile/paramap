import { applyMiddleware, createStore } from "redux";
import { persistStore, autoRehydrate } from "redux-persist";
import { AsyncStorage } from "react-native";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers";

export default function configureStore() {
  // AsyncStorage.clear();   // REMOVE THIS LINE TO PERSIST STATE

  const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware),
    autoRehydrate()
  );
  persistStore(store, { storage: AsyncStorage });

  return store;
}
