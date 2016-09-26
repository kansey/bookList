import React, { Component, PropTypes} from 'react';

const Add = ({}) => {
    return (
        <div>
            <p>Add Book</p>
            <span>Author:</span><input type="text" />
            <span>Title:</span><input type="text" />
            <span>All page:</span><input type="number" />
            <span>Current page:</span><input type="number" />
            <span>Status:</span>
            <select size="3">
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
            <button >Add book</button>
        </div>
    );
}

Add.propTypes = {};

export default Add;
