import React, { createContext, useContext, useState } from 'react'

export const DatabaseContext = createContext(null);


const DatabaseContextProvider = (props: any) => {
    const [name, setName] = useState("Test");


    const value: any = {
        name, setName,
    };

    return (
        <DatabaseContext.Provider value={value}>
            {props.children}
        </DatabaseContext.Provider>
    )
}


export default DatabaseContextProvider