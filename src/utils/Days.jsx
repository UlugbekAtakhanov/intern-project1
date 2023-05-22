import { format, parse } from "date-fns";

export const days = (start, end) => {
    let arr = [];
    let current = new Date(start);
    let last = new Date(end);

    while (current <= last) {
        arr.push(current.toDateString());
        current.setDate(current.getDate() + 1);
    }

    const newArr = arr.map(item => {
        const parsedDate = parse(item, 'EEE MMM dd yyyy', new Date());
        const formattedDate = format(parsedDate, 'dd-MMM');
        return formattedDate
    })
    return newArr;
}