import React from 'react';
import {Todo, fetchTodos, deleteTodo} from '../actions/index'
import {StoreState} from '../reducers/index';
import {connect} from 'react-redux'

interface AppProps {
    todos: Todo[],
    fetchTodos: Function;
    deleteTodo: any;
}

interface AppState {
    loading: boolean,
    loaded: boolean
}

class _App extends React.Component<AppProps, AppState> {
    state = {
        loading: false,
        loaded: false
    }

    componentDidMount() {
        
    }

    componentDidUpdate(prevProps: AppProps): void {
        if (!prevProps.todos.length && this.props.todos.length) {
            this.setState({loading:false, loaded:true})
        }
    }

    onTodoClick = (id:number) => {
        this.props.deleteTodo(id)
    }

    onFetchButtonClick = (): void => {
        this.setState({loading:true})
        this.props.fetchTodos()
    }

    todoItem = (todo: Todo) => {
        return (
            <div
            className='todo-div'
            onClick={()=> this.onTodoClick(todo.id)}
            key={todo.id}>
                <h2>{todo.title}</h2>
                <p><b>ID : </b>{todo.id}</p>
                {todo.completed ?
                <h3>Completed !</h3>
                :
                <h3>Not completed !</h3>
                }
            </div>
        )
    }

    render() {
        return (
            <div>
                <h1>Todo App</h1>
                <hr></hr>
                {!this.state.loaded && <button onClick={this.onFetchButtonClick}>Load Todos</button>}
                {this.state.loading && <h2>Loading ...</h2>}
                {this.props.todos.map(this.todoItem)}
            </div>
        )
    }
}

const mapStateToProps = ({todos}: StoreState): {todos: Todo[]} => {
    return {todos}
}

export const App = connect(
    mapStateToProps,
    {fetchTodos, deleteTodo}
)(_App)