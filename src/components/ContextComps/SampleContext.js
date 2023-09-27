import React from "react";

const sampleContext = React.createContext();

const UserProvider = sampleContext.Provider;
const UserConsumer = sampleContext.Consumer;

export default sampleContext;
export { UserProvider, UserConsumer };
