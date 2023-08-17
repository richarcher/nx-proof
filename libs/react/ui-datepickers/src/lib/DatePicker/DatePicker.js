import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cx } from '@emotion/css';

import addDays from 'date-fns/add_days';
import addMonths from 'date-fns/add_months';
import addWeeks from 'date-fns/add_weeks';
import differenceInCalendarWeeks from 'date-fns/difference_in_calendar_weeks';
import endOfDay from 'date-fns/end_of_day';
import format from 'date-fns/format';
import getDay from 'date-fns/get_day';
import isAfter from 'date-fns/is_after';
import isBefore from 'date-fns/is_before';
import isEqual from 'date-fns/is_equal';
import isSameMonth from 'date-fns/is_same_month';
// import isValid from 'date-fns/is_valid'
import startOfDay from 'date-fns/start_of_day';
import startOfMonth from 'date-fns/start_of_month';

import { colors } from '@offerzen/react/design-tokens';
import {
  Button,
  FormHelpText,
  FormErrorMessage,
} from '@offerzen/react/ui-core';
// import Button from '../Button'
// import FormErrorMessage from '../FormErrorMessage'
// import FormHelpText from '../FormHelpText'
// import Icon from '../Icon'
import styles, { wrapperTheme, labelTheme, dayTheme } from './styles';

// import chevronLeft from '../Icon/icons/chevron-left'
// import chevronRight from '../Icon/icons/chevron-right'
// import calendar from '../Icon/icons/calendar'

class DatePicker extends Component {
  state = {
    open: false,
    activeMonth: null,
    activeDate: null,
  };

  componentDidMount() {
    const { input, minDate, maxDate, onChange, ...props } = this.props;
    const value = input.value || props.value;
    let activeDate = value ? new Date(value) : new Date();

    if (minDate || maxDate) {
      // If supplied date is out of range, adjust and push the change
      activeDate = this.adjustDateToRange(activeDate);

      // Make sure to push the new initial date, if there was any to begin with
      const handler = input.onChange || onChange;
      if (value && handler) handler(activeDate);
    }

    this.setState({ activeMonth: activeDate, activeDate });
  }

  adjustDateToRange = (date) => {
    const { minDate, maxDate } = this.props;
    let newDate = date;

    // if (minDate && isBefore(date, minDate)) {
    //   newDate = minDate
    // }

    // if (maxDate && isAfter(date, maxDate)) {
    //   newDate = maxDate
    // }

    return newDate;
  };

  selectDate = (date) => {
    const { input, onChange } = this.props;

    const newDate = this.adjustDateToRange(date);
    this.setState({ activeDate: newDate, activeMonth: newDate });

    const handler = input.onChange || onChange;
    if (handler) handler(newDate);
  };

  closePicker = (ev) => {
    this.setState({ open: false });

    const handler = this.props.input.onBlur || this.props.onBlur;
    if (handler) handler(ev);
  };

  render() {
    const { open, activeMonth, activeDate } = this.state;
    const {
      meta,
      input,
      theme,
      className,
      helpText,
      tabIndex,
      readOnly,
      ...props
    } = this.props;

    const name = input.name || props.name;
    const errored = meta.touched && meta.error;

    const value = input.value || props.value;
    // const formatter = props.formatter || format
    // const formattedValue = isValid(new Date(value)) ? formatter(value, 'D MMMM YYYY') : ''

    const firstOfMonth = startOfMonth(activeMonth);
    const prevMonthDays = getDay(firstOfMonth);
    const firstDayInCalendar = addDays(firstOfMonth, -prevMonthDays);

    const weeks = new Array(
      differenceInCalendarWeeks(addMonths(firstOfMonth, 1), firstOfMonth) + 1
    ).fill(new Array(7).fill(0));
    const calendarWeeks = weeks.map((week, weekIndex) =>
      week.map((_, dayInWeek) => {
        const date = addWeeks(
          addDays(firstDayInCalendar, dayInWeek),
          weekIndex
        );
        const beforeMinDate = props.minDate
          ? isBefore(startOfDay(date), startOfDay(props.minDate))
          : false;
        const afterMaxDate = props.maxDate
          ? isAfter(endOfDay(date), endOfDay(props.maxDate))
          : false;

        return {
          day: format(date, 'D'),
          selected:
            isEqual(startOfDay(activeDate), startOfDay(date)) && !!value,
          inMonth: isSameMonth(activeMonth, date),
          disabled: beforeMinDate || afterMaxDate,
          ...(!beforeMinDate &&
            !afterMaxDate && {
              onClick: () => {
                this.selectDate(date);
              },
            }),
        };
      })
    );

    return (
      <div
        className={cx(
          styles.wrapper,
          className,
          wrapperTheme(theme),
          errored && styles.wrapperError
        )}
      >
        {/* Render body first so the "input" appears on top */}
        {open && (
          <>
            <div className={styles.body} tabIndex="-1">
              <div className={styles.calendarHeader}>
                <div
                  className={styles.calendarNavigation}
                  onClick={() =>
                    this.setState({ activeMonth: addMonths(activeMonth, -1) })
                  }
                >
                  {/* <Icon icon={chevronLeft} size={20} color={colors.grayChateau} /> */}
                  ◀
                </div>

                <strong>{format(activeMonth, 'MMMM YYYY')}</strong>

                <div
                  className={styles.calendarNavigation}
                  onClick={() =>
                    this.setState({ activeMonth: addMonths(activeMonth, 1) })
                  }
                >
                  {/* <Icon icon={chevronRight} size={20} color={colors.grayChateau} /> */}
                  ▶
                </div>
              </div>

              <table className={styles.calendar}>
                <thead>
                  <tr>
                    <th>Su</th>
                    <th>Mo</th>
                    <th>Tu</th>
                    <th>We</th>
                    <th>Th</th>
                    <th>Fr</th>
                    <th>Sa</th>
                  </tr>
                </thead>

                <tbody>
                  {calendarWeeks.map((row, rowIndex) => {
                    return (
                      <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => {
                          return (
                            <td
                              key={cellIndex}
                              className={cx(
                                styles.day,
                                cell.disabled && styles.dayDisabled,
                                !cell.inMonth && styles.dayOut
                              )}
                            >
                              <span
                                className={cx(
                                  styles.dayWrapper,
                                  !cell.inMonth && styles.dayWrapperOut,
                                  cell.selected && dayTheme(theme, cell.inMonth)
                                )}
                                onClick={cell.onClick}
                              >
                                {cell.day}
                              </span>
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <div className={styles.footer}>
                <Button
                  theme={theme}
                  size="small"
                  label="Today"
                  variant="outlined"
                  onClick={() => this.selectDate(new Date())}
                />
                <Button
                  theme={theme}
                  size="small"
                  label="Done"
                  onClick={() => this.closePicker()}
                />
              </div>
            </div>

            <div className={styles.overlay} onClick={this.closePicker} />
          </>
        )}

        <div
          className={cx(
            styles.label,
            labelTheme(theme),
            open && styles.openLabel,
            errored && styles.errorLabel
          )}
          tabIndex={tabIndex}
          readOnly={readOnly}
          onClick={(ev) => {
            if (open) {
              this.closePicker();
              return;
            }

            this.setState({ open: true });

            const focusHandler = input.onFocus || props.onFocus;
            if (focusHandler) focusHandler(ev);
          }}
        >
          <input
            {...input}
            type="text"
            className={styles.input}
            tabIndex="-1"
            readOnly
            // eslint-disable-next-line no-return-assign
            ref={(el) => (this.input = el)}
            name={name}
            // value={formattedValue}
            placeholder={props.placeholder}
            onBlur={(ev) => ev.preventDefault()}
          />

          <div className={styles.icon}>
            {/* <Icon icon={calendar} size={18} color={errored ? colors.mandy : colors.geyser} /> */}
            📅
          </div>
        </div>

        {helpText && !errored && <FormHelpText text={helpText} />}
        {errored && <FormErrorMessage text={meta.error} />}
      </div>
    );
  }
}

DatePicker.propTypes = {
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
  input: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    name: PropTypes.string,
  }),
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  tabIndex: PropTypes.string,
  readOnly: PropTypes.bool,
  helpText: PropTypes.string,
  formatter: PropTypes.func,
  theme: PropTypes.oneOf([
    '',
    'primary',
    'secondary',
    'success',
    'warning',
    'error',
    'legacy',
    'dark',
    'tertiary',
    'info',
  ]),
  className: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  minDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  maxDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
};

DatePicker.defaultProps = {
  meta: {},
  input: {},
  name: '',
  value: '',
  tabIndex: '0',
  theme: 'primary',
};

export default DatePicker;
