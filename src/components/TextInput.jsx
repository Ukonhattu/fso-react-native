import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    textInput: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        margin: 10,
    },
    error: {
        borderColor: 'red',
    },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, styles.textInput, error && styles.error];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;