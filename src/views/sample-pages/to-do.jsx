import React from 'react';
import {
    Card,
    CardBody
} from 'reactstrap';

class TodoList extends React.Component {
    constructor() {
        super();

        this.state = {
            'tasks': [
                {
                    'completed': false,
                    'name': 'Do Xtreme admin today'
                },
                {
                    'completed': false,
                    'name': 'Buy Other React admin'
                },
                {
                    'completed': false,
                    'name': 'Finish the presentation'
                }
            ]
        };

    }

    render() {
        return (
            <div>
                <Card>
                    <CardBody>
                        <ul>
                            {
                                this.state.tasks.map(alltasks => <TodoItem details={alltasks} key={alltasks.name} />)
                            }
                        </ul>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

class TodoItem extends React.Component {
    render() {
        return (
            <li>
                {this.props.details.name}
            </li>
        );
    }
}

export default TodoList;
