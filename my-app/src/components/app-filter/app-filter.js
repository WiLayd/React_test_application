import { Component } from 'react'
import './app-filter.css'


class AppFilter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            btnId: ''
        }
    }

    onBtnChange = (e) => {
        const btnId = e.target.id;
        this.setState({ btnId })
        this.props.onGetBtnId(btnId)
    }

    render() {
        return (
            <div className="btn-group" onClick={this.onBtnChange}>
                <button
                    className='btn btn-outline-light'
                    type="button">
                    Усі співробітники
                </button>
                <button
                    className='btn btn-outline-light'
                    id='btn-rise'
                    type="button">
                    На підвищення
                </button>
                <button
                    id='btn-salary'
                    className='btn btn-outline-light'
                    type="button">
                    З/П більше 1000$
                </button>
            </div>
        )
    }
}

export default AppFilter;