import { useState } from "react"
import CommentForm from './CommentForm';

export default function ShowComments(){

    let [comments, setComments] = useState([
        {
            username:"@khan",
            ratings:5,
            remarks:"nice place must visit."
        },
    ])

    let addNewComment = (comment) => {
        setComments((currComment) => 
           [...currComment, comment]
        );
    }
   
    return(
        <>

            <CommentForm addNewComment = {addNewComment}/>

           <div >
             <h3>All Comments</h3>
             <hr />

           {
            comments.map((ele, idx) => {
               return(
                <div className="ShowComments" key = {idx}>
                <p>{ele.remarks} (stars - {ele.ratings})</p>
                <p><b>- {ele.username}</b></p>
                </div>
               )
            })
           }
           </div>
        </>
    )
}