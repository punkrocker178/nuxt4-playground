export default function useFormatDate(date: string) {
  const unixTimestampStr = date.replace(/\/Date\((\d+)\)\//, '$1');
  const unixTimestamp = unixTimestampStr ? parseInt(unixTimestampStr, 10) : Date.now();
  return new Date(unixTimestamp).toDateString();
}