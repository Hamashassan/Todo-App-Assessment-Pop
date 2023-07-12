import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';
import {Images} from '../../../theme';
import moment from 'moment';

interface ItemProps {
  data: Todo;
  onTickPress: (data: any) => void;
  onEditPress: (data: any) => void;
}

const Item: React.FC<ItemProps> = ({data, onTickPress, onEditPress}) => {
  const {completed, title, date} = data;

  const onItemCheckPress = () => {
    onTickPress(data);
  };

  const onEditItemPress = () => {
    onEditPress(data);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={onItemCheckPress}>
        <Image
          style={styles.icon}
          source={completed ? Images.check : Images.uncheck}
        />
      </Pressable>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{moment(date).format('DD/MM/YYYY')}</Text>
      </View>
      <Pressable onPress={onEditItemPress}>
        <Image style={styles.icon} source={Images.edit} />
      </Pressable>
    </View>
  );
};

export default Item;
