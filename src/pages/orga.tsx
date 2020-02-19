import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { FetchedOrder, State } from '../types';
import { fetchOrder } from '../utils/orders';
import { formatDate } from '../utils/date';
import { fetchItems, getItemName } from '../utils/items';
import { getRepresentation } from '../utils/representations';
import { Button } from '../components/UI';

import './orga.scss';

const Orga = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const [order, setOrder] = useState(null as FetchedOrder | null);
	const [checkedUsers, setCheckedUsers] = useState([] as Array<string>);
	const items = useSelector((state: State) => state.items);

	useEffect(() => {
		dispatch(fetchItems());
	}, [dispatch]);

	useEffect(() => {
		// Redirect to login page if not logged in
		if (!localStorage.getItem('broadway-token')) {
			router.replace('/login?next=orga');
		}
	}, [router]);

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		window.onmessage = async (e: any) => {
			// If the message is from the QR code scanner page
			if (window.location.hostname === e.source.location.hostname && e.source.location.pathname === '/scanner.html') {
				const res = await fetchOrder(e.data);

				if (!res) {
					return;
				}

				setOrder(res.data);
			}
		};
	});

	const toggleUser = (id: string) => {
		const index = checkedUsers.indexOf(id);

		if (index === -1) {
			// Add user
			setCheckedUsers([...checkedUsers, id]);
		} else {
			// Remove user
			const users = checkedUsers.slice();
			users.splice(index, 1);
			setCheckedUsers(users);
		}
	};

	let content = (
		<div className="scanner">
			<div className="scanner-placeholder">
				<i className="fas fa-video scanner-placeholder-icon" />
				Veuillez activer votre caméra
			</div>
			<iframe src="/scanner.html" className="scanner-preview" />
		</div>
	);

	if (order) {
		content = (
			<div className="validation">
				<div className="validation-info">
					<strong>Représentation :</strong> {getRepresentation(order.representation)}
					<br />
					<strong>Paiement :</strong> le {formatDate(order.paidAt)} par {order.firstname} {order.lastname} (
					{order.email})<br />
				</div>

				<div className="validation-users">
					{order.users.map((user) => {
						const checked = checkedUsers.indexOf(user.id) !== -1;

						return (
							<div
								className={`validation-user ${user.isScanned ? 'scanned' : ''} ${checked ? 'checked' : ''}`}
								key={user.id}
								onClick={() => {
									if (!user.isScanned) {
										toggleUser(user.id);
									}
								}}>
								<span className="validation-user-name">
									{user.firstname} {user.lastname}
								</span>
								{user.isScanned ? <span className="light-text"> (déjà scanné)</span> : ''}
								<div className="validation-user-type">
									{user.itemId !== 1 ? (
										<i className="fas fa-exclamation-triangle validation-user-type-attention" />
									) : (
										''
									)}
									{getItemName(user.itemId, items)}
								</div>
							</div>
						);
					})}
				</div>

				<Button type="submit" primary leftIcon="fas fa-check" className="validation-button">
					Valider les entrées
				</Button>
			</div>
		);
	}

	return <div id="orga">{content}</div>;
};

export default Orga;
