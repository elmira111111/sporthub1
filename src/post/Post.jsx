
import './Post.css'
import Aksana from '../assets/profile/Aksana.png'
import Melnikova from '../assets/profile/melnikova.png';
import Antonov from '../assets/profile/Antonov.png';

import Lebedeva from '../assets/profile/lebedeva.png';
import SergeevaMarina from '../assets/profile/SergeevaMarina.png';
import Sof from '../assets/profile/sof.png';
import Albert from '../assets/profile/Albert.png';

const persons = [
    { name: 'Аксана Ким', image: Aksana, comment: 'Баскетбол - это удивительный спорт, который...', date: 'Вт 17 Июнь, 12:00' },
  
    { name: 'Мельникова Ксения', image: Melnikova, comment: 'Баскетбол - это удивительный спорт, который...', date: 'Вт 17 Июнь, 12:00'},
  
  { name: 'Антонов Алекс', image: Antonov, comment: 'Баскетбол - это удивительный спорт, который...', date: 'Вт 17 Июнь, 12:00' },

    { name: 'Лебедева Екатерина', image: Lebedeva, comment: 'Баскетбол - это удивительный спорт, который...', date: 'Вт 17 Июнь, 12:00' },
  
    { name: 'Сергеева Мария', image: SergeevaMarina, comment: 'Баскетбол - это удивительный спорт, который...', date:'Вт 17 Июнь, 12:00' },
  
    { name: 'Иванова София', image: Sof, comment: 'Баскетбол - это удивительный спорт, который...', date: 'Вт 17 Июнь, 12:00' },

  { name: 'Альберт', image: Albert, comment: 'Баскетбол - это удивительный спорт, который...', date: 'Вт 17 Июнь, 12:00' }
];

const Post = () => {
  return (
      <div className="inbox-container">
           <p className="inbox-title">Опубликованные</p>
      {persons.map((person, index) => (
        <div key={index}>
          <div className="inbox-item">
            <img src={person.image} alt={person.name} className="inbox-avatar" />
            <div className="inbox-info">
              <div className="inbox-name">{person.name}</div>
              <div className="inbox-comment">{person.comment}</div>
            </div>
            <div className="inbox-date">{person.date}</div>
          </div>
          <hr className="inbox-divider" />
        </div>
      ))}
    </div>
  )
}

export default Post