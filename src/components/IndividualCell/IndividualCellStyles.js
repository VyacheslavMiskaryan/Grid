import { makeStyles } from '@material-ui/core/styles';

const IndividualCellStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: 5,
      width: 150,
      height: 200,
    },
  },
}));

export default IndividualCellStyles;
