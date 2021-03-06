import { Component } from 'react';

import '../app-info/app-info'
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployesList from '../employes-list/employes-list'
import EmplopyesAddForm from '../employes-add-form/employes-add-form'

import './app.css';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
                { name: 'Alex S.', salary: 2050, increase: false, rise: true, id: 1 },
                { name: 'Denys C.', salary: 5000, increase: true, rise: false, id: 2 },
                { name: 'John W.', salary: 780, increase: false, rise: false, id: 3 },
            ],
            term: '',
            btnId: ''
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {

            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addEmployees = (name, salary) => {
        if (name !== '' && salary !== '') {
            const newItem = {
                name,
                salary,
                increase: false,
                rise: false,
                id: this.maxId++
            }

            this.setState(({ data }) => {
                const newArr = [...data, newItem]
                return {
                    data: newArr
                }
            })
        }
    }

    onTogleIncrease = (id) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, increase: !item.increase }
                }
                return item
            })
        }))
    }

    onTogleRise = (id) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, rise: !item.rise }
                }
                return item
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({ term })
    }

    onGetBtnId = (id) => {
        this.setState({ btnId: id })
    }

    changeFilter = (id, items) => {
        if (id === 'btn-rise') {
            return items.filter(item => item.rise === true)
        } else if (id === 'btn-salary') {
            return items.filter(item => item.salary > 1000)
        }
        return items
    }




    render() {

        const { data, term, btnId } = this.state
        const employees = this.state.data.length
        const employeesIncrease = this.state.data.filter(item => item.increase).length
        const filterData = this.changeFilter(btnId, this.searchEmp(data, term))

        return (
            <div className='app'>
                <AppInfo numberEmployees={employees}
                    increaseNumber={employeesIncrease} />

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter onGetBtnId={this.onGetBtnId} />
                </div>

                <EmployesList data={filterData}
                    onDelete={this.deleteItem}
                    onTogleIncrease={this.onTogleIncrease}
                    onTogleRise={this.onTogleRise} />
                <EmplopyesAddForm
                    onAdd={this.addEmployees} />
            </div>
        )
    }
}


export default App;