
//1.) import and create context
import React, {createContext , Component} from 'react';

export const ThemeContext = createContext();


//2.) create context class

class ThemeContextProvider extends Component {

    state = {
        isLightTheme : false,

        light: {
            syntax : '#555',  ui: '#ddd' , bg: 'eee'
        },

        dark: {
            syntax : '#ddd',  ui: '#333' , bg: '555'
        },

    };


    render() {
        return(

                <ThemeContext.Provider value={{...this.state}}>  {/*value is the state that all the  wrapped components will receive */}
                    {this.props.children}
                </ThemeContext.Provider>


        )
    }
}

export default ThemeContextProvider



