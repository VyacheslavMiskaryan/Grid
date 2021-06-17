import { makeStyles } from '@material-ui/core/styles';

const WidgetAreaStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 200,
    height: '100%',
    maxHeight: 830,
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
  },
}));

export default WidgetAreaStyles;
