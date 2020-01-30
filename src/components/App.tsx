import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, fetchTodos, Todo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
    todos: Todo[];
    // need to specify what redux-thunk is
    fetchTodos: Function;
    deleteTodo: typeof deleteTodo;
}

interface AppState {
    fetching: boolean;

}

class _App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);

        this.state = { fetching: false };
    }
    // checks if previous props did not exist and current props does exist then update fetching
    componentDidUpdate(prevProps: AppProps): void {
        if(!prevProps.todos.length && this.props.todos.length) {
            this.setState({ fetching: false });
        }
    }

    onButtonClick = (): void => {
        this.props.fetchTodos();
        this.setState({ fetching: true });
    };

    onToDoClick = (id: number):void => {
        this.props.deleteTodo(id);
    }
    // helper method
    renderList(): JSX.Element[] {
        return this.props.todos.map((todo: Todo) => {
          return (
              <div onClick={() => this.onToDoClick(todo.id)} key={todo.id}>
                {todo.title}
              </div>
          );
        });
      }

    render(){
        return (
            <div>
                <button onClick={this.onButtonClick}>Fetch</button>
                {this.state.fetching ? 'LOADING' : null}
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
    return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App)