import { Pressable } from "react-native";
import Text from "./Text";

const AppBarTab = ({text}) => {
    return (
        <Pressable>
            <Text fontWeight='bold' fontSize='subheading' color='textSecondary'>{text}</Text>
        </Pressable>
    );
}

export default AppBarTab;