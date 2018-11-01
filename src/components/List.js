import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
            <li>
                <div class="collapsible-header active">
                    <i class="material-icons">{this.props.list.icon}</i>
                    <b>{this.props.list.title}</b>
                </div>
                <div class="collapsible-body">
                    <p> 
                        {this.props.list.desc}
                        <a href={this.props.list.link} class="secondary-content btn indigo">
                            <i class="material-icons">send</i>
                        </a>
                    </p>
                </div>
            </li>
        );
    }
}

export default List;