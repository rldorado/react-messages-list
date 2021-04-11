import React from "react";
import { Provider } from "react-redux";

import { store } from "./store";
import { useRate } from "./useRate";
import { List } from "./List/List";

export const App = () => {
    const isReadyToRender = useRate();
    return isReadyToRender ? (
        <Provider store={store}>
            <List />
        </Provider>
    ) : (
        <p>We loading rate for u. Wait a bit</p>
    );
};
