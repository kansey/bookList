import {
    CHANGE_AUTHOR,
    CHANGE_TITLE,
    CHANGE_ALLPAGE,
    CHANGE_CURRENTPAGE,
    CHANGE_STATUS,
    ADD_BOOK
} from './types';

export function handleClick () {
    return (dispatch, getState) => {
        const  state  = getState();
        dispatch(addBook(state.addBook.add));
    }
}

export function changeAuthor (e) {
    return {
        type: CHANGE_AUTHOR,
        author: e.target.value
    }
}

export function changeTitle (e) {
    return {
        type: CHANGE_TITLE,
        title: e.target.value
    }
}

export function changeAllpage (e) {
    return {
        type: CHANGE_ALLPAGE,
        allPage: e.target.value
    }
}

export function changeCurrentPage (e) {
    return {
        type: CHANGE_CURRENTPAGE,
        currentPage: e.target.value
    }
}

export function changeStatus (e) {
    return {
        type: CHANGE_STATUS,
        status: e.target.value
    }
}

export function addBook (prop) {
    return {
        type: ADD_BOOK,
        book: prop
    }
}
