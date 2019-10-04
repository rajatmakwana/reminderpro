import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, clearReminders } from '../actions';
import moment from 'moment';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            dueDate: ''
        }
    }

    addReminder = () => {
        this.props.addReminder(this.state.text, this.state.dueDate);
    }

    deleteReminder = id => {
        this.props.deleteReminder(id);
    }

    getReminder = () => {
        const { reminders } = this.props;
        return (
            <ul className="list-group col-sm-7">
                {reminders.map(reminder => {
                    return (
                        <li key={reminder.id} className="list-group-item">
                            <div className="list-item">
                                <div>{reminder.text}<em className="due-date">{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
                            </div>
                            <button className="list-item delete-button"
                                onClick={() => this.deleteReminder(reminder.id)}>
                                &#x2715;
                            </button>
                        </li>
                    )
                })}
            </ul>
        )
    }

    render() {
        return (
            <div className="App">
                <div className="title">
                    Reminder Pro | Made by <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rajatmakwana/">Rajat Makwana</a>
                </div>
                <div className="form-inline reminder-form">
                    <div className="form-group">
                        <input className="form-control"
                            placeholder="I have to..."
                            onChange={e => this.setState({ text: e.target.value })}
                        />
                        <input className="form-control"
                            type="datetime-local"
                            onChange={e => this.setState({ dueDate: e.target.value })}
                        />
                    </div>
                    <button type="button" className="btn btn-success" onClick={this.addReminder}>Add Reminder</button>
                    <div className="btn btn-danger" onClick={this.props.clearReminders}>Clear Reminders</div>
                </div>
                {this.getReminder()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        reminders: state
    }
}

export default connect(mapStateToProps, { addReminder, deleteReminder, clearReminders })(App);