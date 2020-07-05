import React, { Component } from 'react'
import QR from './helpers/qrcode'
import ImageUpload from './helpers/uploadImg'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: null,
      somenteLink: false,
      qrDados: null
    };
    this.gerar = this.gerar.bind(this);
    this.updateImg = this.updateImg.bind(this);

  }

  updateImg(e) {
    this.setState({ img: e.imagePreviewUrl })
  }

  gerar() {

  }

  updadeState(e) {
    let dado = e.target;
    let qrDados = { ...this.state.qrDados }
    if (dado.name === 'somenteLink') {
      let somenteLink = this.state.somenteLink
      if(somenteLink){
        this.setState({qrDados:null})
      }
      this.setState({ somenteLink:!somenteLink })
    }
    else {
      if(this.state.somenteLink){
        qrDados = dado.value;
      }else{
        qrDados[dado.name] = dado.value;
      }
    }
    this.setState({ qrDados })
  }


  render() {
    return (
      <div>
        {this.state.qrDados ? <QR img={this.state.img} dados={this.state.qrDados} /> : null}
        {this.state.somenteLink ? null : <input onChange={(e) => { this.updadeState(e) }} name="nomeEmpresa" placeholder="Nome empresa" />}
        <input  onChange={(e) => { this.updadeState(e) }} name="link" placeholder="Link QR" />
        {this.state.qrDados ? <><p>Logo img</p><ImageUpload updateImg={this.updateImg.bind(this)} /><button onClick={()=> {this.setState({img:''})}}>Limpar img</button></> : null}
        <div>
          <p>Somente link</p>
          <input checked={this.state.somenteLink} type="checkbox" name="somenteLink" onChange={(e) => { this.updadeState(e) }} />
        </div>
      </div>
    )
  }
}

