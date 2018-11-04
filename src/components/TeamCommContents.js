import React, { Component } from 'react';
import Calendar from './Calendar';

class TeamCommContents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDays: []
        }
    }

    handleCreate = (data) => {
        // data : selectedDays
        console.log(data);
    }

    render() {
        return (
            <div class="container" id="CONTENTS">
                <h4>팀커 도우미 입니다 :)</h4>
                <div class="row card-panel">
                    <Calendar onCreate={this.handleCreate}/>
                </div>
            </div>
        );
    }
}

export default TeamCommContents;