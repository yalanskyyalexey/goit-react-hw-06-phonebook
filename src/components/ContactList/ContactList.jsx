import { useSelector, useDispatch } from 'react-redux';
import s from './ContactList.module.css';
import { removeContact } from '../../redux/contacts/contacts-actions';

export default function ContactList() {
	const contacts = useSelector(state => state.contacts);
	const filter = useSelector(state => state.filter);
	const dispatch = useDispatch();

	function getVisibleContacts() {
		const normalizedFilter = filter.toLowerCase();
		return contacts.filter(contact =>
			contact.name.toLowerCase().includes(normalizedFilter)
		);
	}

	const visibleContacts = getVisibleContacts();

	return (
		<ul className={s.list}>
			{visibleContacts &&
				visibleContacts.map(({ name, number, id }) => (
					<li className={s.items} key={id}>
						{`${name}: ${number}`}
						<button
							className={s.delete_btn}
							type='button'
							onClick={() => dispatch(removeContact(id))}
						>
							Remove
						</button>
					</li>
				))}
		</ul>
	);
}
