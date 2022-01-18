import axios from 'axios';
const USER_API_BASE_URL= "http://localhost:9090/users";

const BOOK_API_BASE_URL  = "http://localhost:9090/books"


class UserService{

    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }
    getBooks(){
        return axios.get(BOOK_API_BASE_URL);
    }
    createBook(books){
        return axios.post(BOOK_API_BASE_URL,books);
    }
    getBookById(BookId){
        return axios.get(BOOK_API_BASE_URL + '/'+ BookId);  
    }
    updateBook(books,BookId){
        return axios.put(BOOK_API_BASE_URL, '/', BookId,books);
    }
    deleteBook(BookId){
        return axios.delete(BOOK_API_BASE_URL + '/' + BookId);
    }

}
export default new UserService()