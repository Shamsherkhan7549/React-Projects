import { useState } from "react";
export default function CommentForm({addNewComment}){

    let [formData, setFormData] = useState({
        username:"",
        password:"",
        ratings:5,
        remarks:""
    });


    let handlingChanges = (event) => {
        setFormData((currData) => {
            return{
                ...currData, [event.target.name] : event.target.value
            }
        })
    };

    let handligSubmit = (event) => {
        event.preventDefault();

        addNewComment(formData);

        setFormData(
            {
                username:"",
                password:"",
                ratings:5,
                remarks:""
            }
        )
    }

    return(
        <>   <div className="CommentForm">
                <form onSubmit={handligSubmit}>
                    <label htmlFor="username">Username</label> <br />
                    <input type="text" name="username" id="username" placeholder = "username"  value={formData.username} onChange={handlingChanges} required/>
                    <br /><br />

                    <label htmlFor="ratings">Ratings</label> <br /> 
                    <input type="rating" name="ratings" id="ratings" min={1} max={5} placeholder = "rating" value={formData.ratings} onChange={handlingChanges} required/>


                    <br /><br />

                    <label htmlFor="remarks">Remarks</label> <br /> 
                    <textarea rows = "8" name="remarks" id="remarks" placeholder="remarks" value={formData.remarks} onChange={handlingChanges} required ></textarea>

                    <br /><br />

                    <button>Submit</button>
                </form>

              
            </div>
           

            
        </>
    )
}