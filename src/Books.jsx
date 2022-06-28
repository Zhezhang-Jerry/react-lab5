import { useStore } from "./store";
import { useState } from "react";
import Editor from "./Editor";
import "./App.css"

const Books = () => {
    const books = useStore((state) => state.books);
    const remove = useStore((state) => state.remove);
    const check = useStore((state) => state.check);
    const tryedit = useStore((state) => state.tryedit);
    const [filter, setFilter] = useState("All")
    const getFilterBookList = (bookList, filter) => {
        return bookList.filter((book) => {
            if (filter === "Completed") {
                return book.complete;
            } else if (filter === "Active") {
                return !book.complete;
            } else {
                return book;
            }
        })
    };
    return (
        <div>
            {
                getFilterBookList(books, filter).map(({title, id, complete, editable}) => (
                    <div className="allBook">
                        <p className="perBook" style={(complete === false) ? {} : {textDecoration: "line-through"}} onClick={() => {check(id, complete);}}>{title}</p>
                        <button onClick={() => remove(id)}>Delete</button>
                        <button onClick={() => {
                            tryedit(id, editable)
                            }}>Edit</button>
                        <Editor editable={editable} id={id} />
                    </div>
                ))
            }
            <div style={{padding: "50px"}}>
                <button onClick={() => setFilter("Completed")}>Read</button>
                <button onClick={() => setFilter("Active")}>Reading</button>
                <button onClick={() => setFilter("All")}>All</button>
            </div>
        </div>
    )
}

export default Books;