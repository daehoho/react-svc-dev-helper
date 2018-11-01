import React, { Component } from 'react';

class Contents extends Component {
    render() {
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
                    <li>
                        <div class="collapsible-header active">
                            <i class="material-icons">language</i><b>팀커 도우미</b>
                        </div>
                        <div class="collapsible-body">
                            <p> 팀 커뮤니케이션 일정과 장소를 정하고 해당 날짜에 알림을 줍니다.
          <a href="hosting.html" class="secondary-content btn indigo"><i class="material-icons">send</i></a>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="collapsible-header active">
                            <i class="material-icons">supervisor_account</i><b>사원 당번 알리미</b>
                        </div>
                        <div class="collapsible-body">
                            <p> 사원 당번 순서를 알려줍니다.
          <a href="auth.html" class="secondary-content btn indigo"><i class="material-icons">send</i></a>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Contents;