import '../app-info/app-info'
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployesList from '../employes-list/employes-list'
import EmplopyesAddForm from '../employes-add-form/employes-add-form'

import './app.css';

function App() {

    const data = [
        { name: 'Alex S.', salary: 2050, increase: false, id: 1 },
        { name: 'Denys C.', salary: 5000, increase: false, id: 2 },
        { name: 'John W.', salary: 780, increase: false, id: 3 },
    ];

    return (
        <div className='app'>
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployesList data={data} />
            <EmplopyesAddForm />
        </div>
    )
}


export default App;