import { useState } from 'react';
import styles from './Input.module.css';
import cn from 'classnames';

interface Props {
	inputPlaceholder?: string;
	value?: string;
	inputType?: 'text' | 'password' | 'number';
	size?: 'small' | 'long';
	name?: string;
	isTextarea?: boolean;
}

const Input = ({ inputPlaceholder, value, inputType = 'text', size = 'long', name, isTextarea = false }: Props) => {
	return (
		<>
			{!isTextarea ? (
				<input
					className={cn({
						[styles.containerSmall]: size === 'small',
						[styles.containerLong]: size === 'long',
					})}
					placeholder={inputPlaceholder}
					value={value}
					type={inputType}
					name={name}
				/>
			) : (
				<textarea className={styles.containerTextarea} value={value} />
			)}
		</>
	);
};

export default Input;
