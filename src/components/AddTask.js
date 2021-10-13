import {useState} from 'react';
import Draggable from 'react-draggable';


const AddTask = ({onAdd}) => {

     const[text, setText] = useState('')
     const[day, setDay] = useState('')
     const[reminder, setReminder] = useState(false)
     const[time, getTime] = useState();

     const onSubmit = (e) => {
         e.preventDefault()
         if(!text){
             alert('Please add a task')
             return
         }
         onAdd({ text, day, reminder, time })

         setText('')
         setDay('')
         setReminder(false)
         getTime(Date().toLocaleString());
     }

  return (
    <Draggable>
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Tell the class your name</label>
        <input type="text" 
        placeholder="'Mr. Anderson'" 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label></label>
        <input type="text" placeholder="What do you have to say to the kids?" 
        value={day} 
        onChange={(e) => setDay(e.target.value)}/>
      </div>
      <div className="form-control form-control-check">
      </div>
      <input onClick={ () =>this.getData() } type="submit" value="Save Task" className="btn btn-block" />
    </form>
    </Draggable>
  );
};

export default AddTask;
