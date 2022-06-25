import './app-info.css';

const AppInfo = ({ numberEmployees, increaseNumber }) => {

    return (
        <div className="app-info">
            <h1>Облік співробітників компанії</h1>
            <h2>Загальна кількість співробітників: {numberEmployees}</h2>
            <h2>Премію отримають: {increaseNumber}</h2>
        </div>
    )
}

export default AppInfo;