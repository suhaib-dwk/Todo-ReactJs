import { useState } from "react"
import { addTodos} from "../redux/reducer";
import { connect } from "react-redux"
import {GoPlus} from "react-icons/go"

const mapStateToProps = (state) => {
    return {
        todo: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
    }
};

const Todos = (props) => {

    const [todo, setTodo] = useState("");


    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    // console.log( props)

    const add = () => {
        props.addTodo({
            id: Math.floor(Math.random() * 1000),
            item: todo,
            completed: false,
        })
        setTodo("");
    }

  return (
    <div className="addTodos">
        <input 
        type="text"  
        onChange={(e) => handleChange(e)} 
        className="todo-input" 
        value={todo}
        />
        <button className="add-btn" onClick={() => add()}><GoPlus /></button>
        
        <br />

    </div>
  )
}
// use connect method to connect this components with redux store
export default connect(mapStateToProps,mapDispatchToProps)(Todos);