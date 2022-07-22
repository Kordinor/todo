import "./TodoItem.css";

export const TodoItem = ({todoItem, deleteTodoItem}) => {
    const {name, description, index} = todoItem;
    return (
        <div className="todo-item" key={index}>
            <div className="todo-item-header">
                <div>
                    <p className="todo-item-name">{name}</p>
                </div>
                <div>
                    <button className="todo-item-delete" onClick={() => deleteTodoItem(index)}>🗑️</button>
                </div>
            </div>
            <div>
                <p className="todo-item-description">{description}</p>
            </div>
        </div>
    );
}