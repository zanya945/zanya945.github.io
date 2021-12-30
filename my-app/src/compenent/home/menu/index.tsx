import react from "react";
import './index.sass'

class Menu extends react.Component{
    constructor(props: any){
        super(props);

    }

    render(){
        return(
            <ul>
                <li id = "main-menu">about</li>
                <li id = "main-menu">home</li>
                <li id = "main-menu">diary</li>
                <li id = "main-menu">note</li>
            </ul>
        );
    }

}

export default Menu;