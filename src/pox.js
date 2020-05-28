function PoxFilterMonthDay(days, month, year) {
  if (days > 365) {
    this.days -= 365;
  }
  const d = new Date();
  let day = 0;
  for (let index = month; index < 12; index += 1) {
    day = (new Date(d.getFullYear() + year, index, 0).getDate()) + day;
  }
  if ((days - day) % 30 > 0) {
    return (days - day) % 30;
  }
  return (days - day) % 30 * -1;
}

function PoxTimeCounterFormat1(poxTime = new Date()) {
  const realTime = new Date();
  realTime.setMonth(realTime.getMonth() + 1); // Fix month Counter issue
  const diffTime = poxTime - realTime;
  // millisecond
  const millisecond = Math.floor((diffTime) % 1000);
  // second
  const second = Math.floor((diffTime / 1000) % 60);
  // minutes
  const minute = Math.floor((diffTime / (1000 * 60)) % 60);
  // hours
  const hour = Math.floor((diffTime / (1000 * 60 * 60)) % 24);
  // days
  let days = PoxFilterMonthDay(Math.floor((diffTime / (1000 * 60 * 60 * 24))), Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30) % 12), Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30 * 12)));
  if (days < 0) {
    days = Math.floor((diffTime / (1000 * 60 * 60 * 24))) + 1;
  }
  // month

  const month = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30) % 12);

  // years
  const year = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30 * 12));

  return [year, month, days, hour, minute, second, millisecond];
}
function PoxTimeCounterFormat2(poxTime = new Date()) {
  const realTime = new Date();
  realTime.setMonth(realTime.getMonth() + 1); // Fix month Counter issue
  const diffTime = poxTime - realTime;
  // millisecond
  const millisecond = Math.floor((diffTime) % 1000);
  // second
  const second = Math.floor((diffTime / 1000) % 60);
  // minutes
  const minute = Math.floor((diffTime / (1000 * 60)) % 60);
  // hours
  const hour = Math.floor((diffTime / (1000 * 60 * 60)) % 24);
  // days
  // days
  let days = PoxFilterMonthDay(Math.floor((diffTime / (1000 * 60 * 60 * 24))), Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30) % 12), Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30 * 12)));
  if (days < 0) {
    days = Math.floor((diffTime / (1000 * 60 * 60 * 24))) + 1;
  }
  // month
  const month = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30));

  return [month, days, hour, minute, second, millisecond];
}
function PoxTimeCounterFormat3(poxTime = new Date()) {
  const realTime = new Date();
  realTime.setMonth(realTime.getMonth() + 1); // Fix month Counter issue
  const diffTime = poxTime - realTime;
  // millisecond
  const millisecond = Math.floor((diffTime) % 1000);
  // second
  const second = Math.floor((diffTime / 1000) % 60);
  // minutes
  const minute = Math.floor((diffTime / (1000 * 60)) % 60);
  // hours
  const hour = Math.floor((diffTime / (1000 * 60 * 60)) % 24);
  // days
  const days = Math.floor((diffTime / (1000 * 60 * 60 * 24)));

  return [days, hour, minute, second, millisecond];
}
function PoxTimeCounterFormat4(poxTime = new Date()) {
  const realTime = new Date();
  realTime.setMonth(realTime.getMonth() + 1); // Fix month Counter issue
  const diffTime = poxTime - realTime;
  // millisecond
  const millisecond = Math.floor((diffTime) % 1000);
  // second
  const second = Math.floor((diffTime / 1000) % 60);
  // minutes
  const minute = Math.floor((diffTime / (1000 * 60)) % 60);
  // hours
  const hour = Math.floor((diffTime / (1000 * 60 * 60)));

  return [hour, minute, second, millisecond];
}
function PoxTimeCounterFormat5(poxTime = new Date()) {
  const realTime = new Date();
  realTime.setMonth(realTime.getMonth() + 1); // Fix month Counter issue
  const diffTime = poxTime - realTime;
  // millisecond
  const millisecond = Math.floor((diffTime) % 1000);
  // second
  const second = Math.floor((diffTime / 1000) % 60);
  // minutes
  const minute = Math.floor((diffTime / (1000 * 60)));

  return [minute, second, millisecond];
}
