import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import './App.css'

class App extends Component {
  state = {text: '', b: false, i: false, u: false}

  onText = e => {
    this.setState({text: e.target.value})
  }

  onB = () => {
    this.setState(prevState => ({b: !prevState.b}))
  }

  onI = () => {
    this.setState(prevState => ({i: !prevState.i}))
  }

  onU = () => {
    this.setState(prevState => ({u: !prevState.u}))
  }

  render() {
    const {text, b, i, u} = this.state

    return (
      <div className="main-container">
        <div className="b1">
          <h1 className="title">Text Editor</h1>
          <img
            className="web-img"
            src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
            alt="text editor"
          />
        </div>
        <div className="b2">
          <ul className="btn-box">
            <li>
              <button
                type="button"
                data-testid="bold"
                className={`${b && 'bt'}`}
                onClick={this.onB}
              >
                <VscBold size={25} />
              </button>
            </li>
            <li>
              <button
                type="button"
                data-testid="italic"
                className={`${i && 'it'}`}
                onClick={this.onI}
              >
                <GoItalic size={25} />
              </button>
            </li>
            <li>
              <button
                type="button"
                data-testid="underline"
                className={`${u && 'ut'}`}
                onClick={this.onU}
              >
                <AiOutlineUnderline size={25} />
              </button>
            </li>
          </ul>
          <textarea
            className={`ta ${b && 'tb'} ${i && 'ti'} ${u && 'tu'}`}
            value={text}
            onChange={this.onText}
            rows="30"
          />
        </div>
      </div>
    )
  }
}

export default App
