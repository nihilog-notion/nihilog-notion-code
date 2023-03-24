import moment from 'moment-timezone';
import 'moment/locale/ko';

export function setDate(date: string | Date) {
  const diff = moment().diff(date, 'days');

  if (diff >= 7) {
    return moment(date)
      .locale('ko')
      .tz('Asia/Seoul')
      .format('YYYY년 M월 D일 HH:mm:ss');
  } else {
    return moment(date)
      .locale('ko')
      .tz('Asia/Seoul')
      .fromNow();
  }
}
