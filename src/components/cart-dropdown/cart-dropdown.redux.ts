import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../redux/store';

const mapState = ({ cart: { visible } }: RootState) => ({ visible });

export const reduxStoreConnector = connect(mapState, {});

type PropsFromRedux = ConnectedProps<typeof reduxStoreConnector>;

export interface CartDropDownProps extends PropsFromRedux {}
