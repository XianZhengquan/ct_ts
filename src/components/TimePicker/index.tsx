import {Dayjs} from 'dayjs';
import * as React from 'react';
import {DatePicker} from './../index';
import {PickerTimeProps} from 'antd/es/date-picker/generatePicker';
import {Omit} from 'antd/es/_util/type';

export interface ITimePickerProps extends Omit<PickerTimeProps<Dayjs>, 'picker'> {
}

const TimePicker = React.forwardRef<any, ITimePickerProps>((props, ref) => {
    return <DatePicker {...props} picker="time" mode={undefined} ref={ref} />;
});

TimePicker.displayName = 'TimePicker';

export default TimePicker;
