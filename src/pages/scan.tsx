import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { FetchedOrder, State } from '../types';
import { fetchOrder } from '../utils/orders';
import { formatDate } from '../utils/date';
import { fetchItems, getItemName } from '../utils/items';
import { scanUsers } from '../utils/users';
import { checkPermission, hasPermission } from '../utils/permission';
import { getRepresentation } from '../utils/representations';
import { Button } from '../components/UI';
import Loader from '../components/Loader';

import './scan.scss';

const Scan = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const [order, setOrder] = useState(null as FetchedOrder | null);
	const [checkedUsers, setCheckedUsers] = useState([] as Array<string>);
	const { items } = useSelector((state: State) => state.items);
	const login = useSelector((state: State) => state.login);

	useEffect(() => {
		dispatch(fetchItems());
	}, [dispatch]);

	useEffect(() => {
		checkPermission('orga', login, router, '/scan');
	}, [router, login]);

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		window.onmessage = async (e: any) => {
			// If the message is from the QR code scanner page
			if (window.location.hostname === e.source.location.hostname && e.source.location.pathname === '/scanner.html') {
				// If the user is not checking an order currently
				if (order) {
					return;
				}

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

	const closeValidation = () => {
		setOrder(null);
		setCheckedUsers([]);
	};

	const scanCheckedUsers = async () => {
		await scanUsers(checkedUsers);

		toast.success(`Les places ont bien été scannées`);

		closeValidation();
	};

	return (
		<div id="scan">
			{hasPermission('orga', login) ? (
				<>
					<div className="scanner">
						<div className="scanner-placeholder">
							<i className="fas fa-video scanner-placeholder-icon" />
							Veuillez activer votre caméra
						</div>
						<iframe src="/scanner.html" className="scanner-preview" />
					</div>

					{order && (
						<div className="validation">
							<div className="validation-info">
								<strong>Représentation :</strong> {getRepresentation(order.representation)}
								<br />
								{order.forcePay ? (
									<strong>Billet offert</strong>
								) : (
									<>
										<strong>Paiement :</strong> le {formatDate(order.paidAt)} par {order.firstname} {order.lastname} (
										{order.email})
									</>
								)}
								<Button
									noStyle
									onClick={() => {
										closeValidation();
										toast.warn("Aucune place n'a été scannée");
									}}
									leftIcon="fas fa-times"
									className="validation-close-button"
								/>
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

							<Button
								primary
								leftIcon="fas fa-check"
								className="validation-button"
								onClick={scanCheckedUsers}
								disabled={!checkedUsers.length}>
								Valider les entrées
							</Button>
						</div>
					)}
				</>
			) : (
				<Loader />
			)}
		</div>
	);
};

export default Scan;
