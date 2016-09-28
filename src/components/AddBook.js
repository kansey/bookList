import React, { Component, PropTypes} from 'react';

const Add = ({ changeAuthor, changeTitle, changeAllpage, changeCurrentPage, changeStatus, handleClick}) => {
    return (
        <div>
            <p>Add Book</p>
            <span>Author:</span><input type="text" onChange={changeAuthor}/>
            <span>Title:</span><input type="text" onChange={changeTitle}/>
            <span>All page:</span><input type="number" onChange={changeAllpage}/>
            <span>Current page:</span><input type="number" onChange={changeCurrentPage}/>
            <span>Status:</span>
            <select size="3" onChange={changeStatus}>
                <option value="read">
                    read
                </option>
                <option value="reading">
                    reading
                </option>
                <option value="want to read">
                    want to read
                </option>
            </select>
            <button onClick={handleClick}>Add book</button>
        </div>
    );
}

Add.propTypes = {
    changeAuthor: PropTypes.func.isRequired,
    changeTitle: PropTypes.func.isRequired,
    changeAllpage: PropTypes.func.isRequired,
    changeCurrentPage: PropTypes.func.isRequired,
    changeStatus: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired
};

export default Add;
