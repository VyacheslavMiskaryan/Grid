import { makeStyles } from '@material-ui/core/styles';

import colorSet from '../../colors';

const WidgetAreaStyles = makeStyles(() => ({
  root: {
    width: '100%',
    maxWidth: '15%',
    height: 830,
    overflow: 'auto',
    backgroundColor: colorSet.background,
  },
}));

export default WidgetAreaStyles;
