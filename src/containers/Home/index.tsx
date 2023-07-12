import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Pressable,
  ActivityIndicator,
} from 'react-native';

import {setTodos, updateTodo} from '../../ducks/Todo/actions';
import {todoSelectors} from '../../ducks/Todo';
import {NavigationService} from '../../utils';
import styles from './styles';
import Item from './Item';

interface RootState {
  todo: {
    todos: Todo[];
  };
}

interface Props {
  navigation: object;
  route: object;
}

const Home: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) =>
    todoSelectors.getTodos(state),
  );

  const fetchTodos = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos',
      );
      const data = await response.json();
      dispatch(setTodos(data));
    } catch (error) {
      console.error('Error fetching TODOs:', error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const onItemTickPress = (data: Todo) => {
    const updatedTodo: Todo = {...data, completed: !data.completed};
    dispatch(updateTodo(updatedTodo));
  };

  const onAddPress = () => {
    NavigationService.navigate('Calendar');
  };

  const onEditPress = (data: Todo) => {
    NavigationService.navigate('Calendar', {editable: true, data});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>My Todo App</Text>
        <Pressable onPress={onAddPress}>
          <Text style={styles.add}>+</Text>
        </Pressable>
      </View>
      {todos.length > 0 ? (
        <FlatList
          data={todos}
          // data={todos.sort((a, b) => a.completed - b.completed)} // uncomment to sort the todos
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <Item
              data={item}
              onTickPress={onItemTickPress}
              onEditPress={onEditPress}
            />
          )}
        />
      ) : (
        <ActivityIndicator style={{flex: 1}} />
      )}
    </SafeAreaView>
  );
};

export default Home;
