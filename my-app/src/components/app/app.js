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
            ]
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


    render() {

        const employees = this.state.data.length
        const employeesIncrease = this.state.data.filter(item => item.increase).length

        return (
            <div className='app'>
                <AppInfo numberEmployees={employees}
                    increaseNumber={employeesIncrease} />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployesList data={this.state.data}
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