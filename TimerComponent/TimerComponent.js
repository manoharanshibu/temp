import React, { useState } from 'react';
import ButtonGroup from 'components/MAUI/ButtonGroup';
import Button from 'components/MAUI/Button';
import IconButton from 'components/IconButton';
import { LineIcon } from 'components/icons';
import { PlusIcon } from 'components/icons';
import TextField from 'components/TextField';
import { getDueAtTimer } from './GetDueAtTimer';

import { Box } from '@mui/material';
import { StyledFormLabel } from './TimerComponent.styles';
import ControlPopover from 'components/ControlPopover';

export const TimerComponent = () => {
	const [selectedState, setSelectedState] = useState('duein');
	const [selectedDueAt, setSlectedDueAt] = useState(0);
	const [selectedDueIn, setSlectedDueIn] = useState(2);
	const [selectedGoodFor, setSelectedGoodFor] = useState(5);

	let [dueAt, setDueAt] = useState(getDueAtTimer()[0]);

	const setIncrement = (increment) => {
		let mins = Number(dueAt.toString().split(':')[1]) + increment;
		let hours = Number(dueAt.toString().split(':')[0]);
		if (mins >= 60) {
			mins = '0';
			hours += 1;
		} else if (mins <= -1) {
			mins = '59';
			hours -= 1;
		}
		if (mins < 10) {
			mins = `0${mins}`;
		}
		if (hours === 24) {
			hours = '0';
		}
		if (hours === -1) {
			hours = '23';
		}
		if (hours < 10) {
			hours = `0${hours}`;
		}
		setDueAt(`${hours}:${mins}`);

		setSlectedDueAt(0);
	};
	return (
		<ControlPopover
			control={
				<Button variant="contained" color="primary">
					Due in 5 minutes, good for 20 minutes...
				</Button>
			}
		>
			<div className="timerComponent">
				<ButtonGroup
					variant="contained"
					color="primary"
					aria-label="primary button group"
				>
					<Button
						variant="contained"
						size="medium"
						aria-label="Due in"
						color={selectedState === 'duein' ? 'primary' : 'secondary'}
						onClick={() => setSelectedState('duein')}
					>
						Due in
					</Button>
					<Button
						variant="contained"
						size="medium"
						aria-label="Due at"
						color={selectedState === 'dueat' ? 'primary' : 'secondary'}
						onClick={() => setSelectedState('dueat')}
					>
						Due at
					</Button>
					<Button
						variant="contained"
						size="medium"
						aria-label="ASAP"
						color={selectedState === 'asap' ? 'primary' : 'secondary'}
						onClick={() => setSelectedState('asap')}
					>
						ASAP
					</Button>
				</ButtonGroup>
				{selectedState === 'duein' && (
					<>
						<br />
						<br />
						<StyledFormLabel>Due in (mins)</StyledFormLabel>
						<ButtonGroup variant="contained" aria-label="primary button group">
							<Button
								variant="contained"
								size="medium"
								aria-label="2"
								color={selectedDueIn === 2 ? 'primary' : 'secondary'}
								onClick={() => setSlectedDueIn(2)}
							>
								2
							</Button>
							<Button
								variant="contained"
								size="medium"
								aria-label="3"
								color={selectedDueIn === 3 ? 'primary' : 'secondary'}
								onClick={() => setSlectedDueIn(3)}
							>
								3
							</Button>
							<Button
								variant="contained"
								size="medium"
								aria-label="5"
								color={selectedDueIn === 5 ? 'primary' : 'secondary'}
								onClick={() => setSlectedDueIn(5)}
							>
								5
							</Button>
							<Button
								variant="contained"
								size="medium"
								aria-label="10"
								color={selectedDueIn === 10 ? 'primary' : 'secondary'}
								onClick={() => setSlectedDueIn(10)}
							>
								10
							</Button>
							<Button
								variant="contained"
								size="medium"
								aria-label="15"
								color={selectedDueIn === 15 ? 'primary' : 'secondary'}
								onClick={() => setSlectedDueIn(15)}
							>
								15
							</Button>
						</ButtonGroup>
					</>
				)}
				{selectedState === 'dueat' && (
					<>
						<br />
						<br />
						<StyledFormLabel>Due at (mins)</StyledFormLabel>
						<ButtonGroup
							variant="contained"
							color="primary"
							aria-label="primary button group"
						>
							<Button
								variant="contained"
								size="medium"
								aria-label="2"
								color={selectedDueAt === 0 ? 'primary' : 'secondary'}
								onClick={() => setSlectedDueAt(0)}
							>
								{dueAt}
							</Button>
							<IconButton
								variant="contained"
								size="large"
								aria-label="decrement"
								color={selectedDueAt === 0 ? 'primary' : 'secondary'}
								onClick={() => setIncrement(-1)}
								sx={{
									ml: 0.2,
								}}
							>
								<LineIcon fontSize="9px" />
							</IconButton>
							<IconButton
								variant="contained"
								size="large"
								aria-label="increment"
								color={selectedDueAt === 0 ? 'primary' : 'secondary'}
								onClick={() => setIncrement(1)}
								sx={{
									mr: 1,
								}}
							>
								<PlusIcon fontSize="9px" />
							</IconButton>
							<Button
								variant="contained"
								size="medium"
								aria-label="2"
								onClick={() => setSlectedDueAt(1)}
								color={selectedDueAt === 1 ? 'primary' : 'secondary'}
							>
								{getDueAtTimer()[1]}
							</Button>
							<Button
								variant="contained"
								size="medium"
								aria-label="2"
								onClick={() => setSlectedDueAt(2)}
								color={selectedDueAt === 2 ? 'primary' : 'secondary'}
							>
								{getDueAtTimer()[2]}
							</Button>
							<Button
								variant="contained"
								size="medium"
								aria-label="2"
								onClick={() => setSlectedDueAt(3)}
								color={selectedDueAt === 3 ? 'primary' : 'secondary'}
							>
								{getDueAtTimer()[3]}
							</Button>
							<Button
								variant="contained"
								size="medium"
								aria-label="2"
								onClick={() => setSlectedDueAt(4)}
								color={selectedDueAt === 4 ? 'primary' : 'secondary'}
							>
								{getDueAtTimer()[4]}
							</Button>
						</ButtonGroup>
					</>
				)}
				<br />
				<br />
				<StyledFormLabel>Good for (mins)</StyledFormLabel>
				<ButtonGroup
					variant="contained"
					color="primary"
					aria-label="primary button group"
				>
					{[5, 10, 20, 30, 60].map((item) => (
						<Button
							variant="contained"
							size="medium"
							aria-label="2"
							color={selectedGoodFor === item ? 'primary' : 'secondary'}
							onClick={() => setSelectedGoodFor(item)}
						>
							{item}
						</Button>
					))}
				</ButtonGroup>
			</div>
		</ControlPopover>
	);
};

export default TimerComponent;
