import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Divider,
} from "@material-ui/core/";
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import AssignmentReturnedTwoToneIcon from '@material-ui/icons/AssignmentReturnedTwoTone';
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import IconButton from '@material-ui/core/IconButton';

import { useDispatch } from "react-redux";
import {
  likeBook,
  deleteBook,
  updateBook,
  returnBook,
} from "../../../actions/books";
import useStyles from "./styles";
import 'react-toastify/dist/ReactToastify.css';
//importing bear image

import {toast} from 'react-toastify';

toast.configure()


const Book = ({ book, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const notify = () => {
    toast.error('There are no available copies of that book!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000});
}






  return (
    <Card className={classes.card}>
      <CardMedia
        variant="outlined"
        className={classes.media}
        image={book.image_url_l}
        title={book.title}
      />
      <div className={classes.overlay}>
        <Typography className={classes.booktitle} variant="p">{book.title}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{color: "white" }}
          size="small"
          onClick={() => setCurrentId(book._id)}
>
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>

      <div className={classes.details}>
        <Typography className={classes.publish} variant="body2" color="textSecondary">
          Publisher: {book.publisher}
        </Typography>
        <Typography className={classes.publish} variant="body2" color="textSecondary" component="p">
          Publication : {book.publication_year}
        </Typography>
      </div>
      <div >
      </div>



      <Typography className={classes.title} variant="h5" gutterBottom>
        {book.author}
      </Typography>
      <div className={classes.details}>
     
        </div>

        <div>
      </div>
      <CardContent>
      <div className={classes.details}>
      <Typography className={classes.available} variant="body2" color="textPrimary" component="p">
          Available : {book.available}
        </Typography>
        <Typography className={classes.copies} variant="body2" color="textSecondary">
          Copies: {book.copies}
        </Typography>
     
      </div>
      <div >
      </div>
      </CardContent>
      <CardActions className={classes.cardActions}>
      <IconButton aria-label="Borrow"
        class="cardbutton"
          size="small"
          color="primary"
          onClick={()=>{book.available > 0 ? dispatch(likeBook(book._id)) : notify()}}>
        
          <FavoriteTwoToneIcon /><br></br>
          
        <Typography  variant="h9" color="textSecondary">Borrow</Typography>
        </IconButton>
        <IconButton aria-label="Return"
          class="cardbutton"
          size="small"
          color="primary"
          onClick={() => dispatch(returnBook(book._id))}
        >
          <AssignmentReturnedTwoToneIcon fontSize="small" /><br></br>
          
          <Typography  variant="h9" color="textSecondary">Return</Typography>
        </IconButton>
        
        <IconButton aria-label="Delete"
        class="cardbutton"
          size="small"
          color="primary"
          onClick={() => {}}
        >
          <DeleteForeverTwoToneIcon fontSize="small" /><br></br>
          
          <Typography  variant="h9" color="textSecondary">Delete</Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default Book;

//        <Button size="small" color="primary" onClick={() => dispatch(deleteBook(book._id))}>
