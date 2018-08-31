import React, {
    Component
} from 'react'
import { hashHistory } from 'react-router';
import './modal.less';

class Modal extends Component {
    getpro = (self) => {
        console.log(self.props)
        hashHistory.push({
            pathname: '/fillinfor',
            query: { id: self.props.award_info_id }
        })
    }
    close = () => {
        this.props.onClose();
    }
    render() {
        let self = this;
        const {
            isvirtual,
            name,
            background
        } = this.props.source;

        let bottom = function () {
            if (isvirtual) {
                return (
                    <div className="content">
                        <p>兑奖说明</p>
                        <p>1.您的学管将在24小时内联系您兑奖</p>
                        <p>2.您可也以将此截图，联系自己的学管进行兑奖</p>
                    </div>
                )
            } else {
                return (
                    <div className="btnbox">
                        <div className="btn" onClick={() => { self.getpro(self) }}>立即领取</div>
                    </div>
                )
            }
        }
        return (
            <div className="win-popup">
                <div className="win">
                    <div className="congratulate"></div>
                    <div className="box">
                        <div className="imgbox">
                            <img src={background} alt="pro" />
                        </div>
                    </div>
                    <div className="title">恭喜你获得{name}</div>
                    {bottom()}
                    <div className="close" onClick={() => { this.close() }}></div>
                </div>
            </div>
        )
    }
}

export default Modal
