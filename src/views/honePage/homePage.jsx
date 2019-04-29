import { Component } from 'react'
import Header from '../../components/Header/Header'
import style from './homePage.css'
import { Carousel } from 'antd';
import { Row, Col } from 'react-bootstrap';
//图片
import lunbo1 from '../../assets/lunbo1.png'
import lunbo2 from '../../assets/lunbo2.jpg'
import lunbo3 from '../../assets/lunbo3.png'
export default class homePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }
    render() {
       
        return (
            <div>
                <Header />
                <main>
                    <div className="container">
                        <Row>
                            <Col md={8} className={style.carousel}>
                                <Carousel autoplay  >
                                    <div><h3>
                                        <img src={lunbo1} alt="" />
                                        </h3></div>
                                        <div><h3>
                                        <img src={lunbo2} alt="" />
                                        </h3></div>  <div><h3>
                                        <img src={lunbo3} alt="" />
                                        </h3></div>
                           
                                </Carousel>,
                            </Col>
                        </Row>
                    </div>
                </main>
            </div>
        )
    }
}