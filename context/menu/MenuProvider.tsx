/*import React, { ReactElement, useReducer } from "react";
import { MenuContext } from "./MenuContext";
import { menuReducer } from "./menuReducer";

export interface MenuState {
  //exportando los estados de las entradas
  menu: [];
}

interface Props {
  //validando el tipo de children
  children: ReactElement;
}

const Menu_INITIAL_STATE: MenuState = {
  // las tareas con toda su info rellenada
  menu: [],
};

const NavProvider = ({ children }: Props) => {
  const [state, dispach] = useReducer(menuReducer, Menu_INITIAL_STATE);

  const ChangeOptionNav = () => {
    dispach({ type: "Change-Menu", payload: [] }); //enviamos la acción de agregar Entry
  };

  return (
    <MenuContext.Provider
      value={{
        ...state,
        //Methods
        ChangeOptionNav,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default NavProvider;
*/
