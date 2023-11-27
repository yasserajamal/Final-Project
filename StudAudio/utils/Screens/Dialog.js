import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
const Dialog = ({ open, onClose, children }) => {
  if (open) {
    return (
      <div className="dialogContainer">
        <div className="dialog">
          <Text>Speech settings</Text>
          {children}
          <span className="dialog__close" onClick={onClose}>
            Done
          </span>
        </div>
      </div>
    );
  }
  return null;
};

export default Dialog;
