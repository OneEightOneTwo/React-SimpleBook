import { Component } from 'react';
import hc from './header.css'
import logo from '../../assets/logo.png'
import beta from '../../assets/beta.png'

import { ButtonToolbar, OverlayTrigger, Popover, Button } from 'react-bootstrap'

const popoverClickRootClose = (
    <Popover id="popover-trigger-click-root-close" title="底部弹出">
        <strong>点击我</strong> 就可以看到这个信息。
</Popover>
);

export default class header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [{
                icon: 'iconfont icon-faxian',
                text: '首页',
                color: '#ea6f5a'
            }, {
                icon: 'iconfont icon-xiazai',
                text: '下载APP',

            },
            {
                icon: 'iconfont icon-shu',
                text: '关注',


            },
            {
                icon: 'iconfont icon-xiaoxi',
                text: '消息',

            }],
            num: 0,
            long: null,
            visible: false,
        }
    }

    //遍历
    hNav() {
        return this.state.tabs.map((item, index) => {
            return (<li key={index} onClick={this.toRed.bind(this, index)}
                style={{ color: this.state.num === index ? '#ea6f5a' : '#000' }}
            >
                <i className={item.icon}></i>
                <span style={{ color: this.state.num === index ? '#ea6f5a' : '#000' }}>{item.text}</span>
            </li>)
        })
    }
    //点击变红
    toRed(index) {
        //修改值
        this.setState({
            num: index
        })
    }
    tolong() {
        this.setState({
            long: {
                width: '320px',
            }
        })
        this.refs.i.style.color = '#fff'
        this.refs.i.style.borderRadius = '50%'
        this.refs.i.style.background = '#969696'

    }

    offlong() {
        this.setState({
            long: {
                width: '240px'
            }
        })
        this.refs.i.style.color = '#000'
        this.refs.i.style.borderRadius = 0
        this.refs.i.style.background = ''

    }


    hide = () => {
        this.setState({
            visible: false,
        });
    }

    handleVisibleChange = (visible) => {
        this.setState({ visible });
    }



    render() {
        return (
            <header>
                <h1 className={hc.logo}>
                    <img src={logo} alt="" width="100" height="56" />
                </h1>
                <div className="container">
                    <ul className={hc.h_Nav}>
                        {this.hNav()}

                    </ul>
                    {/* 搜索栏 */}
                    <div className={hc.search}>
                        <input type="text" placeholder="搜索" onFocus={this.tolong.bind(this)}
                            onBlur={this.offlong.bind(this)}
                            style={this.state.long} />
                        <i className="iconfont icon-sousuo" ref="i"></i>
                    </div>

                    {/* right-nav */}
                    <div className={hc.right}>
                        <ButtonToolbar className={hc.bt}>
                            <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={popoverClickRootClose}>
                                <Button className="iconfont icon-Aa"></Button>
                            </OverlayTrigger>
                        </ButtonToolbar>

                        <a href="/" className={hc.i}>
                            <img src={beta} alt="" width="56" height="25" />
                        </a>
                        <a href="/" className={hc.font} >登录</a>
                    </div>
                </div>

                <div className={hc.sigin}>
                   <span className={hc.reg}>
                   注册
                   </span>
                   <span className={hc.whte}>
                   写文章
                   </span>
                </div>

            </header>
        )
    }
}