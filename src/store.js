import create from "zustand";
import produce from "immer";


export const useStore = create((set) => ({
    books: [{id: 0, title: "Harry Potter", complete: false, editable: false}, {id: 1, title: "The Ring", complete: false, editable: false}],
    add: (title) => set(produce((state) => { state.books.push({id: state.books.length, title: title, complete: false, editable: false})})),
    remove: (id) => set(produce((state) => { state.books.splice(id, 1)})),
    tryedit: ((id, editable) => set(produce((state) => { state.books[id].editable = !editable}))),
    edit: (id, title, editable) => set(produce((state) => {state.books[id].title = title; state.books[id].editable = !editable})),
    check: (id, complete) => set(produce((state) => { state.books[id].complete = !complete})),
    // edit ()
    // remove:
    // edit:
}))
