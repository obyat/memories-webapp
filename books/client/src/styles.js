import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    
    zIndex: theme.zIndex.drawer+1,
    margin: '10px 0',
    width: 1540,
    boxSizing: "auto",
    display: 'flex',
    backgroundColor: 'rgba(0,0,128)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: "orange",
  },
  image: {
     marginLeft: '0px',
     marginRight: '0%',

    // float: 'left',
  },
  
  image2: {
    marginLeft: '0px',
    marginRight: '0%',

   // float: 'left',
 },
  [theme.breakpoints.down('sm')]: {
  mainContainer: {
    // flexDirection:"column-reverse"
    
  } 
}
  
}));