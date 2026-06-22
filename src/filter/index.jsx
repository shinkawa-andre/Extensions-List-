import './index.scss'

function Filter({ filter, setFilter }) {
    return (
        <div className='filter'>
            <div className='divTitle'>
                <h1 className='title'>Extensions List</h1>
            </div>
            <div className="buttons">
                <button
                    id='allBtn'
                    className={filter === "all" ? "active" : ""}
                    onClick={() => setFilter("all")}>
                    All</button>
                <button
                    id='activeBtn'
                    className={filter === "active" ? "active" : ""}
                    onClick={() => setFilter("active")}>
                    Active</button>
                <button
                    id='inactiveBtn'
                    className={filter === "inactive" ? "active" : ""}
                    onClick={() => setFilter("inactive")}>
                    Inactive</button>
            </div>
        </div>
    )
}

export default Filter