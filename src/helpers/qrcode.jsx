import { QRCode } from 'react-qrcode-logo';
import React, { Component } from 'react'

export default class QR extends Component {
    constructor(props) {
        super(props);
        this.state = { qrCode: null, img:null };
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidUpdate(prevProps) {
        // Uso típico, (não esqueça de comparar as props):
        if (this.props.dados !== prevProps.dados) {
            let qrCode = this.props.dados || null
            if (qrCode != null) {
                this.setState({ qrCode })
            }
        }
        if (this.props.img !== prevProps.img) {
            let img = this.props.img || null
            if (img != null) {
                this.setState({ img })
            }
        }
    }
    

    componentDidMount() {
        let qrCode = { ...this.props.dados }
        let img = {...this.props.img}
        this.setState({ qrCode })
        this.setState({ img })
        console.log(this.state)
    }

    render() {
        return (
            <div>
                {this.state.qrCode ?
                    <QRCode value={JSON.stringify(this.state.qrCode)} logoImage={this.state.img} /> : null}
            </div>
        )
    }
}
