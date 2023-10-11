import { Pressable } from "react-native";
import Text from "./Text";
import {Link} from 'react-router-native';

const AppBarTab = ({text, linkTo}) => {
    return (
        <Pressable>
            <Link to={linkTo}>
                <Text fontWeight='bold' fontSize='subheading' color='textSecondary'>{text}</Text>
            </Link>
        </Pressable>
    );
}

export default AppBarTab;