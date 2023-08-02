import { Animated } from "react-native";
import styled from "styled-components/native";

export const Container = styled(Animated.View)`
  height: 100px;
  margin-top: 5px;
`;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingLeft: 10, paddingRight: 20 },
  showsHorizontalScrollIndicator: true,
})``;

export const Container1 = styled(Animated.View)`
  width: 300px;
  height: 412px;
  margin-top: 5px;
  align-items: center;
  justify-content: flex-start;
`;

export const TabsContainer1 = styled.ScrollView.attrs({
  vertical: true,
  contentContainerStyle: { paddingLeft: 10, paddingRight: 20 },
  showsVerticalScrollIndicator: false,
  backgroundColor: "black",
  borderRadius: 25,
  justifyContent: "flex-start",

  borderWidth: 10,

  borderColor: "#808080",
  alignItems: "center",
})``;

export const TabItem = styled.View`
  width: auto;
  height: 100px;
  background: #4fb8ce;
  border-radius: 50px;
  border-color: black;
  border-top-width: 4px;
  border-left-width: 4px;
  border-bottom-width: 8px;
  border-right-width: 8px;
  margin-left: 10px;
  padding: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
export const TabItemG = styled.View`
  width: 130px;
  height: 130px;
  background: green;
  border-radius: 80px;
  border-color: #90ee90;
  border-width: 3px;
  margin-left: 15px;
  padding: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
export const TabItemY = styled.View`
  width: 110px;
  height: 110px;
  background: yellow;
  border-radius: 80px;
  border-color: #fff;
  border-width: 3px;
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
export const TabItemR = styled.View`
  width: 132px;
  height: 130px;
  background: red;
  border-radius: 100px;
  border-color: #fff;
  margin-left: 5px;
  border-width: 3px;
  margin-bottom: 25px;
  padding: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const TabText1 = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  border-width: 1px;
  border-color: white;
  padding: 5px;
  margin-bottom: 8px;
`;

export const TabText = styled.Text`
  font-size: 13px;
  color: #fff;
  font-weight: bold;
`;

export const TabTextB = styled.Text`
  font-size: 14px;
  color: #000;
  font-weight: bold;
`;
