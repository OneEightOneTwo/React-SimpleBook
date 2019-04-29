import { Component } from 'react'
import Header from '../../components/Header/Header'
import style from './homePage.css'
import { Carousel } from 'antd';
import { Row, Col } from 'react-bootstrap';
//图片
import lunbo1 from '../../assets/lunbo1.png'
import lunbo2 from '../../assets/lunbo2.jpg'
import lunbo3 from '../../assets/lunbo3.png'
import member from '../../assets/member.png'
import school from '../../assets/school.png'
import serialize from '../../assets/serialize.png'
import copyright from '../../assets/copyright.png'

export default class homePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            link: [{
                img: member,

            }, {
                img: school,

            }, {
                img: serialize,

            }, {
                img: copyright,

            }]
        }

    }

    link() {
        return this.state.link.map((item, index) => {
            return (
                <a href="/" className={style.link} key={index}>
                    <img src={item.img} alt="" />
                </a>
            )
        })
    }
    render() {

        return (
            <div>
                <Header />
                <main>
                    <div className="container">

                        <Row >
                            <Col md={8} className={style.carousel}>
                                {/* 轮播图 */}
                                <Carousel autoplay ref='lun'>
                                    <div><h3>
                                        <img src={lunbo1} alt="" />
                                    </h3></div>
                                    <div><h3>
                                        <img src={lunbo2} alt="" />
                                    </h3></div>  <div><h3>
                                        <img src={lunbo3} alt="" />
                                    </h3></div>
                                </Carousel>
                                {/* 文章 */}
                                <article>
                                    <ul className={style.list}>
                                        <li>
                                            
                                            <div className={style.content} >
                                            <p className={style.title}>
                                            <a href="/">小元有话说（十一）</a>
                                            </p>
                                            <p className={style.abstract}>今天是小元罢工的第一天，没啥说的，就跟大家聊聊小元自己吧。 好多朋友都有个疑问，小元是程序员、理工男、90后、为什么小元还会有这么好的文笔呢？（...</p>
                                            <div className={style.meta}>
                                            </div>
                                            </div>
                                            <a href="/" className={this.lr}>
                                            <img src="" alt=""/>
                                            </a>
                                        </li>
                                    </ul>
                                </article>
                            </Col>
                        {/* side */}
                            <Col md={3} className={style.side} >
                                {this.link()}
                            </Col>
                        </Row>
                    </div>



                </main>
            </div>
        )
    }
}