import React, { ReactNode } from 'react';

import Button from './Button';

import './Modal.scss';

/**
 * Displays a modal window
 */
const Modal = ({
	title,
	children,
	buttons,
	visible,
	closable,
	onCancel,
	onOk,
	className,
	containerClassName,
}: ModalProps) => {
	const buttonsContent =
		buttons !== '' ? (
			buttons
		) : (
			<>
				<Button onClick={onCancel}>Annuler</Button>
				<Button onClick={onOk} primary>
					Ok
				</Button>
			</>
		);

	return (
		<div className={`modal ${visible ? 'active' : ''} ${className}`}>
			<div className="modal-overflow">
				<div className="modal-overlay" onClick={() => closable && onCancel()} />

				<div className={`modal-container ${containerClassName}`}>
					<div className="modal-title">{title}</div>

					{closable && (
						<div className="modal-close-button" onClick={onCancel}>
							<span />
							<span />
						</div>
					)}

					<div className="modal-content">{children}</div>
					{buttonsContent && <div className="modal-buttons">{buttonsContent}</div>}
				</div>
			</div>
		</div>
	);
};

interface ModalProps {
	/**
	 * Modal window title
	 */
	title?: ReactNode;
	/**
	 * Modal window content
	 */
	children?: ReactNode;
	/**
	 * Modal window buttons. The default value is two buttons : "Annuler" and "Ok"
	 */
	buttons?: ReactNode;
	/**
	 * Whether the modal window is visible or not
	 */
	visible?: boolean;
	/**
	 * Whether the modal window is closable or not
	 */
	closable?: boolean;
	/**
	 * Function called when the user clicks on "Annuler" default button,
	 * or outside the modal, or on the close button
	 */
	onCancel: () => void;
	/**
	 * Function called when the user clicks on "Ok" default button
	 */
	onOk?: () => void;
	/**
	 * Class of the modal
	 */
	className?: string;
	/**
	 * Class of the container
	 */
	containerClassName?: string;
}

export default Modal;
