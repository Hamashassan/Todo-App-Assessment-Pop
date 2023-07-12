import React, {useState} from 'react';
import {View, Text, Platform} from 'react-native';
import moment from 'moment';
import {Calendar as RNCalendar, DayPressParams} from 'react-native-calendars';

interface Props {
  initial: string;
  onSelect: (date: string) => void;
}

const Calendar: React.FC<Props> = ({initial, onSelect}) => {
  const initialDate = moment().format('YYYY-MM-DD');

  const [selectedDate, setSelectedDate] = useState<{
    [date: string]: {selected: boolean; selectedColor: string};
  }>({
    [initial ?? initialDate]: {selected: true, selectedColor: 'red'},
  });

  return (
    <View>
      <RNCalendar
        initialDate={initial ?? initialDate}
        minDate={initialDate}
        onDayPress={(day: DayPressParams) => {
          setSelectedDate({
            [day.dateString]: {
              selected: true,
              selectedColor: 'red',
            },
          });

          onSelect(day.dateString);
        }}
        monthFormat={'MMMM yyyy'}
        onMonthChange={month => {
          console.log('month changed', month);
        }}
        hideArrows={false}
        firstDay={1}
        onPressArrowLeft={subtractMonth => subtractMonth()}
        onPressArrowRight={addMonth => addMonth()}
        disableAllTouchEventsForDisabledDays={true}
        enableSwipeMonths={true}
        markedDates={selectedDate}
      />
    </View>
  );
};

export default Calendar;
