export const getDueAtTimer = () => {
	const getDueAtTimer = [];
	const currentTime = new Date();
	let minutes = currentTime.getMinutes();

	let firstQHour = (Math.ceil((minutes + 1) / 15) * 15) % 60;

	if (minutes % 15 > 10) {
		firstQHour += 15;
	}

	let increment = 0;
	const minArr = ['00', 15, 30, 45, '00', 15, 30, 45];
	const newArr = minArr
		.slice(firstQHour / 15)
		.concat(minArr.slice(0, firstQHour / 15));
	for (let i = 0; i < 5; i++) {
		if (firstQHour === 0 || firstQHour === 60) {
			increment += 1;
		}
		firstQHour += 15;
        const hours = currentTime.getHours() + increment;
        if(hours === 24) {
            hours = '00';
        } else if(hours === 25) {
            hours = '01';
        }
		getDueAtTimer.push( hours + ':' + newArr[i]);
	}

	return getDueAtTimer;
};
