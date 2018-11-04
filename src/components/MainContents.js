import React, { Component } from 'react';
import List from './List';

class MainContents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentsList : [
                {
                    title: '팀커 도우미',
                    icon: 'language',
                    desc: '팀 커뮤니케이션 일정과 장소를 정하고 해당 날짜에 알림을 줍니다.',
                    link: '/teamComm'
                },
                {
                    title: '사원 당번 알리미',
                    icon: 'supervisor_account',
                    desc: '사원 정수기 당번 순서를 알려줍니다.',
                    link: '#'
                }
            ]
        }
    }

    render() {
        const mapContentsToList = (data) => {
            return data.map((list, i) => {
                return (
                <List list={list} />
                );
            });
        }


        return (
            <div class="container" id="CONTENTS">
                <ul class="collection white z-depth-1">
                    <li class="collection-item avatar">
                        <i class="material-icons circle indigo">whatshot</i>
                        <span class="title"><b>Service Development Helper</b></span>
                        <p>서비스 개발 본부원들 위한 도우미! 에베레레레레ㅔ레레</p>
                    </li>
                </ul>
                <ul class="collapsible collection white" data-collapsible="expandable">
                    {mapContentsToList(this.state.contentsList)}
                </ul>
            </div>
        );
    }
}

export default MainContents;