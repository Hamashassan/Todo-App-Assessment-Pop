import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
import {useDispatch} from 'react-redux';
import moment from 'moment';

import styles from './styles';
import {Util, NavigationService} from '../../utils';
import {addTodo, updateTodo, deleteTodo} from '../../ducks/Todo/actions';
import {Images} from '../../theme';
import CalendarItem from './CalendarItem';

interface Props {
  route: {
    params?: {
      editable?: boolean;
      data?: any;
    };
  };
}

const Calendar: React.FC<Props> = props => {
  const isEditTodo = props?.route?.params?.editable ?? false;
  const todoData = props?.route?.params?.data ?? {};

  const [value, setValue] = useState(isEditTodo ? todoData.title : '');
  const [date, setDate] = useState(
    todoData?.date ?? moment().format('YYYY-MM-DD'),
  );

  const dispatch = useDispatch();

  const onSubmitPress = () => {
    const todo = {
      completed: false,
      id: Util.generateUUID(10),
      title: value,
      userId: 1,
      date,
    };

    console.log('todo', todo);

    if (value !== '') {
      dispatch(addTodo(todo));
    } else {
      Alert.alert('Please write todo');
    }
  };

  const onUpdatePress = () => {
    const todo = {
      ...todoData,
      title: value,
      date,
    };

    if (value !== '') {
      dispatch(updateTodo(todo));
      NavigationService.pop();
    } else {
      Alert.alert('Please write todo');
    }
  };

  const onDeletePress = () => {
    dispatch(deleteTodo(todoData.id));
  };

  const onBackPress = () => {
    NavigationService.pop();
  };

  const onSelectDate = (date: Date) => {
    setDate(moment(date).format('YYYY-MM-DD'));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={onBackPress}>
        <Image style={styles.back} source={Images.back} />
      </Pressable>
      <ScrollView>
        <View>
          <View style={styles.topContainer}>
            <Text style={styles.title}>
              {isEditTodo ? 'Update Todo' : 'Add Todo'}
            </Text>
            {isEditTodo && (
              <Pressable onPress={onDeletePress}>
                <Image style={styles.delete} source={Images.delete} />
              </Pressable>
            )}
          </View>
        </View>
        <TextInput
          maxLength={50}
          onChangeText={text => setValue(text)}
          value={value}
          placeholder="Write Todo.."
          style={styles.input}
        />
        <CalendarItem initial={date} onSelect={onSelectDate} />

        <Pressable
          onPress={isEditTodo ? onUpdatePress : onSubmitPress}
          style={styles.submitBtn}>
          <Text style={styles.submitText}>
            {isEditTodo ? 'Update' : 'Submit'}
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Calendar;
