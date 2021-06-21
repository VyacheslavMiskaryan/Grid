import { makeStyles } from '@material-ui/core/styles';

import colorSet from '../../colors';

const GridFieldStyles = makeStyles(() => ({
  field: {
    marginLeft: 10,
    width: '100%',
    maxWidth: 900,
    height: '100%',
    minHeight: 600,
    backgroundColor: colorSet.background,
    display: 'flex',
    flexDirection: 'column',
  },
  listItem: {
    '& span': {
      fontSize: 14,
      wordBreak: 'break-all',
    },
  },
  emptyItem: {
    margin: 5,
    padding: 4,
    width: '15%',
    height: '100%',
    minHeight: 100,
    backgroundColor: colorSet.secondBackground,
  },
  rowsField: {
    display: 'flex',
  },
}));

export default GridFieldStyles;
