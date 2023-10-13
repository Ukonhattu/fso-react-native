
import Text from "./Text";
import {Link} from 'react-router-native';

const AppBarTab = ({text, linkTo}) => {
    return (
        <Link to={linkTo}>
            <Text fontWeight='bold' fontSize='subheading' color='textSecondary'>{text}</Text>
        </Link>
    );
}

export default AppBarTab;