import moment from 'moment';

export const dateToDay = (date: string) => {
  //@ts-ignore
  return moment(date!).toLocaleString('en-us', {
    weekday: 'long',
  });
};

export const dateTitle = title => {
  return `${moment(title).calendar().slice(0, -12)}, ${moment(title).format(
    'DD MMM',
  )}`;
};
export const dateTitleDDMMM = title => {
  return moment(title).format('DD MMM');
};

export const unixToDate = dt => {
  return moment(dt * 1000).format('MM/DD/YYYY');
};

export const addDaysToDate = (days: number) => {
  var date = new Date();
  date.setDate(date.getDate() + days);
  return date;
};
