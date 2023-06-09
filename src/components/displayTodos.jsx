import { useState } from "react"
import { connect } from "react-redux"
import { addTodos  ,completeTodos,removeTodos, updateTodos } from "../redux/reducer";
import TodoItem from "./todoItem";

const mapStateToProps = (state) => {
    return {
        todo: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
        removeTodo : (id) => dispatch(removeTodos(id)),
        updateTodo: (obj) => dispatch(updateTodos(obj)),
        completeTodo : (id) => dispatch(completeTodos(id)),
    }
};


const displayTodos = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sort,setSort] = useState("active");
  return (
    <div className="displaytodos">
        <div className="buttons">
            <button onClick={() => setSort("active")}>Active</button>
            <button onClick={() => setSort("completed")}>Complete</button>
            <button onClick={() => setSort("all")}>All</button>
        </div>
        <ul>
            {
                props.todo.length > 0 && sort === "active" ? props.todo.map((item) => {
                    return (
                        item.completed === false && (
                        <TodoItem 
                            key={item.id}
                            item={item}
                            removeTodo={props.removeTodo}
                            updateTodo={props.updateTodo}
                            completeTodo={props.completeTodo}
                        />
                    )
                    );
                })
            : null }
            {/* For completed items */}
            {
                props.todo.length > 0 && sort === "completed" ? props.todo.map((item) => {
                    return (
                        item.completed === true && (
                        <TodoItem 
                            key={item.id}
                            item={item}
                            removeTodo={props.removeTodo}
                            updateTodo={props.updateTodo}
                            completeTodo={props.completeTodo}
                        />
                    )
                    );
                })
            : null }
            {/* For all items */}
            {
                props.todo.length > 0 && sort === "all" ? props.todo.map((item) => {
                    return (
                        <TodoItem 
                            key={item.id}
                            item={item}
                            removeTodo={props.removeTodo}
                            updateTodo={props.updateTodo}
                            completeTodo={props.completeTodo}
                        />
                    
                    );
                })
            : null }
        </ul>
    </div>
  )
}

export default connect (mapStateToProps , mapDispatchToProps)(displayTodos);